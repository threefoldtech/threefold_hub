package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateWallet = "create_wallet"

var _ sdk.Msg = &MsgCreateWallet{}

func NewMsgCreateWallet(creator string, name string, members string, minSigns string) *MsgCreateWallet {
	return &MsgCreateWallet{
		Creator:  creator,
		Name:     name,
		Members:  members,
		MinSigns: minSigns,
	}
}

func (msg *MsgCreateWallet) Route() string {
	return RouterKey
}

func (msg *MsgCreateWallet) Type() string {
	return TypeMsgCreateWallet
}

func (msg *MsgCreateWallet) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateWallet) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateWallet) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
