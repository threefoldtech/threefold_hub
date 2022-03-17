package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/validators module sentinel errors
var (
	ErrEmptyValidatorPubKey = sdkerrors.Register(ModuleName, 2, "empty validator public key")
)
