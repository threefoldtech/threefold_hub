package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// ValidatorKeyPrefix is the prefix to retrieve all Validator
	ValidatorKeyPrefix = "Validator/value/"
)

// ValidatorKey returns the store key to retrieve a Validator from the index fields
func ValidatorKey(
	operatorAddress string,
) []byte {
	var key []byte

	indexBytes := []byte(operatorAddress)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
