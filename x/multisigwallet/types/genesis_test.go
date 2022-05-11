package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func TestGenesisState_Validate(t *testing.T) {
	for _, tc := range []struct {
		desc     string
		genState *types.GenesisState
		valid    bool
	}{
		{
			desc:     "default is valid",
			genState: types.DefaultGenesis(),
			valid:    true,
		},
		{
			desc: "valid genesis state",
			genState: &types.GenesisState{

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
					IdValue: 59,
				},
				MemberTransactionList: []types.MemberTransaction{
					{
						Index: "0",
					},
					{
						Index: "1",
					},
				},
				NextMemberTransaction: &types.NextMemberTransaction{
					IdValue: 50,
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated wallet",
			genState: &types.GenesisState{
				WalletList: []types.Wallet{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated transaction",
			genState: &types.GenesisState{
				TransactionList: []types.Transaction{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		{
			desc: "duplicated memberTransaction",
			genState: &types.GenesisState{
				MemberTransactionList: []types.MemberTransaction{
					{
						Index: "0",
					},
					{
						Index: "0",
					},
				},
			},
			valid: false,
		},
		// this line is used by starport scaffolding # types/genesis/testcase
	} {
		t.Run(tc.desc, func(t *testing.T) {
			err := tc.genState.Validate()
			if tc.valid {
				require.NoError(t, err)
			} else {
				require.Error(t, err)
			}
		})
	}
}
