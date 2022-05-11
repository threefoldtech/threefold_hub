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

func CmdSignMemberTransaction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "sign-member-transaction [transaction-id]",
		Short: "Broadcast message sign-member-transaction",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTransactionID := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSignMemberTransaction(
				clientCtx.GetFromAddress().String(),
				argTransactionID,
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
