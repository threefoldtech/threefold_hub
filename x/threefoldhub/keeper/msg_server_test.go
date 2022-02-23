package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/threefold/threefold_hub/testutil/keeper"
	"github.com/threefold/threefold_hub/x/threefoldhub/keeper"
	"github.com/threefold/threefold_hub/x/threefoldhub/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ThreefoldhubKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
