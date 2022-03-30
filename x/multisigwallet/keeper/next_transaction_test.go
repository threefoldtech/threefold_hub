package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"

	keepertest "github.com/threefoldtech/threefold_hub/testutil/keeper"
	"github.com/threefoldtech/threefold_hub/testutil/nullify"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/keeper"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func createTestNextTransaction(keeper *keeper.Keeper, ctx sdk.Context) types.NextTransaction {
	item := types.NextTransaction{}
	keeper.SetNextTransaction(ctx, item)
	return item
}

func TestNextTransactionGet(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	item := createTestNextTransaction(keeper, ctx)
	rst, found := keeper.GetNextTransaction(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestNextTransactionRemove(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	createTestNextTransaction(keeper, ctx)
	keeper.RemoveNextTransaction(ctx)
	_, found := keeper.GetNextTransaction(ctx)
	require.False(t, found)
}
