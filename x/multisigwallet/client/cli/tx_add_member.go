package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

var _ = strconv.Itoa(0)

func CmdAddMember() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-member [wallt-name] [member]",
		Short: "Broadcast message add-member",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argWalltName := args[0]
			argMember := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAddMember(
				clientCtx.GetFromAddress().String(),
				argWalltName,
				argMember,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}