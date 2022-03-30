package keeper

import (
	"context"
	"fmt"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func (k msgServer) AddSigners(goCtx context.Context, msg *types.MsgAddSigners) (*types.MsgAddSignersResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	wallet, found := k.GetWallet(ctx, msg.WalletName)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("Wallet with name %s not found", msg.WalletName))
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
	MembersToAdd := strings.Split(msg.Members, ",")
	for _, member := range MembersToAdd {
		walletMembers = strings.Split(wallet.Members, ",")
		if !contains(walletMembers, member) && strings.TrimSpace(member) != "" {
			wallet.Members = fmt.Sprintf("%s,%s", wallet.Members, strings.TrimSpace(member))
		}
	}
	k.SetWallet(ctx, wallet)
	return &types.MsgAddSignersResponse{}, nil
}
