package cli

import (
	"context"
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
	"github.com/threefold/threefold_hub/x/validators/types"
)

func CmdListHistoricalInfo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-historical-info",
		Short: "list all HistoricalInfo",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllHistoricalInfoRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.HistoricalInfoAll(context.Background(), params)
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

func CmdShowHistoricalInfo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-historical-info [height]",
		Short: "shows a HistoricalInfo",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argHeight := args[0]
			height, err := strconv.ParseInt(argHeight, 10, 0)
			if err != nil {
				return err
			}
			params := &types.QueryGetHistoricalInfoRequest{
				Height: height,
			}

			res, err := queryClient.HistoricalInfo(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
