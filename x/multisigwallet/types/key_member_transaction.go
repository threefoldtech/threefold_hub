package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// MemberTransactionKeyPrefix is the prefix to retrieve all MemberTransaction
	MemberTransactionKeyPrefix = "MemberTransaction/value/"
)

// MemberTransactionKey returns the store key to retrieve a MemberTransaction from the index fields
func MemberTransactionKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
