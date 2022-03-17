package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	abci "github.com/tendermint/tendermint/abci/types"
	"github.com/threefold/threefold_hub/x/validators/types"
)

// SetValidator set a specific validator in the store from its index
func (k Keeper) SetValidator(ctx sdk.Context, validator types.Validator) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidatorKeyPrefix))
	b := k.cdc.MustMarshal(&validator)
	store.Set(types.ValidatorKey(
		validator.OperatorAddress,
	), b)
}

// GetValidator returns a validator from its index
func (k Keeper) GetValidator(
	ctx sdk.Context,
	operatorAddress string,

) (val types.Validator, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidatorKeyPrefix))

	b := store.Get(types.ValidatorKey(
		operatorAddress,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveValidator removes a validator from the store
func (k Keeper) RemoveValidator(
	ctx sdk.Context,
	operatorAddress string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidatorKeyPrefix))
	store.Delete(types.ValidatorKey(
		operatorAddress,
	))
}

// GetAllValidator returns all validators
func (k Keeper) GetAllValidators(ctx sdk.Context) (list []types.Validator) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ValidatorKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Validator
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
func (k Keeper) GetLastValidators(ctx sdk.Context) (validators []types.Validator) {
	//store := ctx.KVStore(k.storeKey)

	// add the actual validator power sorted store
	//maxValidators := k.MaxValidators(ctx)
	// validators = make([]types.Validator, maxValidators)
	//TODO: only the ones in the validating state
	return k.GetAllValidators(ctx)
	//return validators[:i] // trim
}

// BlockValidatorUpdates calculates the ValidatorUpdates for the current block
// Called in each EndBlock
func (k Keeper) BlockValidatorUpdates(ctx sdk.Context) (updates []abci.ValidatorUpdate) {
	// Calculate validator set changes.
	updates, err := k.ApplyAndReturnValidatorSetUpdates(ctx)
	if err != nil {
		panic(err)
	}

	return
}

// ApplyAndReturnValidatorSetUpdates applies and return accumulated updates validator set to Tendermint
func (k Keeper) ApplyAndReturnValidatorSetUpdates(ctx sdk.Context) (updates []abci.ValidatorUpdate, err error) {
	k.Logger(ctx).Error("Should calculate Validatorupdates")
	/* params := k.GetParams(ctx)
	maxValidators := params.MaxValidators
	totalPower := sdk.ZeroInt()

	// Retrieve the last validator set.
	// The persistent set is updated later in this function.
	// (see LastValidatorPowerKey).
	last, err := k.getLastValidatorsByAddr(ctx)
	if err != nil {
		return nil, err
	}

	// Iterate over validators, highest power to lowest.
	iterator := k.ValidatorsPowerStoreIterator(ctx)
	defer iterator.Close()

	for count := 0; iterator.Valid() && count < int(maxValidators); iterator.Next() {
		// everything that is iterated in this loop is becoming or already a
		// part of the bonded validator set
		valAddr := sdk.ValAddress(iterator.Value())
		validator := k.mustGetValidator(ctx, valAddr)

		// fetch the old power bytes
		valAddrStr, err := sdk.Bech32ifyAddressBytes(sdk.GetConfig().GetBech32ValidatorAddrPrefix(), valAddr)
		if err != nil {
			return nil, err
		}
		oldPowerBytes, found := last[valAddrStr]

		// update the validator set if power has changed
		if !found {
			updates = append(updates, validator.ABCIValidatorUpdate(powerReduction))

		}

		delete(last, valAddrStr)
		count++

		totalPower = totalPower.Add(sdk.NewInt(newPower))
	}

	noLongerBonded, err := sortNoLongerBonded(last)
	if err != nil {
		return nil, err
	}

	for _, valAddrBytes := range noLongerBonded {
		validator := k.mustGetValidator(ctx, sdk.ValAddress(valAddrBytes))
		if err != nil {
			return
		}
		updates = append(updates, validator.ABCIValidatorUpdateZero())
	}
	*/
	return updates, err
}
