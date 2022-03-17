package validators_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/threefold/threefold_hub/testutil/keeper"
	"github.com/threefold/threefold_hub/testutil/nullify"
	"github.com/threefold/threefold_hub/testutil/sample"
	"github.com/threefold/threefold_hub/x/validators"
	"github.com/threefold/threefold_hub/x/validators/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		Validators: []types.Validator{
			{
				OperatorAddress: sample.AccAddress(),
			},
			{
				OperatorAddress: sample.AccAddress(),
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ValidatorsKeeper(t)
	validators.InitGenesis(ctx, *k, genesisState)
	got := validators.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.Validators, got.Validators)
	// this line is used by starport scaffolding # genesis/test/assert
}
