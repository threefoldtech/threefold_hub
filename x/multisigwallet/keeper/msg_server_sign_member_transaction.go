package keeper

import (
	"context"
	"fmt"
	"strconv"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func (k msgServer) SignMemberTransaction(goCtx context.Context, msg *types.MsgSignMemberTransaction) (*types.MsgSignMemberTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	transaction, found := k.GetMemberTransaction(ctx, msg.TransactionID)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Member Transaction with this id not found")
	}
	creatorAlreadySigned := false
	signersList := strings.Split(transaction.Signers, ",")
	for _, signer := range signersList {
		if msg.Creator == signer {
			creatorAlreadySigned = true
			break
		}
	}
	if creatorAlreadySigned {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "you already signed this transaction")
	}

	wallet, found := k.GetWallet(ctx, transaction.WalletName)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "wallet for this transaction doesn't exist")
	}
	creatorInWalletMembers := false
	membersList := strings.Split(wallet.Members, ",")
	for _, member := range membersList {
		if msg.Creator == member {
			creatorInWalletMembers = true
			break
		}
	}

	if !creatorInWalletMembers {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "you are not a part of this wallet")
	}
	transaction.Signers = fmt.Sprintf("%s,%s", transaction.Signers, msg.Creator)
	signersList = strings.Split(transaction.Signers, ",")
	minSigns, err := strconv.Atoi(wallet.MinSigns)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Can not get min signs of the wallet")
	}
	if len(signersList) < minSigns {
		transaction.State = "Pending"
	} else {
		if transaction.Action == "Add" && !contains(signersList, strings.TrimSpace(transaction.Member)) {
			wallet.Members = fmt.Sprintf("%s,%s", wallet.Members, strings.TrimSpace(transaction.Member))
		} else if transaction.Action == "Remove" {
			updatedMembers := ""
			walletMembers := strings.Split(wallet.Members, ",")
			for _, member := range walletMembers {
				if strings.TrimSpace(transaction.Member) == member {
					continue
				}
				if updatedMembers == "" {
					updatedMembers = strings.TrimSpace(member)
				} else {
					updatedMembers = fmt.Sprintf("%s,%s", updatedMembers, strings.TrimSpace(member))
				}
			}
			wallet.Members = updatedMembers
		}
		k.SetWallet(ctx, wallet)
		transaction.State = "Executed"
	}

	k.SetMemberTransaction(ctx, transaction)

	return &types.MsgSignMemberTransactionResponse{}, nil
}
