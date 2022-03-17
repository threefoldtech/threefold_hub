package types_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/threefold/threefold_hub/x/validators/types"

	"github.com/threefold/threefold_hub/testutil/sample"
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

				Validators: []types.Validator{
					{
						OperatorAddress: sample.AccAddress(),
					},
					{
						OperatorAddress: sample.AccAddress(),
					},
				},
				// this line is used by starport scaffolding # types/genesis/validField
			},
			valid: true,
		},
		{
			desc: "duplicated validator",
			genState: &types.GenesisState{
				Validators: []types.Validator{
					{
						OperatorAddress: "0",
					},
					{
						OperatorAddress: "0",
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
