package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		Validators: []Validator{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in validator
	validatorIndexMap := make(map[string]struct{})

	for _, elem := range gs.Validators {
		index := string(ValidatorKey(elem.OperatorAddress))
		if _, ok := validatorIndexMap[index]; ok {
			return fmt.Errorf("duplicated operator adress for validator")
		}
		validatorIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
