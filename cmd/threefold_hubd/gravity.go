// extends the gravity cmdline
package main

import (
	"context"
	"strconv"

	"github.com/Gravity-Bridge/Gravity-Bridge/module/x/gravity/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func extendGravitySubcommands(rootCmd *cobra.Command) error {
	g, _, err := rootCmd.Find([]string{"query", "gravity"})
	if err != nil {
		return err
	}
	g.AddCommand(
		CmdGetParams(),
		CmdGetOutgoingTxBatches(),
		CmdGetAttestations(),
		GetDelegateKeyByOrchestrator(),
		GetLastValsetRequests(),
		GetValsetConfirmsByNonce(),
	)
	return nil
}

func CmdGetParams() *cobra.Command {
	//nolint: exhaustivestruct
	cmd := &cobra.Command{
		Use:   "params",
		Short: "Get module params",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			queryClient := types.NewQueryClient(clientCtx)

			req := &types.QueryParamsRequest{}

			res, err := queryClient.Params(cmd.Context(), req)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}
func GetDelegateKeyByOrchestrator() *cobra.Command {
	//nolint: exhaustivestruct
	cmd := &cobra.Command{
		Use:   "delegate-key-by-orchestrator",
		Short: "Get Delegate Key By Orchestrator",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			queryClient := types.NewQueryClient(clientCtx)

			req := &types.QueryDelegateKeysByOrchestratorAddress{
				OrchestratorAddress: args[0],
			}
			res, err := queryClient.GetDelegateKeyByOrchestrator(context.Background(), req)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}

func GetLastValsetRequests() *cobra.Command {
	//nolint: exhaustivestruct
	cmd := &cobra.Command{
		Use:   "last-valset-requests",
		Short: "Get last valset requests",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			queryClient := types.NewQueryClient(clientCtx)

			req := &types.QueryLastValsetRequestsRequest{}
			res, err := queryClient.LastValsetRequests(context.Background(), req)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}

func GetValsetConfirmsByNonce() *cobra.Command {
	//nolint: exhaustivestruct
	cmd := &cobra.Command{
		Use:   "valset-confirms-by-nonce",
		Short: "Get valset confirms by nonce",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			queryClient := types.NewQueryClient(clientCtx)
			nonce, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}
			req := &types.QueryValsetConfirmsByNonceRequest{
				Nonce: nonce,
			}
			res, err := queryClient.ValsetConfirmsByNonce(context.Background(), req)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}

func CmdGetOutgoingTxBatches() *cobra.Command {
	//nolint: exhaustivestruct
	cmd := &cobra.Command{
		Use:   "outgoing-tx-batches",
		Short: "Query outgoing batches",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			queryClient := types.NewQueryClient(clientCtx)

			req := &types.QueryOutgoingTxBatchesRequest{}

			res, err := queryClient.OutgoingTxBatches(cmd.Context(), req)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}

func CmdGetAttestations() *cobra.Command {
	//nolint: exhaustivestruct
	cmd := &cobra.Command{
		Use:   "attestations",
		Short: "Query attestations",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			queryClient := types.NewQueryClient(clientCtx)

			req := &types.QueryAttestationsRequest{}

			res, err := queryClient.GetAttestations(cmd.Context(), req)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}
