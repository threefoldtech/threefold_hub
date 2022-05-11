package cli_test

import (
	"fmt"
	"testing"

	clitestutil "github.com/cosmos/cosmos-sdk/testutil/cli"
	"github.com/stretchr/testify/require"
	tmcli "github.com/tendermint/tendermint/libs/cli"
	"google.golang.org/grpc/status"

	"github.com/threefoldtech/threefold_hub/testutil/network"
	"github.com/threefoldtech/threefold_hub/testutil/nullify"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/client/cli"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func networkWithNextMemberTransactionObjects(t *testing.T) (*network.Network, types.NextMemberTransaction) {
	t.Helper()
	cfg := network.DefaultConfig()
	state := types.GenesisState{}
	require.NoError(t, cfg.Codec.UnmarshalJSON(cfg.GenesisState[types.ModuleName], &state))

	nextMemberTransaction := &types.NextMemberTransaction{}
	nullify.Fill(&nextMemberTransaction)
	state.NextMemberTransaction = nextMemberTransaction
	buf, err := cfg.Codec.MarshalJSON(&state)
	require.NoError(t, err)
	cfg.GenesisState[types.ModuleName] = buf
	return network.New(t, cfg), *state.NextMemberTransaction
}

func TestShowNextMemberTransaction(t *testing.T) {
	net, obj := networkWithNextMemberTransactionObjects(t)

	ctx := net.Validators[0].ClientCtx
	common := []string{
		fmt.Sprintf("--%s=json", tmcli.OutputFlag),
	}
	for _, tc := range []struct {
		desc string
		args []string
		err  error
		obj  types.NextMemberTransaction
	}{
		{
			desc: "get",
			args: common,
			obj:  obj,
		},
	} {
		tc := tc
		t.Run(tc.desc, func(t *testing.T) {
			var args []string
			args = append(args, tc.args...)
			out, err := clitestutil.ExecTestCLICmd(ctx, cli.CmdShowNextMemberTransaction(), args)
			if tc.err != nil {
				stat, ok := status.FromError(tc.err)
				require.True(t, ok)
				require.ErrorIs(t, stat.Err(), tc.err)
			} else {
				require.NoError(t, err)
				var resp types.QueryGetNextMemberTransactionResponse
				require.NoError(t, net.Config.Codec.UnmarshalJSON(out.Bytes(), &resp))
				require.NotNil(t, resp.NextMemberTransaction)
				require.Equal(t,
					nullify.Fill(&tc.obj),
					nullify.Fill(&resp.NextMemberTransaction),
				)
			}
		})
	}
}
