package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateTransaction = "create_transaction"

var _ sdk.Msg = &MsgCreateTransaction{}

func NewMsgCreateTransaction(creator string, walltName string, toAddress string, amount string) *MsgCreateTransaction {
	return &MsgCreateTransaction{
		Creator:   creator,
		WalltName: walltName,
		ToAddress: toAddress,
		Amount:    amount,
	}
}

func (msg *MsgCreateTransaction) Route() string {
	return RouterKey
}

func (msg *MsgCreateTransaction) Type() string {
	return TypeMsgCreateTransaction
}

func (msg *MsgCreateTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
