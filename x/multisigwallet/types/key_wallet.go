package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// WalletKeyPrefix is the prefix to retrieve all Wallet
	WalletKeyPrefix = "Wallet/value/"
)

// WalletKey returns the store key to retrieve a Wallet from the index fields
func WalletKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
