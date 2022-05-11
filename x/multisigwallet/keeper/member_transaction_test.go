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

func createNMemberTransaction(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.MemberTransaction {
	items := make([]types.MemberTransaction, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetMemberTransaction(ctx, items[i])
	}
	return items
}

func TestMemberTransactionGet(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	items := createNMemberTransaction(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetMemberTransaction(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestMemberTransactionRemove(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	items := createNMemberTransaction(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveMemberTransaction(ctx,
			item.Index,
		)
		_, found := keeper.GetMemberTransaction(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestMemberTransactionGetAll(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	items := createNMemberTransaction(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllMemberTransaction(ctx)),
	)
}
