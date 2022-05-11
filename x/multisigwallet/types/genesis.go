package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		WalletList:            []Wallet{},
		TransactionList:       []Transaction{},
		NextTransaction:       &NextTransaction{uint64(1)},
		MemberTransactionList: []MemberTransaction{},
		NextMemberTransaction: &NextMemberTransaction{uint64(1)},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in wallet
	walletIndexMap := make(map[string]struct{})

	for _, elem := range gs.WalletList {
		index := string(WalletKey(elem.Index))
		if _, ok := walletIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for wallet")
		}
		walletIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in transaction
	transactionIndexMap := make(map[string]struct{})

	for _, elem := range gs.TransactionList {
		index := string(TransactionKey(elem.Index))
		if _, ok := transactionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for transaction")
		}
		transactionIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in memberTransaction
	memberTransactionIndexMap := make(map[string]struct{})

	for _, elem := range gs.MemberTransactionList {
		index := string(MemberTransactionKey(elem.Index))
		if _, ok := memberTransactionIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for memberTransaction")
		}
		memberTransactionIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
