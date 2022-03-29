package multisigwallet

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/keeper"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the wallet
	for _, elem := range genState.WalletList {
		k.SetWallet(ctx, elem)
	}
	// Set all the transaction
	for _, elem := range genState.TransactionList {
		k.SetTransaction(ctx, elem)
	}
	// Set if defined
	if genState.NextTransaction != nil {
		k.SetNextTransaction(ctx, *genState.NextTransaction)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.WalletList = k.GetAllWallet(ctx)
	genesis.TransactionList = k.GetAllTransaction(ctx)
	// Get all nextTransaction
	nextTransaction, found := k.GetNextTransaction(ctx)
	if found {
		genesis.NextTransaction = &nextTransaction
	}
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
