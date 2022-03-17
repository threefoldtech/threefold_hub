package types

import (
	"encoding/binary"
	"strconv"
)

var _ binary.ByteOrder

const (
	// HistoricalInfoKeyPrefix is the prefix to retrieve all HistoricalInfo
	HistoricalInfoKeyPrefix = "HistoricalInfo/value/"
)

// HistoricalInfoKey returns the store key to retrieve a HistoricalInfo from the index fields
func HistoricalInfoKey(
	height int64,
) []byte {
	var key []byte

	heightBytes := []byte(strconv.FormatInt(height, 10))
	key = append(key, heightBytes...)
	key = append(key, []byte("/")...)

	return key
}
