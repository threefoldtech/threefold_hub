package keeper

import (
	"github.com/threefold/threefold_hub/x/validators/types"
)

var _ types.QueryServer = Keeper{}
