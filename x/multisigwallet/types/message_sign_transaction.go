package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSignTransaction = "sign_transaction"

var _ sdk.Msg = &MsgSignTransaction{}

func NewMsgSignTransaction(creator string, transactionID string) *MsgSignTransaction {
	return &MsgSignTransaction{
		Creator:       creator,
		TransactionID: transactionID,
	}
}

func (msg *MsgSignTransaction) Route() string {
	return RouterKey
}

func (msg *MsgSignTransaction) Type() string {
	return TypeMsgSignTransaction
}

func (msg *MsgSignTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSignTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSignTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
