package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgCreateValidator = "create_validator"
	TypeMsgUpdateValidator = "update_validator"
	TypeMsgDeleteValidator = "delete_validator"
)

var _ sdk.Msg = &MsgCreateValidator{}

func NewMsgCreateValidator(
	operatorAddress string,
	consensusPubkey string,
	description Description,

) *MsgCreateValidator {
	return &MsgCreateValidator{
		OperatorAddress: operatorAddress,
		ConsensusPubkey: consensusPubkey,
		Description:     description,
	}
}

func (msg *MsgCreateValidator) Route() string {
	return RouterKey
}

func (msg *MsgCreateValidator) Type() string {
	return TypeMsgCreateValidator
}

func (msg *MsgCreateValidator) GetSigners() []sdk.AccAddress {
	operator, _ := sdk.AccAddressFromBech32(msg.OperatorAddress)

	return []sdk.AccAddress{operator}
}

func (msg *MsgCreateValidator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateValidator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.OperatorAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid operator address (%s)", err)
	}

	if msg.ConsensusPubkey == "" {
		return ErrEmptyValidatorPubKey
	}
	if msg.Description == (Description{}) {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "empty description")
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateValidator{}

func NewMsgUpdateValidator(
	operatorAddress string,
	description Description,

) *MsgUpdateValidator {
	return &MsgUpdateValidator{
		OperatorAddress: operatorAddress,
		Description:     description,
	}
}

func (msg *MsgUpdateValidator) Route() string {
	return RouterKey
}

func (msg *MsgUpdateValidator) Type() string {
	return TypeMsgUpdateValidator
}

func (msg *MsgUpdateValidator) GetSigners() []sdk.AccAddress {
	operator, _ := sdk.AccAddressFromBech32(msg.OperatorAddress)

	return []sdk.AccAddress{operator}
}

func (msg *MsgUpdateValidator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateValidator) ValidateBasic() error {

	_, err := sdk.AccAddressFromBech32(msg.OperatorAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid operator address (%s)", err)
	}

	if msg.Description == (Description{}) {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "empty description")
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteValidator{}

func NewMsgDeleteValidator(
	OperatorAddress string,

) *MsgDeleteValidator {
	return &MsgDeleteValidator{
		OperatorAddress: OperatorAddress,
	}
}
func (msg *MsgDeleteValidator) Route() string {
	return RouterKey
}

func (msg *MsgDeleteValidator) Type() string {
	return TypeMsgDeleteValidator
}

func (msg *MsgDeleteValidator) GetSigners() []sdk.AccAddress {
	operator, _ := sdk.AccAddressFromBech32(msg.OperatorAddress)

	return []sdk.AccAddress{operator}
}

func (msg *MsgDeleteValidator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteValidator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.OperatorAddress)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid operator address (%s)", err)
	}
	return nil
}
