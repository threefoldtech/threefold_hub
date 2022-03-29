package keeper_test

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/threefoldtech/threefold_hub/testutil/keeper"
	"github.com/threefoldtech/threefold_hub/testutil/nullify"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func TestNextTransactionQuery(t *testing.T) {
	keeper, ctx := keepertest.MultisigwalletKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	item := createTestNextTransaction(keeper, ctx)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetNextTransactionRequest
		response *types.QueryGetNextTransactionResponse
		err      error
	}{
		{
			desc:     "First",
			request:  &types.QueryGetNextTransactionRequest{},
			response: &types.QueryGetNextTransactionResponse{NextTransaction: item},
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.NextTransaction(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}
