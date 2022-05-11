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

func (k msgServer) AddMember(goCtx context.Context, msg *types.MsgAddMember) (*types.MsgAddMemberResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	nextMemberTransaction, found := k.GetNextMemberTransaction(ctx)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Can not get new Member transaction ID")
	}
	newIndex := strconv.FormatUint(nextMemberTransaction.IdValue, 10)

	wallet, found := k.GetWallet(ctx, msg.WalltName)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("Wallet with name %s not found", msg.WalltName))
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
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "you are not a part of this transaction's wallet")
	}
	walletMembers = strings.Split(wallet.Members, ",")
	if strings.TrimSpace(msg.Member) == "" {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Member shouldn't be empty")
	}
	if contains(walletMembers, strings.TrimSpace(msg.Member)) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Member already exists in this wallet")
	}
	memberTransaction := types.MemberTransaction{
		Index:      newIndex,
		WalletName: msg.WalltName,
		Member:     msg.Member,
		Signers:    msg.Creator,
		Action:     "Add",
		State:      "Pending",
	}
	signersList := strings.Split(memberTransaction.Signers, ",")
	minSigns, err := strconv.Atoi(wallet.MinSigns)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "Can not get min signs of the wallet")
	}
	if len(signersList) < minSigns {
		memberTransaction.State = "Pending"
	} else {
		wallet.Members = fmt.Sprintf("%s,%s", wallet.Members, strings.TrimSpace(msg.Member))
		k.SetWallet(ctx, wallet)
		memberTransaction.State = "Executed"
	}
	k.SetMemberTransaction(ctx, memberTransaction)
	nextMemberTransaction.IdValue++
	k.Keeper.SetNextMemberTransaction(ctx, nextMemberTransaction)

	return &types.MsgAddMemberResponse{}, nil
}
