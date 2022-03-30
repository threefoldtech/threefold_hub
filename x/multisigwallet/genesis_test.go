package multisigwallet_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/threefoldtech/threefold_hub/testutil/keeper"
	"github.com/threefoldtech/threefold_hub/testutil/nullify"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		WalletList: []types.Wallet{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		TransactionList: []types.Transaction{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		NextTransaction: &types.NextTransaction{
			IdValue: 11,
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.MultisigwalletKeeper(t)
	multisigwallet.InitGenesis(ctx, *k, genesisState)
	got := multisigwallet.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.WalletList, got.WalletList)
	require.ElementsMatch(t, genesisState.TransactionList, got.TransactionList)
	require.Equal(t, genesisState.NextTransaction, got.NextTransaction)
	// this line is used by starport scaffolding # genesis/test/assert
}
