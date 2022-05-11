package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSignMemberTransaction = "sign_member_transaction"

var _ sdk.Msg = &MsgSignMemberTransaction{}

func NewMsgSignMemberTransaction(creator string, transactionID string) *MsgSignMemberTransaction {
	return &MsgSignMemberTransaction{
		Creator:       creator,
		TransactionID: transactionID,
	}
}

func (msg *MsgSignMemberTransaction) Route() string {
	return RouterKey
}

func (msg *MsgSignMemberTransaction) Type() string {
	return TypeMsgSignMemberTransaction
}

func (msg *MsgSignMemberTransaction) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSignMemberTransaction) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSignMemberTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
