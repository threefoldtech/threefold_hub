package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	keepertest "github.com/threefoldtech/threefold_hub/testutil/keeper"
	"github.com/threefoldtech/threefold_hub/testutil/nullify"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/keeper"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNTransaction(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Transaction {
	items := make([]types.Transaction, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetTransaction(ctx, items[i])
	}
	return items
}

func TestTransactionGet(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	items := createNTransaction(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetTransaction(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestTransactionRemove(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	items := createNTransaction(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveTransaction(ctx,
			item.Index,
		)
		_, found := keeper.GetTransaction(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestTransactionGetAll(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	items := createNTransaction(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllTransaction(ctx)),
	)
}
