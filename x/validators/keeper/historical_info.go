package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/threefold/threefold_hub/x/validators/types"
)

// SetHistoricalInfo set a specific historicalInfo in the store from its index
func (k Keeper) SetHistoricalInfo(ctx sdk.Context, height int64, historicalInfo *types.HistoricalInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HistoricalInfoKeyPrefix))
	b := k.cdc.MustMarshal(historicalInfo)
	store.Set(types.HistoricalInfoKey(
		height,
	), b)
}

// GetHistoricalInfo returns a historicalInfo from its index
func (k Keeper) GetHistoricalInfo(
	ctx sdk.Context,
	height int64,

) (val types.HistoricalInfo, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HistoricalInfoKeyPrefix))

	b := store.Get(types.HistoricalInfoKey(
		height,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveHistoricalInfo removes a historicalInfo from the store
func (k Keeper) RemoveHistoricalInfo(
	ctx sdk.Context,
	height int64,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HistoricalInfoKeyPrefix))
	store.Delete(types.HistoricalInfoKey(
		height,
	))
}

// GetAllHistoricalInfo returns all historicalInfo
func (k Keeper) GetAllHistoricalInfo(ctx sdk.Context) (list []types.HistoricalInfo) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.HistoricalInfoKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.HistoricalInfo
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// TrackHistoricalInfo saves the latest historical-info and deletes the oldest
// heights that are below pruning height
func (k Keeper) TrackHistoricalInfo(ctx sdk.Context) {
	entryNum := k.HistoricalEntries(ctx)

	// Prune store to ensure we only have parameter-defined historical entries.
	// In most cases, this will involve removing a single historical entry.
	// In the rare scenario when the historical entries gets reduced to a lower value k'
	// from the original value k. k - k' entries must be deleted from the store.
	// Since the entries to be deleted are always in a continuous range, we can iterate
	// over the historical entries starting from the most recent version to be pruned
	// and then return at the first empty entry.
	for i := ctx.BlockHeight() - int64(entryNum); i >= 0; i-- {
		_, found := k.GetHistoricalInfo(ctx, i)
		if found {
			k.RemoveHistoricalInfo(ctx, i)
		} else {
			break
		}
	}

	// if there is no need to persist historicalInfo, return
	if entryNum == 0 {
		return
	}

	// Create HistoricalInfo struct
	lastVals := k.GetLastValidators(ctx)
	historicalEntry := types.NewHistoricalInfo(ctx.BlockHeader(), lastVals)

	// Set latest HistoricalInfo at current height
	k.SetHistoricalInfo(ctx, ctx.BlockHeight(), &historicalEntry)
}
