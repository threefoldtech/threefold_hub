package keeper

import (
	"context"
	"fmt"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func contains(s []string, str string) bool {
	for _, v := range s {
		if v == str {
			return true
		}
	}

	return false
}

func (k msgServer) RemoveSigners(goCtx context.Context, msg *types.MsgRemoveSigners) (*types.MsgRemoveSignersResponse, error) {
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
	MembersToRemove := strings.Split(msg.Members, ",")
	updatedMembers := ""
	for _, member := range walletMembers {
		if !contains(MembersToRemove, member) && strings.TrimSpace(member) != "" {
			if updatedMembers == "" {
				updatedMembers = strings.TrimSpace(member)
			} else {
				updatedMembers = fmt.Sprintf("%s,%s", updatedMembers, strings.TrimSpace(member))
			}
		}
	}
	wallet.Members = updatedMembers
	k.SetWallet(ctx, wallet)

	return &types.MsgRemoveSignersResponse{}, nil
}
