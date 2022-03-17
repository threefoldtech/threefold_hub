package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/threefold/threefold_hub/x/validators/types"
)

func (k msgServer) CreateValidator(goCtx context.Context, msg *types.MsgCreateValidator) (*types.MsgCreateValidatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetValidator(
		ctx,
		msg.OperatorAddress,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	var validator = types.Validator{
		OperatorAddress: msg.OperatorAddress,
		ConsensusPubkey: msg.ConsensusPubkey,
		Description:     &msg.Description,
	}

	k.SetValidator(
		ctx,
		validator,
	)
	return &types.MsgCreateValidatorResponse{}, nil
}

func (k msgServer) UpdateValidator(goCtx context.Context, msg *types.MsgUpdateValidator) (*types.MsgUpdateValidatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetValidator(
		ctx,
		msg.OperatorAddress,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "operator Address not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.OperatorAddress != valFound.OperatorAddress {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	valFound.Description = &msg.Description

	k.SetValidator(ctx, valFound)

	return &types.MsgUpdateValidatorResponse{}, nil
}

func (k msgServer) DeleteValidator(goCtx context.Context, msg *types.MsgDeleteValidator) (*types.MsgDeleteValidatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetValidator(
		ctx,
		msg.OperatorAddress,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.OperatorAddress != valFound.OperatorAddress {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveValidator(
		ctx,
		msg.OperatorAddress,
	)

	return &types.MsgDeleteValidatorResponse{}, nil
}
