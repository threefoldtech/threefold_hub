package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdateMinSigns = "update_min_signs"

var _ sdk.Msg = &MsgUpdateMinSigns{}

func NewMsgUpdateMinSigns(creator string, walletName string, minSigns string) *MsgUpdateMinSigns {
	return &MsgUpdateMinSigns{
		Creator:    creator,
		WalletName: walletName,
		MinSigns:   minSigns,
	}
}

func (msg *MsgUpdateMinSigns) Route() string {
	return RouterKey
}

func (msg *MsgUpdateMinSigns) Type() string {
	return TypeMsgUpdateMinSigns
}

func (msg *MsgUpdateMinSigns) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateMinSigns) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateMinSigns) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
