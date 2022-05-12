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

func (k msgServer) SignTransaction(goCtx context.Context, msg *types.MsgSignTransaction) (*types.MsgSignTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	transaction, found := k.GetTransaction(ctx, msg.TransactionID)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Transaction with this id not found")
	}
	creatorAlreadySigned := false
	signersList := strings.Split(transaction.Members, ",")
	for _, member := range signersList {
		if msg.Creator == member {
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
	transaction.Members = fmt.Sprintf("%s,%s", transaction.Members, msg.Creator)
	signersList = strings.Split(transaction.Members, ",")
	minSigns, err := strconv.Atoi(wallet.MinSigns)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Can not get min signs of the wallet")
	}
	if len(signersList) < minSigns {
		transaction.State = "Pending"
	} else {
		transactionAmount, err := sdk.ParseCoinsNormalized(transaction.Amount)
		if err != nil {
			panic(err)
		}
		walletAddress, _ := sdk.AccAddressFromBech32(wallet.Address)
		toAddress, _ := sdk.AccAddressFromBech32(transaction.ToAddress)
		sdkError := k.bankKeeper.SendCoins(ctx, walletAddress, toAddress, transactionAmount)
		if sdkError != nil {
			return nil, sdkerrors.Wrap(sdkError, fmt.Sprintf("can not send money from wallet:%s to account: %s", wallet.Address, transaction.ToAddress))
		}
		transaction.State = "Executed"
	}

	k.SetTransaction(ctx, transaction)
	return &types.MsgSignTransactionResponse{}, nil
}
