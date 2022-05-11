package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) NextMemberTransaction(c context.Context, req *types.QueryGetNextMemberTransactionRequest) (*types.QueryGetNextMemberTransactionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetNextMemberTransaction(ctx)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetNextMemberTransactionResponse{NextMemberTransaction: val}, nil
}
