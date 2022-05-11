package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
)

func CmdListMemberTransaction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-member-transaction",
		Short: "list all member-transaction",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllMemberTransactionRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.MemberTransactionAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowMemberTransaction() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-member-transaction [index]",
		Short: "shows a member-transaction",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetMemberTransactionRequest{
				Index: argIndex,
			}

			res, err := queryClient.MemberTransaction(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
