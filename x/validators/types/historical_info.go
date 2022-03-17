package types

import (
	tmproto "github.com/tendermint/tendermint/proto/tendermint/types"
)

// NewHistoricalInfo will create a historical information struct from header and valset
// it will first sort valset before inclusion into historical info
func NewHistoricalInfo(header tmproto.Header, valSet Validators) HistoricalInfo {
	//TODO: Must sort in the same way that tendermint does
	//sort.SliceStable(valSet, func(i, j int) bool {
	//return ValidatorsByVotingPower(valSet).Less(i, j, powerReduction)
	//})

	return HistoricalInfo{
		Header: header,
		Valset: valSet,
	}
}
