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

func (k Keeper) WalletAll(c context.Context, req *types.QueryAllWalletRequest) (*types.QueryAllWalletResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var wallets []types.Wallet
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	walletStore := prefix.NewStore(store, types.KeyPrefix(types.WalletKeyPrefix))

	pageRes, err := query.Paginate(walletStore, req.Pagination, func(key []byte, value []byte) error {
		var wallet types.Wallet
		if err := k.cdc.Unmarshal(value, &wallet); err != nil {
			return err
		}

		wallets = append(wallets, wallet)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllWalletResponse{Wallet: wallets, Pagination: pageRes}, nil
}

func (k Keeper) Wallet(c context.Context, req *types.QueryGetWalletRequest) (*types.QueryGetWalletResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetWallet(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetWalletResponse{Wallet: val}, nil
}
