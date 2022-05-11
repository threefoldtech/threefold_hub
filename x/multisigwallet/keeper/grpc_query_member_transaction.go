package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/threefoldtech/threefold_hub/x/multisigwallet/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) MemberTransactionAll(c context.Context, req *types.QueryAllMemberTransactionRequest) (*types.QueryAllMemberTransactionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var memberTransactions []types.MemberTransaction
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	memberTransactionStore := prefix.NewStore(store, types.KeyPrefix(types.MemberTransactionKeyPrefix))

	pageRes, err := query.Paginate(memberTransactionStore, req.Pagination, func(key []byte, value []byte) error {
		var memberTransaction types.MemberTransaction
		if err := k.cdc.Unmarshal(value, &memberTransaction); err != nil {
			return err
		}

		memberTransactions = append(memberTransactions, memberTransaction)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllMemberTransactionResponse{MemberTransaction: memberTransactions, Pagination: pageRes}, nil
}

func (k Keeper) MemberTransaction(c context.Context, req *types.QueryGetMemberTransactionRequest) (*types.QueryGetMemberTransactionResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetMemberTransaction(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetMemberTransactionResponse{MemberTransaction: val}, nil
}
