package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// TransactionKeyPrefix is the prefix to retrieve all Transaction
	TransactionKeyPrefix = "Transaction/value/"
)

// TransactionKey returns the store key to retrieve a Transaction from the index fields
func TransactionKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
