package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"github.com/threefold/threefold_hub/x/validators/types"
)

func CmdCreateValidator() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-validator [consensus-pubkey] [description]",
		Short: "Create a new Validator, consensus-pubkey base64 encoded",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes

			// Get value arguments
			argConsensusPubkey := args[0]
			if err != nil {
				return err
			}
			argDescription := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateValidator(
				clientCtx.GetFromAddress().String(),
				argConsensusPubkey,
				types.Description{Moniker: argDescription}, //TODO: the rest of the description fields
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

func CmdUpdateValidator() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-validator [description]",
		Short: "Update a Validator",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			// Get value arguments
			argDescription := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateValidator(
				clientCtx.GetFromAddress().String(),
				types.Description{Moniker: argDescription}, //TODO: the rest of the description fields
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

func CmdDeleteValidator() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-validator",
		Short: "Delete a Validator",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteValidator(
				clientCtx.GetFromAddress().String(),
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
