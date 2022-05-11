package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRemoveMember = "remove_member"

var _ sdk.Msg = &MsgRemoveMember{}

func NewMsgRemoveMember(creator string, walltName string, member string) *MsgRemoveMember {
	return &MsgRemoveMember{
		Creator:   creator,
		WalltName: walltName,
		Member:    member,
	}
}

func (msg *MsgRemoveMember) Route() string {
	return RouterKey
}

func (msg *MsgRemoveMember) Type() string {
	return TypeMsgRemoveMember
}

func (msg *MsgRemoveMember) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRemoveMember) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRemoveMember) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
