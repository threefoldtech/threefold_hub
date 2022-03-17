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

	"github.com/threefold/threefold_hub/testutil/sample"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNValidator(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Validator {
	items := make([]types.Validator, n)
	for i := range items {
		items[i].OperatorAddress = sample.AccAddress()

		keeper.SetValidator(ctx, items[i])
	}
	return items
}

func TestValidatorGet(t *testing.T) {
	keeper, ctx := keepertest.ValidatorsKeeper(t)
	items := createNValidator(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetValidator(ctx,
			item.OperatorAddress,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestValidatorRemove(t *testing.T) {
	keeper, ctx := keepertest.ValidatorsKeeper(t)
	items := createNValidator(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveValidator(ctx,
			item.OperatorAddress,
		)
		_, found := keeper.GetValidator(ctx,
			item.OperatorAddress,
		)
		require.False(t, found)
	}
}

func TestValidatorGetAll(t *testing.T) {
	keeper, ctx := keepertest.ValidatorsKeeper(t)
	items := createNValidator(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllValidators(ctx)),
	)
}
