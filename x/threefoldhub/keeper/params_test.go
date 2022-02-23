package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "github.com/threefold/threefold_hub/testutil/keeper"
	"github.com/threefold/threefold_hub/x/threefoldhub/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ThreefoldhubKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
