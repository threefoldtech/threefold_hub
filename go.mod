module github.com/threefoldtech/threefold_hub

go 1.16

require (
	github.com/Gravity-Bridge/Gravity-Bridge/module v1.4.1
	github.com/cosmos/cosmos-sdk v0.44.5
	github.com/cosmos/ibc-go/v2 v2.0.2
	github.com/google/go-cmp v0.5.8 // indirect
	github.com/pkg/errors v0.9.1
	github.com/spf13/cast v1.4.1
	github.com/spf13/cobra v1.2.1
	github.com/spf13/pflag v1.0.5
	github.com/stretchr/testify v1.7.0
	github.com/tendermint/starport v0.19.2
	github.com/tendermint/tendermint v0.34.14
	github.com/tendermint/tm-db v0.6.4
	google.golang.org/genproto v0.0.0-20220519153652-3a47de7e79bd // indirect
	google.golang.org/grpc v1.46.2 // indirect
)

replace (
	github.com/gogo/protobuf => github.com/regen-network/protobuf v1.3.3-alpha.regen.1
	github.com/keybase/go-keychain => github.com/99designs/go-keychain v0.0.0-20191008050251-8e49817e8af4
	google.golang.org/grpc => google.golang.org/grpc v1.33.2
)

replace github.com/Gravity-Bridge/Gravity-Bridge/module => github.com/OmarElawady/Gravity-Bridge/module v1.4.2-0.20220328084504-d220a3db6d0e
