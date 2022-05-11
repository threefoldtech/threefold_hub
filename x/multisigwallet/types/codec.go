package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateWallet{}, "multisigwallet/CreateWallet", nil)
	cdc.RegisterConcrete(&MsgCreateTransaction{}, "multisigwallet/CreateTransaction", nil)
	cdc.RegisterConcrete(&MsgSignTransaction{}, "multisigwallet/SignTransaction", nil)
	cdc.RegisterConcrete(&MsgExecuteTransaction{}, "multisigwallet/ExecuteTransaction", nil)
	cdc.RegisterConcrete(&MsgUpdateMinSigns{}, "multisigwallet/UpdateMinSigns", nil)
	cdc.RegisterConcrete(&MsgAddMember{}, "multisigwallet/AddMember", nil)
	cdc.RegisterConcrete(&MsgSignMemberTransaction{}, "multisigwallet/SignMemberTransaction", nil)
	cdc.RegisterConcrete(&MsgRemoveMember{}, "multisigwallet/RemoveMember", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateWallet{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateTransaction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSignTransaction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgExecuteTransaction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateMinSigns{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAddMember{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSignMemberTransaction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRemoveMember{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
