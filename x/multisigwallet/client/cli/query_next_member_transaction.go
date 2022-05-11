package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func CmdShowNextMemberTransaction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-next-member-transaction",
		Short: "shows nextMemberTransaction",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetNextMemberTransactionRequest{}

			res, err := queryClient.NextMemberTransaction(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
