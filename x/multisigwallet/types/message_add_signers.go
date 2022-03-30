package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddSigners = "add_signers"

var _ sdk.Msg = &MsgAddSigners{}

func NewMsgAddSigners(creator string, walletName string, members string) *MsgAddSigners {
	return &MsgAddSigners{
		Creator:    creator,
		WalletName: walletName,
		Members:    members,
	}
}

func (msg *MsgAddSigners) Route() string {
	return RouterKey
}

func (msg *MsgAddSigners) Type() string {
	return TypeMsgAddSigners
}

func (msg *MsgAddSigners) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddSigners) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddSigners) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
