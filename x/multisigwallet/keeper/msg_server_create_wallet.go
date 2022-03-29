package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/crypto/keys/ed25519"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func (k msgServer) CreateWallet(goCtx context.Context, msg *types.MsgCreateWallet) (*types.MsgCreateWalletResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	walletPubKey := ed25519.GenPrivKey().PubKey()
	address := sdk.AccAddress(walletPubKey.Address())

	account := k.accountKeeper.NewAccountWithAddress(ctx, address)
	k.accountKeeper.SetAccount(ctx, account)
	wallet := types.Wallet{
		Index:    msg.Name,
		Name:     msg.Name,
		Members:  msg.Members,
		MinSigns: msg.MinSigns,
		Address:  address.String(),
	}
	k.SetWallet(ctx, wallet)

	return &types.MsgCreateWalletResponse{Address: wallet.Address}, nil
}
