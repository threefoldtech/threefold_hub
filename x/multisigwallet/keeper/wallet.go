package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

// SetWallet set a specific wallet in the store from its index
func (k Keeper) SetWallet(ctx sdk.Context, wallet types.Wallet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WalletKeyPrefix))
	b := k.cdc.MustMarshal(&wallet)
	store.Set(types.WalletKey(
		wallet.Index,
	), b)
}

// GetWallet returns a wallet from its index
func (k Keeper) GetWallet(
	ctx sdk.Context,
	index string,

) (val types.Wallet, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WalletKeyPrefix))

	b := store.Get(types.WalletKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveWallet removes a wallet from the store
func (k Keeper) RemoveWallet(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WalletKeyPrefix))
	store.Delete(types.WalletKey(
		index,
	))
}

// GetAllWallet returns all wallet
func (k Keeper) GetAllWallet(ctx sdk.Context) (list []types.Wallet) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WalletKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Wallet
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
