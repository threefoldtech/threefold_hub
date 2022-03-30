package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

// SetNextTransaction set nextTransaction in the store
func (k Keeper) SetNextTransaction(ctx sdk.Context, nextTransaction types.NextTransaction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextTransactionKey))
	b := k.cdc.MustMarshal(&nextTransaction)
	store.Set([]byte{0}, b)
}

// GetNextTransaction returns nextTransaction
func (k Keeper) GetNextTransaction(ctx sdk.Context) (val types.NextTransaction, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextTransactionKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveNextTransaction removes nextTransaction from the store
func (k Keeper) RemoveNextTransaction(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextTransactionKey))
	store.Delete([]byte{0})
}
