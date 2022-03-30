package keeper

import (
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

var _ types.QueryServer = Keeper{}
