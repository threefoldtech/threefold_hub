package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/threefold/threefold_hub/x/validators/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) HistoricalInfoAll(c context.Context, req *types.QueryAllHistoricalInfoRequest) (*types.QueryAllHistoricalInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var historicalInfos []types.HistoricalInfo
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	historicalInfoStore := prefix.NewStore(store, types.KeyPrefix(types.HistoricalInfoKeyPrefix))

	pageRes, err := query.Paginate(historicalInfoStore, req.Pagination, func(key []byte, value []byte) error {
		var historicalInfo types.HistoricalInfo
		if err := k.cdc.Unmarshal(value, &historicalInfo); err != nil {
			return err
		}

		historicalInfos = append(historicalInfos, historicalInfo)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllHistoricalInfoResponse{HistoricalInfo: historicalInfos, Pagination: pageRes}, nil
}

func (k Keeper) HistoricalInfo(c context.Context, req *types.QueryGetHistoricalInfoRequest) (*types.QueryGetHistoricalInfoResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetHistoricalInfo(
		ctx,
		req.Height,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetHistoricalInfoResponse{HistoricalInfo: val}, nil
}
