package threefoldhub_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/threefold/threefold_hub/testutil/keeper"
	"github.com/threefold/threefold_hub/testutil/nullify"
	"github.com/threefold/threefold_hub/x/threefoldhub"
	"github.com/threefold/threefold_hub/x/threefoldhub/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ThreefoldhubKeeper(t)
	threefoldhub.InitGenesis(ctx, *k, genesisState)
	got := threefoldhub.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
