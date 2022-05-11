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

func createTestNextMemberTransaction(keeper *keeper.Keeper, ctx sdk.Context) types.NextMemberTransaction {
	item := types.NextMemberTransaction{}
	keeper.SetNextMemberTransaction(ctx, item)
	return item
}

func TestNextMemberTransactionGet(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	item := createTestNextMemberTransaction(keeper, ctx)
	rst, found := keeper.GetNextMemberTransaction(ctx)
	require.True(t, found)
	require.Equal(t,
		nullify.Fill(&item),
		nullify.Fill(&rst),
	)
}

func TestNextMemberTransactionRemove(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	createTestNextMemberTransaction(keeper, ctx)
	keeper.RemoveNextMemberTransaction(ctx)
	_, found := keeper.GetNextMemberTransaction(ctx)
	require.False(t, found)
}
