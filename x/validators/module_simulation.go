package validators

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/threefold/threefold_hub/testutil/sample"
	validatorssimulation "github.com/threefold/threefold_hub/x/validators/simulation"
	"github.com/threefold/threefold_hub/x/validators/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = validatorssimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateValidator = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateValidator int = 100

	opWeightMsgUpdateValidator = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateValidator int = 100

	opWeightMsgDeleteValidator = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteValidator int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	validatorsGenesis := types.GenesisState{
		Validators: []types.Validator{
			{
				OperatorAddress: sample.AccAddress(),
			},
			{
				OperatorAddress: sample.AccAddress(),
			},
		},
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&validatorsGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateValidator int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateValidator, &weightMsgCreateValidator, nil,
		func(_ *rand.Rand) {
			weightMsgCreateValidator = defaultWeightMsgCreateValidator
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateValidator,
		validatorssimulation.SimulateMsgCreateValidator(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateValidator int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateValidator, &weightMsgUpdateValidator, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateValidator = defaultWeightMsgUpdateValidator
		},
	)
	var weightMsgDeleteValidator int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeleteValidator, &weightMsgDeleteValidator, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteValidator = defaultWeightMsgDeleteValidator
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteValidator,
		validatorssimulation.SimulateMsgDeleteValidator(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
