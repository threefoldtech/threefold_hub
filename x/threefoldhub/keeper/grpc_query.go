package keeper

import (
	"github.com/threefold/threefold_hub/x/threefoldhub/types"
)

var _ types.QueryServer = Keeper{}
