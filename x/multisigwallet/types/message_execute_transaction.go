package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgExecuteTransaction = "execute_transaction"

var _ sdk.Msg = &MsgExecuteTransaction{}

func NewMsgExecuteTransaction(creator string, transactionID string) *MsgExecuteTransaction {
	return &MsgExecuteTransaction{
		Creator:       creator,
		TransactionID: transactionID,
	}
}

func (msg *MsgExecuteTransaction) Route() string {
	return RouterKey
}

func (msg *MsgExecuteTransaction) Type() string {
	return TypeMsgExecuteTransaction
}

func (msg *MsgExecuteTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgExecuteTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgExecuteTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
