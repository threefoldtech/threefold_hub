package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

// SetMemberTransaction set a specific memberTransaction in the store from its index
func (k Keeper) SetMemberTransaction(ctx sdk.Context, memberTransaction types.MemberTransaction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MemberTransactionKeyPrefix))
	b := k.cdc.MustMarshal(&memberTransaction)
	store.Set(types.MemberTransactionKey(
		memberTransaction.Index,
	), b)
}

// GetMemberTransaction returns a memberTransaction from its index
func (k Keeper) GetMemberTransaction(
	ctx sdk.Context,
	index string,

) (val types.MemberTransaction, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MemberTransactionKeyPrefix))

	b := store.Get(types.MemberTransactionKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveMemberTransaction removes a memberTransaction from the store
func (k Keeper) RemoveMemberTransaction(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MemberTransactionKeyPrefix))
	store.Delete(types.MemberTransactionKey(
		index,
	))
}

// GetAllMemberTransaction returns all memberTransaction
func (k Keeper) GetAllMemberTransaction(ctx sdk.Context) (list []types.MemberTransaction) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.MemberTransactionKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.MemberTransaction
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
