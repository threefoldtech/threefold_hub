package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/threefold/threefold_hub/testutil/keeper"
	"github.com/threefold/threefold_hub/testutil/nullify"
	"github.com/threefold/threefold_hub/x/validators/keeper"
	"github.com/threefold/threefold_hub/x/validators/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createHistoricalInfo(keeper *keeper.Keeper, ctx sdk.Context, height int64) types.HistoricalInfo {
	item := types.HistoricalInfo{}

	keeper.SetHistoricalInfo(ctx, height, &item)

	return item
}

func TestHistoricalInfoGet(t *testing.T) {
	keeper, ctx := keepertest.ValidatorsKeeper(t)
	_ = createHistoricalInfo(keeper, ctx, 10)
	rst, found := keeper.GetHistoricalInfo(ctx,
		10,
	)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&types.HistoricalInfo{}),
		nullify.Fill(&rst),
	)

}
func TestHistoricalInfoRemove(t *testing.T) {
	keeper, ctx := keepertest.ValidatorsKeeper(t)
	_ = createHistoricalInfo(keeper, ctx, 10)
	keeper.RemoveHistoricalInfo(ctx,
		10,
	)
	_, found := keeper.GetHistoricalInfo(ctx,
		10,
	)
	require.False(t, found)

}
