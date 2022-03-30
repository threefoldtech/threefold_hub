package keeper

import (
	"context"
	"strconv"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func (k msgServer) CreateTransaction(goCtx context.Context, msg *types.MsgCreateTransaction) (*types.MsgCreateTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	nextTransaction, found := k.GetNextTransaction(ctx)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Can not get new transaction ID")
	}
	newIndex := strconv.FormatUint(nextTransaction.IdValue, 10)
	wallet, found := k.GetWallet(ctx, msg.WalltName)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Wallet not found")
	}
	walletMembers := strings.Split(wallet.Members, ",")
	creatorInWalletMembers := false
	for _, member := range walletMembers {
		if msg.Creator == member {
			creatorInWalletMembers = true
			break
		}
	}
	if !creatorInWalletMembers {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "you are not a part of this wallet")
	}

	transaction := types.Transaction{
		Index: newIndex,
		//Title: msg.Title,
		//Description: msg.Description,
		WalletName: msg.WalltName,
		Members:    msg.Creator,
		ToAddress:  msg.ToAddress,
		Amount:     msg.Amount,
	}
	signersList := strings.Split(transaction.Members, ",")
	minSigns, err := strconv.Atoi(wallet.MinSigns)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Can not get min signs of the wallet")
	}
	if len(signersList) < minSigns {
		transaction.State = "Pending"
	} else {
		transaction.State = "Ready"
	}
	k.SetTransaction(ctx, transaction)
	nextTransaction.IdValue++
	k.Keeper.SetNextTransaction(ctx, nextTransaction)
	return &types.MsgCreateTransactionResponse{}, nil
}
