package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRemoveSigners = "remove_signers"

var _ sdk.Msg = &MsgRemoveSigners{}

func NewMsgRemoveSigners(creator string, walletName string, members string) *MsgRemoveSigners {
	return &MsgRemoveSigners{
		Creator:    creator,
		WalletName: walletName,
		Members:    members,
	}
}

func (msg *MsgRemoveSigners) Route() string {
	return RouterKey
}

func (msg *MsgRemoveSigners) Type() string {
	return TypeMsgRemoveSigners
}

func (msg *MsgRemoveSigners) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRemoveSigners) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRemoveSigners) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
