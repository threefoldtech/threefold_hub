package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

// SetTransaction set a specific transaction in the store from its index
func (k Keeper) SetTransaction(ctx sdk.Context, transaction types.Transaction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransactionKeyPrefix))
	b := k.cdc.MustMarshal(&transaction)
	store.Set(types.TransactionKey(
		transaction.Index,
	), b)
}

// GetTransaction returns a transaction from its index
func (k Keeper) GetTransaction(
	ctx sdk.Context,
	index string,

) (val types.Transaction, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransactionKeyPrefix))

	b := store.Get(types.TransactionKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveTransaction removes a transaction from the store
func (k Keeper) RemoveTransaction(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransactionKeyPrefix))
	store.Delete(types.TransactionKey(
		index,
	))
}

// GetAllTransaction returns all transaction
func (k Keeper) GetAllTransaction(ctx sdk.Context) (list []types.Transaction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.TransactionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Transaction
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
