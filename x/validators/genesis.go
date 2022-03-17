package validators

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/threefold/threefold_hub/x/validators/keeper"
	"github.com/threefold/threefold_hub/x/validators/types"

	tmtypes "github.com/tendermint/tendermint/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the validator
	for _, elem := range genState.Validators {
		k.SetValidator(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.Validators = k.GetAllValidators(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}

// WriteValidators returns a slice of tendermint genesis validators.
func WriteValidators(ctx sdk.Context, keeper keeper.Keeper) (vals []tmtypes.GenesisValidator, err error) {
	for _, validator := range keeper.GetLastValidators(ctx) {
		storedPK := validator.GetConsensusPubkey()

		tmPk, err := cryptocodec.ToTmPubKeyInterface(pk)
		if err != nil {
			break
		}

		vals = append(vals, tmtypes.GenesisValidator{
			Address: sdk.ConsAddress(tmPk.Address()).Bytes(),
			PubKey:  tmPk,
			Power:   10,
			Name:    validator.Description.Moniker,
		})

	}

	return
}
