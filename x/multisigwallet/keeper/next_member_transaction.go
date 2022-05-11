package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

// SetNextMemberTransaction set nextMemberTransaction in the store
func (k Keeper) SetNextMemberTransaction(ctx sdk.Context, nextMemberTransaction types.NextMemberTransaction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextMemberTransactionKey))
	b := k.cdc.MustMarshal(&nextMemberTransaction)
	store.Set([]byte{0}, b)
}

// GetNextMemberTransaction returns nextMemberTransaction
func (k Keeper) GetNextMemberTransaction(ctx sdk.Context) (val types.NextMemberTransaction, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextMemberTransactionKey))

	b := store.Get([]byte{0})
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveNextMemberTransaction removes nextMemberTransaction from the store
func (k Keeper) RemoveNextMemberTransaction(ctx sdk.Context) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.NextMemberTransactionKey))
	store.Delete([]byte{0})
}
