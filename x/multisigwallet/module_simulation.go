package multisigwallet

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/threefoldtech/threefold_hub/testutil/sample"
	multisigwalletsimulation "github.com/threefoldtech/threefold_hub/x/multisigwallet/simulation"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = multisigwalletsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateWallet = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateWallet int = 100

	opWeightMsgCreateTransaction = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateTransaction int = 100

	opWeightMsgSignTransaction = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSignTransaction int = 100

	opWeightMsgExecuteTransaction = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgExecuteTransaction int = 100

	opWeightMsgAddSigners = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAddSigners int = 100

	opWeightMsgRemoveSigners = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRemoveSigners int = 100

	opWeightMsgUpdateMinSigns = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateMinSigns int = 100

	opWeightMsgAddMember = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAddMember int = 100

	opWeightMsgSignMemberTransaction = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgSignMemberTransaction int = 100

	opWeightMsgRemoveMember = "op_weight_msg_create_chain"
	// TODO: Determine the simulation weight value
	defaultWeightMsgRemoveMember int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	multisigwalletGenesis := types.GenesisState{
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&multisigwalletGenesis)
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

	var weightMsgCreateWallet int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateWallet, &weightMsgCreateWallet, nil,
		func(_ *rand.Rand) {
			weightMsgCreateWallet = defaultWeightMsgCreateWallet
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateWallet,
		multisigwalletsimulation.SimulateMsgCreateWallet(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateTransaction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateTransaction, &weightMsgCreateTransaction, nil,
		func(_ *rand.Rand) {
			weightMsgCreateTransaction = defaultWeightMsgCreateTransaction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateTransaction,
		multisigwalletsimulation.SimulateMsgCreateTransaction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSignTransaction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSignTransaction, &weightMsgSignTransaction, nil,
		func(_ *rand.Rand) {
			weightMsgSignTransaction = defaultWeightMsgSignTransaction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSignTransaction,
		multisigwalletsimulation.SimulateMsgSignTransaction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgExecuteTransaction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgExecuteTransaction, &weightMsgExecuteTransaction, nil,
		func(_ *rand.Rand) {
			weightMsgExecuteTransaction = defaultWeightMsgExecuteTransaction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgExecuteTransaction,
		multisigwalletsimulation.SimulateMsgExecuteTransaction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAddSigners int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAddSigners, &weightMsgAddSigners, nil,
		func(_ *rand.Rand) {
			weightMsgAddSigners = defaultWeightMsgAddSigners
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAddSigners,
		multisigwalletsimulation.SimulateMsgAddSigners(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRemoveSigners int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRemoveSigners, &weightMsgRemoveSigners, nil,
		func(_ *rand.Rand) {
			weightMsgRemoveSigners = defaultWeightMsgRemoveSigners
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRemoveSigners,
		multisigwalletsimulation.SimulateMsgRemoveSigners(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateMinSigns int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdateMinSigns, &weightMsgUpdateMinSigns, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateMinSigns = defaultWeightMsgUpdateMinSigns
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateMinSigns,
		multisigwalletsimulation.SimulateMsgUpdateMinSigns(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAddMember int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAddMember, &weightMsgAddMember, nil,
		func(_ *rand.Rand) {
			weightMsgAddMember = defaultWeightMsgAddMember
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAddMember,
		multisigwalletsimulation.SimulateMsgAddMember(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgSignMemberTransaction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgSignMemberTransaction, &weightMsgSignMemberTransaction, nil,
		func(_ *rand.Rand) {
			weightMsgSignMemberTransaction = defaultWeightMsgSignMemberTransaction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgSignMemberTransaction,
		multisigwalletsimulation.SimulateMsgSignMemberTransaction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgRemoveMember int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgRemoveMember, &weightMsgRemoveMember, nil,
		func(_ *rand.Rand) {
			weightMsgRemoveMember = defaultWeightMsgRemoveMember
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgRemoveMember,
		multisigwalletsimulation.SimulateMsgRemoveMember(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
