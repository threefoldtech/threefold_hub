/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/**
 * Params defines the parameters for the auth module.
 */
export interface CosmosAuthV1Beta1Params {
  /** @format uint64 */
  max_memo_characters?: string;

  /** @format uint64 */
  tx_sig_limit?: string;

  /** @format uint64 */
  tx_size_cost_per_byte?: string;

  /** @format uint64 */
  sig_verify_cost_ed25519?: string;

  /** @format uint64 */
  sig_verify_cost_secp256k1?: string;
}

/**
 * QueryAccountResponse is the response type for the Query/Account RPC method.
 */
export interface CosmosAuthV1Beta1QueryAccountResponse {
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  account?: { "@type"?: string };
}

/**
* QueryAccountsResponse is the response type for the Query/Accounts RPC method.

Since: cosmos-sdk 0.43
*/
export interface CosmosAuthV1Beta1QueryAccountsResponse {
  /** accounts are the existing accounts */
  accounts?: { "@type"?: string }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 */
export interface CosmosAuthV1Beta1QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: {
    max_memo_characters?: string;
    tx_sig_limit?: string;
    tx_size_cost_per_byte?: string;
    sig_verify_cost_ed25519?: string;
    sig_verify_cost_secp256k1?: string;
  };
}

/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface CosmosBaseQueryV1Beta1PageRequest {
  /**
   * key is a value returned in PageResponse.next_key to begin
   * querying the next page most efficiently. Only one of offset or key
   * should be set.
   * @format byte
   */
  key?: string;

  /**
   * offset is a numeric offset that can be used when key is unavailable.
   * It is less efficient than using key. Only one of offset or key should
   * be set.
   * @format uint64
   */
  offset?: string;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   * @format uint64
   */
  limit?: string;

  /**
   * count_total is set to true  to indicate that the result set should include
   * a count of the total number of items available for pagination in UIs.
   * count_total is only respected when offset is used. It is ignored when key
   * is set.
   */
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
  reverse?: boolean;
}

/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface CosmosBaseQueryV1Beta1PageResponse {
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently
   * @format byte
   */
  next_key?: string;

  /**
   * total is total number of results available if PageRequest.count_total
   * was set, its value is undefined otherwise
   * @format uint64
   */
  total?: string;
}

/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface GoogleProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
}

export interface GoogleRpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: { "@type"?: string }[];
}

/**
* DenomUnit represents a struct that describes a given
denomination unit of the basic token.
*/
export interface CosmosBankV1Beta1DenomUnit {
  /** denom represents the string name of the given denom unit (e.g uatom). */
  denom?: string;

  /**
   * exponent represents power of 10 exponent that one must
   * raise the base_denom to in order to equal the given DenomUnit's denom
   * 1 denom = 1^exponent base_denom
   * (e.g. with a base_denom of uatom, one can create a DenomUnit of 'atom' with
   * exponent = 6, thus: 1 atom = 10^6 uatom).
   * @format int64
   */
  exponent?: number;

  /** aliases is a list of string aliases for the given denom */
  aliases?: string[];
}

/**
 * Input models transaction input.
 */
export interface CosmosBankV1Beta1Input {
  address?: string;
  coins?: { denom?: string; amount?: string }[];
}

/**
* Metadata represents a struct that describes
a basic token.
*/
export interface CosmosBankV1Beta1Metadata {
  description?: string;

  /** denom_units represents the list of DenomUnit's for a given coin */
  denom_units?: { denom?: string; exponent?: number; aliases?: string[] }[];

  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base?: string;

  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display?: string;

  /**
   * name defines the name of the token (eg: Cosmos Atom)
   * Since: cosmos-sdk 0.43
   */
  name?: string;

  /**
   * symbol is the token symbol usually shown on exchanges (eg: ATOM). This can
   * be the same as the display.
   *
   * Since: cosmos-sdk 0.43
   */
  symbol?: string;
}

/**
 * MsgMultiSendResponse defines the Msg/MultiSend response type.
 */
export type CosmosBankV1Beta1MsgMultiSendResponse = object;

/**
 * MsgSendResponse defines the Msg/Send response type.
 */
export type CosmosBankV1Beta1MsgSendResponse = object;

/**
 * Output models transaction outputs.
 */
export interface CosmosBankV1Beta1Output {
  address?: string;
  coins?: { denom?: string; amount?: string }[];
}

/**
 * Params defines the parameters for the bank module.
 */
export interface CosmosBankV1Beta1Params {
  send_enabled?: { denom?: string; enabled?: boolean }[];
  default_send_enabled?: boolean;
}

/**
* QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
method.
*/
export interface CosmosBankV1Beta1QueryAllBalancesResponse {
  /** balances is the balances of all the coins. */
  balances?: { denom?: string; amount?: string }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 */
export interface CosmosBankV1Beta1QueryBalanceResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  balance?: { denom?: string; amount?: string };
}

/**
* QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
method.
*/
export interface CosmosBankV1Beta1QueryDenomMetadataResponse {
  /**
   * Metadata represents a struct that describes
   * a basic token.
   */
  metadata?: {
    description?: string;
    denom_units?: { denom?: string; exponent?: number; aliases?: string[] }[];
    base?: string;
    display?: string;
    name?: string;
    symbol?: string;
  };
}

/**
* QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
method.
*/
export interface CosmosBankV1Beta1QueryDenomsMetadataResponse {
  /** metadata provides the client information for all the registered tokens. */
  metadatas?: {
    description?: string;
    denom_units?: { denom?: string; exponent?: number; aliases?: string[] }[];
    base?: string;
    display?: string;
    name?: string;
    symbol?: string;
  }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
 * QueryParamsResponse defines the response type for querying x/bank parameters.
 */
export interface CosmosBankV1Beta1QueryParamsResponse {
  /** Params defines the parameters for the bank module. */
  params?: { send_enabled?: { denom?: string; enabled?: boolean }[]; default_send_enabled?: boolean };
}

/**
 * QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.
 */
export interface CosmosBankV1Beta1QuerySupplyOfResponse {
  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  amount?: { denom?: string; amount?: string };
}

export interface CosmosBankV1Beta1QueryTotalSupplyResponse {
  /** supply is the supply of the coins */
  supply?: { denom?: string; amount?: string }[];

  /**
   * pagination defines the pagination in the response.
   *
   * Since: cosmos-sdk 0.43
   */
  pagination?: { next_key?: string; total?: string };
}

/**
* SendEnabled maps coin denom to a send_enabled status (whether a denom is
sendable).
*/
export interface CosmosBankV1Beta1SendEnabled {
  denom?: string;
  enabled?: boolean;
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface CosmosBaseV1Beta1Coin {
  denom?: string;
  amount?: string;
}

/**
 * GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method.
 */
export interface CosmosBaseTendermintV1Beta1GetBlockByHeightResponse {
  /** BlockID */
  block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
  block?: {
    header?: {
      version?: { block?: string; app?: string };
      chain_id?: string;
      height?: string;
      time?: string;
      last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
      last_commit_hash?: string;
      data_hash?: string;
      validators_hash?: string;
      next_validators_hash?: string;
      consensus_hash?: string;
      app_hash?: string;
      last_results_hash?: string;
      evidence_hash?: string;
      proposer_address?: string;
    };
    data?: { txs?: string[] };
    evidence?: {
      evidence?: {
        duplicate_vote_evidence?: {
          vote_a?: {
            type?:
              | "SIGNED_MSG_TYPE_UNKNOWN"
              | "SIGNED_MSG_TYPE_PREVOTE"
              | "SIGNED_MSG_TYPE_PRECOMMIT"
              | "SIGNED_MSG_TYPE_PROPOSAL";
            height?: string;
            round?: number;
            block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
            timestamp?: string;
            validator_address?: string;
            validator_index?: number;
            signature?: string;
          };
          vote_b?: {
            type?:
              | "SIGNED_MSG_TYPE_UNKNOWN"
              | "SIGNED_MSG_TYPE_PREVOTE"
              | "SIGNED_MSG_TYPE_PRECOMMIT"
              | "SIGNED_MSG_TYPE_PROPOSAL";
            height?: string;
            round?: number;
            block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
            timestamp?: string;
            validator_address?: string;
            validator_index?: number;
            signature?: string;
          };
          total_voting_power?: string;
          validator_power?: string;
          timestamp?: string;
        };
        light_client_attack_evidence?: {
          conflicting_block?: {
            signed_header?: {
              header?: {
                version?: { block?: string; app?: string };
                chain_id?: string;
                height?: string;
                time?: string;
                last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                last_commit_hash?: string;
                data_hash?: string;
                validators_hash?: string;
                next_validators_hash?: string;
                consensus_hash?: string;
                app_hash?: string;
                last_results_hash?: string;
                evidence_hash?: string;
                proposer_address?: string;
              };
              commit?: {
                height?: string;
                round?: number;
                block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                signatures?: {
                  block_id_flag?:
                    | "BLOCK_ID_FLAG_UNKNOWN"
                    | "BLOCK_ID_FLAG_ABSENT"
                    | "BLOCK_ID_FLAG_COMMIT"
                    | "BLOCK_ID_FLAG_NIL";
                  validator_address?: string;
                  timestamp?: string;
                  signature?: string;
                }[];
              };
            };
            validator_set?: {
              validators?: {
                address?: string;
                pub_key?: { ed25519?: string; secp256k1?: string };
                voting_power?: string;
                proposer_priority?: string;
              }[];
              proposer?: {
                address?: string;
                pub_key?: { ed25519?: string; secp256k1?: string };
                voting_power?: string;
                proposer_priority?: string;
              };
              total_voting_power?: string;
            };
          };
          common_height?: string;
          byzantine_validators?: {
            address?: string;
            pub_key?: { ed25519?: string; secp256k1?: string };
            voting_power?: string;
            proposer_priority?: string;
          }[];
          total_voting_power?: string;
          timestamp?: string;
        };
      }[];
    };
    last_commit?: {
      height?: string;
      round?: number;
      block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
      signatures?: {
        block_id_flag?: "BLOCK_ID_FLAG_UNKNOWN" | "BLOCK_ID_FLAG_ABSENT" | "BLOCK_ID_FLAG_COMMIT" | "BLOCK_ID_FLAG_NIL";
        validator_address?: string;
        timestamp?: string;
        signature?: string;
      }[];
    };
  };
}

/**
 * GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method.
 */
export interface CosmosBaseTendermintV1Beta1GetLatestBlockResponse {
  /** BlockID */
  block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
  block?: {
    header?: {
      version?: { block?: string; app?: string };
      chain_id?: string;
      height?: string;
      time?: string;
      last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
      last_commit_hash?: string;
      data_hash?: string;
      validators_hash?: string;
      next_validators_hash?: string;
      consensus_hash?: string;
      app_hash?: string;
      last_results_hash?: string;
      evidence_hash?: string;
      proposer_address?: string;
    };
    data?: { txs?: string[] };
    evidence?: {
      evidence?: {
        duplicate_vote_evidence?: {
          vote_a?: {
            type?:
              | "SIGNED_MSG_TYPE_UNKNOWN"
              | "SIGNED_MSG_TYPE_PREVOTE"
              | "SIGNED_MSG_TYPE_PRECOMMIT"
              | "SIGNED_MSG_TYPE_PROPOSAL";
            height?: string;
            round?: number;
            block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
            timestamp?: string;
            validator_address?: string;
            validator_index?: number;
            signature?: string;
          };
          vote_b?: {
            type?:
              | "SIGNED_MSG_TYPE_UNKNOWN"
              | "SIGNED_MSG_TYPE_PREVOTE"
              | "SIGNED_MSG_TYPE_PRECOMMIT"
              | "SIGNED_MSG_TYPE_PROPOSAL";
            height?: string;
            round?: number;
            block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
            timestamp?: string;
            validator_address?: string;
            validator_index?: number;
            signature?: string;
          };
          total_voting_power?: string;
          validator_power?: string;
          timestamp?: string;
        };
        light_client_attack_evidence?: {
          conflicting_block?: {
            signed_header?: {
              header?: {
                version?: { block?: string; app?: string };
                chain_id?: string;
                height?: string;
                time?: string;
                last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                last_commit_hash?: string;
                data_hash?: string;
                validators_hash?: string;
                next_validators_hash?: string;
                consensus_hash?: string;
                app_hash?: string;
                last_results_hash?: string;
                evidence_hash?: string;
                proposer_address?: string;
              };
              commit?: {
                height?: string;
                round?: number;
                block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                signatures?: {
                  block_id_flag?:
                    | "BLOCK_ID_FLAG_UNKNOWN"
                    | "BLOCK_ID_FLAG_ABSENT"
                    | "BLOCK_ID_FLAG_COMMIT"
                    | "BLOCK_ID_FLAG_NIL";
                  validator_address?: string;
                  timestamp?: string;
                  signature?: string;
                }[];
              };
            };
            validator_set?: {
              validators?: {
                address?: string;
                pub_key?: { ed25519?: string; secp256k1?: string };
                voting_power?: string;
                proposer_priority?: string;
              }[];
              proposer?: {
                address?: string;
                pub_key?: { ed25519?: string; secp256k1?: string };
                voting_power?: string;
                proposer_priority?: string;
              };
              total_voting_power?: string;
            };
          };
          common_height?: string;
          byzantine_validators?: {
            address?: string;
            pub_key?: { ed25519?: string; secp256k1?: string };
            voting_power?: string;
            proposer_priority?: string;
          }[];
          total_voting_power?: string;
          timestamp?: string;
        };
      }[];
    };
    last_commit?: {
      height?: string;
      round?: number;
      block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
      signatures?: {
        block_id_flag?: "BLOCK_ID_FLAG_UNKNOWN" | "BLOCK_ID_FLAG_ABSENT" | "BLOCK_ID_FLAG_COMMIT" | "BLOCK_ID_FLAG_NIL";
        validator_address?: string;
        timestamp?: string;
        signature?: string;
      }[];
    };
  };
}

/**
 * GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method.
 */
export interface CosmosBaseTendermintV1Beta1GetLatestValidatorSetResponse {
  /** @format int64 */
  block_height?: string;
  validators?: {
    address?: string;
    pub_key?: { "@type"?: string };
    voting_power?: string;
    proposer_priority?: string;
  }[];

  /** pagination defines an pagination for the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
 * GetNodeInfoResponse is the request type for the Query/GetNodeInfo RPC method.
 */
export interface CosmosBaseTendermintV1Beta1GetNodeInfoResponse {
  default_node_info?: {
    protocol_version?: { p2p?: string; block?: string; app?: string };
    default_node_id?: string;
    listen_addr?: string;
    network?: string;
    version?: string;
    channels?: string;
    moniker?: string;
    other?: { tx_index?: string; rpc_address?: string };
  };

  /** VersionInfo is the type for the GetNodeInfoResponse message. */
  application_version?: {
    name?: string;
    app_name?: string;
    version?: string;
    git_commit?: string;
    build_tags?: string;
    go_version?: string;
    build_deps?: { path?: string; version?: string; sum?: string }[];
    cosmos_sdk_version?: string;
  };
}

/**
 * GetSyncingResponse is the response type for the Query/GetSyncing RPC method.
 */
export interface CosmosBaseTendermintV1Beta1GetSyncingResponse {
  syncing?: boolean;
}

/**
 * GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method.
 */
export interface CosmosBaseTendermintV1Beta1GetValidatorSetByHeightResponse {
  /** @format int64 */
  block_height?: string;
  validators?: {
    address?: string;
    pub_key?: { "@type"?: string };
    voting_power?: string;
    proposer_priority?: string;
  }[];

  /** pagination defines an pagination for the response. */
  pagination?: { next_key?: string; total?: string };
}

export interface CosmosBaseTendermintV1Beta1Module {
  /** module path */
  path?: string;

  /** module version */
  version?: string;

  /** checksum */
  sum?: string;
}

/**
 * Validator is the type for the validator-set.
 */
export interface CosmosBaseTendermintV1Beta1Validator {
  address?: string;

  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  pub_key?: { "@type"?: string };

  /** @format int64 */
  voting_power?: string;

  /** @format int64 */
  proposer_priority?: string;
}

/**
 * VersionInfo is the type for the GetNodeInfoResponse message.
 */
export interface CosmosBaseTendermintV1Beta1VersionInfo {
  name?: string;
  app_name?: string;
  version?: string;
  git_commit?: string;
  build_tags?: string;
  go_version?: string;
  build_deps?: { path?: string; version?: string; sum?: string }[];

  /** Since: cosmos-sdk 0.43 */
  cosmos_sdk_version?: string;
}

export interface TendermintCryptoPublicKey {
  /** @format byte */
  ed25519?: string;

  /** @format byte */
  secp256k1?: string;
}

export interface TendermintP2PDefaultNodeInfo {
  protocol_version?: { p2p?: string; block?: string; app?: string };
  default_node_id?: string;
  listen_addr?: string;
  network?: string;
  version?: string;

  /** @format byte */
  channels?: string;
  moniker?: string;
  other?: { tx_index?: string; rpc_address?: string };
}

export interface TendermintP2PDefaultNodeInfoOther {
  tx_index?: string;
  rpc_address?: string;
}

export interface TendermintP2PProtocolVersion {
  /** @format uint64 */
  p2p?: string;

  /** @format uint64 */
  block?: string;

  /** @format uint64 */
  app?: string;
}

export interface TendermintTypesBlock {
  /** Header defines the structure of a Tendermint block header. */
  header?: {
    version?: { block?: string; app?: string };
    chain_id?: string;
    height?: string;
    time?: string;
    last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
    last_commit_hash?: string;
    data_hash?: string;
    validators_hash?: string;
    next_validators_hash?: string;
    consensus_hash?: string;
    app_hash?: string;
    last_results_hash?: string;
    evidence_hash?: string;
    proposer_address?: string;
  };

  /** Data contains the set of transactions included in the block */
  data?: { txs?: string[] };
  evidence?: {
    evidence?: {
      duplicate_vote_evidence?: {
        vote_a?: {
          type?:
            | "SIGNED_MSG_TYPE_UNKNOWN"
            | "SIGNED_MSG_TYPE_PREVOTE"
            | "SIGNED_MSG_TYPE_PRECOMMIT"
            | "SIGNED_MSG_TYPE_PROPOSAL";
          height?: string;
          round?: number;
          block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
          timestamp?: string;
          validator_address?: string;
          validator_index?: number;
          signature?: string;
        };
        vote_b?: {
          type?:
            | "SIGNED_MSG_TYPE_UNKNOWN"
            | "SIGNED_MSG_TYPE_PREVOTE"
            | "SIGNED_MSG_TYPE_PRECOMMIT"
            | "SIGNED_MSG_TYPE_PROPOSAL";
          height?: string;
          round?: number;
          block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
          timestamp?: string;
          validator_address?: string;
          validator_index?: number;
          signature?: string;
        };
        total_voting_power?: string;
        validator_power?: string;
        timestamp?: string;
      };
      light_client_attack_evidence?: {
        conflicting_block?: {
          signed_header?: {
            header?: {
              version?: { block?: string; app?: string };
              chain_id?: string;
              height?: string;
              time?: string;
              last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
              last_commit_hash?: string;
              data_hash?: string;
              validators_hash?: string;
              next_validators_hash?: string;
              consensus_hash?: string;
              app_hash?: string;
              last_results_hash?: string;
              evidence_hash?: string;
              proposer_address?: string;
            };
            commit?: {
              height?: string;
              round?: number;
              block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
              signatures?: {
                block_id_flag?:
                  | "BLOCK_ID_FLAG_UNKNOWN"
                  | "BLOCK_ID_FLAG_ABSENT"
                  | "BLOCK_ID_FLAG_COMMIT"
                  | "BLOCK_ID_FLAG_NIL";
                validator_address?: string;
                timestamp?: string;
                signature?: string;
              }[];
            };
          };
          validator_set?: {
            validators?: {
              address?: string;
              pub_key?: { ed25519?: string; secp256k1?: string };
              voting_power?: string;
              proposer_priority?: string;
            }[];
            proposer?: {
              address?: string;
              pub_key?: { ed25519?: string; secp256k1?: string };
              voting_power?: string;
              proposer_priority?: string;
            };
            total_voting_power?: string;
          };
        };
        common_height?: string;
        byzantine_validators?: {
          address?: string;
          pub_key?: { ed25519?: string; secp256k1?: string };
          voting_power?: string;
          proposer_priority?: string;
        }[];
        total_voting_power?: string;
        timestamp?: string;
      };
    }[];
  };

  /** Commit contains the evidence that a block was committed by a set of validators. */
  last_commit?: {
    height?: string;
    round?: number;
    block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
    signatures?: {
      block_id_flag?: "BLOCK_ID_FLAG_UNKNOWN" | "BLOCK_ID_FLAG_ABSENT" | "BLOCK_ID_FLAG_COMMIT" | "BLOCK_ID_FLAG_NIL";
      validator_address?: string;
      timestamp?: string;
      signature?: string;
    }[];
  };
}

export interface TendermintTypesBlockID {
  /** @format byte */
  hash?: string;

  /** PartsetHeader */
  part_set_header?: { total?: number; hash?: string };
}

export enum TendermintTypesBlockIDFlag {
  BLOCK_ID_FLAG_UNKNOWN = "BLOCK_ID_FLAG_UNKNOWN",
  BLOCK_ID_FLAG_ABSENT = "BLOCK_ID_FLAG_ABSENT",
  BLOCK_ID_FLAG_COMMIT = "BLOCK_ID_FLAG_COMMIT",
  BLOCK_ID_FLAG_NIL = "BLOCK_ID_FLAG_NIL",
}

/**
 * Commit contains the evidence that a block was committed by a set of validators.
 */
export interface TendermintTypesCommit {
  /** @format int64 */
  height?: string;

  /** @format int32 */
  round?: number;

  /** BlockID */
  block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
  signatures?: {
    block_id_flag?: "BLOCK_ID_FLAG_UNKNOWN" | "BLOCK_ID_FLAG_ABSENT" | "BLOCK_ID_FLAG_COMMIT" | "BLOCK_ID_FLAG_NIL";
    validator_address?: string;
    timestamp?: string;
    signature?: string;
  }[];
}

/**
 * CommitSig is a part of the Vote included in a Commit.
 */
export interface TendermintTypesCommitSig {
  /** BlockIdFlag indicates which BlcokID the signature is for */
  block_id_flag?: "BLOCK_ID_FLAG_UNKNOWN" | "BLOCK_ID_FLAG_ABSENT" | "BLOCK_ID_FLAG_COMMIT" | "BLOCK_ID_FLAG_NIL";

  /** @format byte */
  validator_address?: string;

  /** @format date-time */
  timestamp?: string;

  /** @format byte */
  signature?: string;
}

export interface TendermintTypesData {
  /**
   * Txs that will be applied by state @ block.Height+1.
   * NOTE: not all txs here are valid.  We're just agreeing on the order first.
   * This means that block.AppHash does not include these txs.
   */
  txs?: string[];
}

/**
 * DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes.
 */
export interface TendermintTypesDuplicateVoteEvidence {
  /**
   * Vote represents a prevote, precommit, or commit vote from validators for
   * consensus.
   */
  vote_a?: {
    type?:
      | "SIGNED_MSG_TYPE_UNKNOWN"
      | "SIGNED_MSG_TYPE_PREVOTE"
      | "SIGNED_MSG_TYPE_PRECOMMIT"
      | "SIGNED_MSG_TYPE_PROPOSAL";
    height?: string;
    round?: number;
    block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
    timestamp?: string;
    validator_address?: string;
    validator_index?: number;
    signature?: string;
  };

  /**
   * Vote represents a prevote, precommit, or commit vote from validators for
   * consensus.
   */
  vote_b?: {
    type?:
      | "SIGNED_MSG_TYPE_UNKNOWN"
      | "SIGNED_MSG_TYPE_PREVOTE"
      | "SIGNED_MSG_TYPE_PRECOMMIT"
      | "SIGNED_MSG_TYPE_PROPOSAL";
    height?: string;
    round?: number;
    block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
    timestamp?: string;
    validator_address?: string;
    validator_index?: number;
    signature?: string;
  };

  /** @format int64 */
  total_voting_power?: string;

  /** @format int64 */
  validator_power?: string;

  /** @format date-time */
  timestamp?: string;
}

export interface TendermintTypesEvidence {
  /** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
  duplicate_vote_evidence?: {
    vote_a?: {
      type?:
        | "SIGNED_MSG_TYPE_UNKNOWN"
        | "SIGNED_MSG_TYPE_PREVOTE"
        | "SIGNED_MSG_TYPE_PRECOMMIT"
        | "SIGNED_MSG_TYPE_PROPOSAL";
      height?: string;
      round?: number;
      block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
      timestamp?: string;
      validator_address?: string;
      validator_index?: number;
      signature?: string;
    };
    vote_b?: {
      type?:
        | "SIGNED_MSG_TYPE_UNKNOWN"
        | "SIGNED_MSG_TYPE_PREVOTE"
        | "SIGNED_MSG_TYPE_PRECOMMIT"
        | "SIGNED_MSG_TYPE_PROPOSAL";
      height?: string;
      round?: number;
      block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
      timestamp?: string;
      validator_address?: string;
      validator_index?: number;
      signature?: string;
    };
    total_voting_power?: string;
    validator_power?: string;
    timestamp?: string;
  };

  /** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
  light_client_attack_evidence?: {
    conflicting_block?: {
      signed_header?: {
        header?: {
          version?: { block?: string; app?: string };
          chain_id?: string;
          height?: string;
          time?: string;
          last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
          last_commit_hash?: string;
          data_hash?: string;
          validators_hash?: string;
          next_validators_hash?: string;
          consensus_hash?: string;
          app_hash?: string;
          last_results_hash?: string;
          evidence_hash?: string;
          proposer_address?: string;
        };
        commit?: {
          height?: string;
          round?: number;
          block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
          signatures?: {
            block_id_flag?:
              | "BLOCK_ID_FLAG_UNKNOWN"
              | "BLOCK_ID_FLAG_ABSENT"
              | "BLOCK_ID_FLAG_COMMIT"
              | "BLOCK_ID_FLAG_NIL";
            validator_address?: string;
            timestamp?: string;
            signature?: string;
          }[];
        };
      };
      validator_set?: {
        validators?: {
          address?: string;
          pub_key?: { ed25519?: string; secp256k1?: string };
          voting_power?: string;
          proposer_priority?: string;
        }[];
        proposer?: {
          address?: string;
          pub_key?: { ed25519?: string; secp256k1?: string };
          voting_power?: string;
          proposer_priority?: string;
        };
        total_voting_power?: string;
      };
    };
    common_height?: string;
    byzantine_validators?: {
      address?: string;
      pub_key?: { ed25519?: string; secp256k1?: string };
      voting_power?: string;
      proposer_priority?: string;
    }[];
    total_voting_power?: string;
    timestamp?: string;
  };
}

export interface TendermintTypesEvidenceList {
  evidence?: {
    duplicate_vote_evidence?: {
      vote_a?: {
        type?:
          | "SIGNED_MSG_TYPE_UNKNOWN"
          | "SIGNED_MSG_TYPE_PREVOTE"
          | "SIGNED_MSG_TYPE_PRECOMMIT"
          | "SIGNED_MSG_TYPE_PROPOSAL";
        height?: string;
        round?: number;
        block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
        timestamp?: string;
        validator_address?: string;
        validator_index?: number;
        signature?: string;
      };
      vote_b?: {
        type?:
          | "SIGNED_MSG_TYPE_UNKNOWN"
          | "SIGNED_MSG_TYPE_PREVOTE"
          | "SIGNED_MSG_TYPE_PRECOMMIT"
          | "SIGNED_MSG_TYPE_PROPOSAL";
        height?: string;
        round?: number;
        block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
        timestamp?: string;
        validator_address?: string;
        validator_index?: number;
        signature?: string;
      };
      total_voting_power?: string;
      validator_power?: string;
      timestamp?: string;
    };
    light_client_attack_evidence?: {
      conflicting_block?: {
        signed_header?: {
          header?: {
            version?: { block?: string; app?: string };
            chain_id?: string;
            height?: string;
            time?: string;
            last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
            last_commit_hash?: string;
            data_hash?: string;
            validators_hash?: string;
            next_validators_hash?: string;
            consensus_hash?: string;
            app_hash?: string;
            last_results_hash?: string;
            evidence_hash?: string;
            proposer_address?: string;
          };
          commit?: {
            height?: string;
            round?: number;
            block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
            signatures?: {
              block_id_flag?:
                | "BLOCK_ID_FLAG_UNKNOWN"
                | "BLOCK_ID_FLAG_ABSENT"
                | "BLOCK_ID_FLAG_COMMIT"
                | "BLOCK_ID_FLAG_NIL";
              validator_address?: string;
              timestamp?: string;
              signature?: string;
            }[];
          };
        };
        validator_set?: {
          validators?: {
            address?: string;
            pub_key?: { ed25519?: string; secp256k1?: string };
            voting_power?: string;
            proposer_priority?: string;
          }[];
          proposer?: {
            address?: string;
            pub_key?: { ed25519?: string; secp256k1?: string };
            voting_power?: string;
            proposer_priority?: string;
          };
          total_voting_power?: string;
        };
      };
      common_height?: string;
      byzantine_validators?: {
        address?: string;
        pub_key?: { ed25519?: string; secp256k1?: string };
        voting_power?: string;
        proposer_priority?: string;
      }[];
      total_voting_power?: string;
      timestamp?: string;
    };
  }[];
}

/**
 * Header defines the structure of a Tendermint block header.
 */
export interface TendermintTypesHeader {
  /**
   * basic block info
   * Consensus captures the consensus rules for processing a block in the blockchain,
   * including all blockchain data structures and the rules of the application's
   * state transition machine.
   */
  version?: { block?: string; app?: string };
  chain_id?: string;

  /** @format int64 */
  height?: string;

  /** @format date-time */
  time?: string;

  /** BlockID */
  last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };

  /**
   * hashes of block data
   * @format byte
   */
  last_commit_hash?: string;

  /** @format byte */
  data_hash?: string;

  /**
   * hashes from the app output from the prev block
   * @format byte
   */
  validators_hash?: string;

  /** @format byte */
  next_validators_hash?: string;

  /** @format byte */
  consensus_hash?: string;

  /** @format byte */
  app_hash?: string;

  /** @format byte */
  last_results_hash?: string;

  /**
   * consensus info
   * @format byte
   */
  evidence_hash?: string;

  /** @format byte */
  proposer_address?: string;
}

export interface TendermintTypesLightBlock {
  signed_header?: {
    header?: {
      version?: { block?: string; app?: string };
      chain_id?: string;
      height?: string;
      time?: string;
      last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
      last_commit_hash?: string;
      data_hash?: string;
      validators_hash?: string;
      next_validators_hash?: string;
      consensus_hash?: string;
      app_hash?: string;
      last_results_hash?: string;
      evidence_hash?: string;
      proposer_address?: string;
    };
    commit?: {
      height?: string;
      round?: number;
      block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
      signatures?: {
        block_id_flag?: "BLOCK_ID_FLAG_UNKNOWN" | "BLOCK_ID_FLAG_ABSENT" | "BLOCK_ID_FLAG_COMMIT" | "BLOCK_ID_FLAG_NIL";
        validator_address?: string;
        timestamp?: string;
        signature?: string;
      }[];
    };
  };
  validator_set?: {
    validators?: {
      address?: string;
      pub_key?: { ed25519?: string; secp256k1?: string };
      voting_power?: string;
      proposer_priority?: string;
    }[];
    proposer?: {
      address?: string;
      pub_key?: { ed25519?: string; secp256k1?: string };
      voting_power?: string;
      proposer_priority?: string;
    };
    total_voting_power?: string;
  };
}

/**
 * LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client.
 */
export interface TendermintTypesLightClientAttackEvidence {
  conflicting_block?: {
    signed_header?: {
      header?: {
        version?: { block?: string; app?: string };
        chain_id?: string;
        height?: string;
        time?: string;
        last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
        last_commit_hash?: string;
        data_hash?: string;
        validators_hash?: string;
        next_validators_hash?: string;
        consensus_hash?: string;
        app_hash?: string;
        last_results_hash?: string;
        evidence_hash?: string;
        proposer_address?: string;
      };
      commit?: {
        height?: string;
        round?: number;
        block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
        signatures?: {
          block_id_flag?:
            | "BLOCK_ID_FLAG_UNKNOWN"
            | "BLOCK_ID_FLAG_ABSENT"
            | "BLOCK_ID_FLAG_COMMIT"
            | "BLOCK_ID_FLAG_NIL";
          validator_address?: string;
          timestamp?: string;
          signature?: string;
        }[];
      };
    };
    validator_set?: {
      validators?: {
        address?: string;
        pub_key?: { ed25519?: string; secp256k1?: string };
        voting_power?: string;
        proposer_priority?: string;
      }[];
      proposer?: {
        address?: string;
        pub_key?: { ed25519?: string; secp256k1?: string };
        voting_power?: string;
        proposer_priority?: string;
      };
      total_voting_power?: string;
    };
  };

  /** @format int64 */
  common_height?: string;
  byzantine_validators?: {
    address?: string;
    pub_key?: { ed25519?: string; secp256k1?: string };
    voting_power?: string;
    proposer_priority?: string;
  }[];

  /** @format int64 */
  total_voting_power?: string;

  /** @format date-time */
  timestamp?: string;
}

export interface TendermintTypesPartSetHeader {
  /** @format int64 */
  total?: number;

  /** @format byte */
  hash?: string;
}

export interface TendermintTypesSignedHeader {
  /** Header defines the structure of a Tendermint block header. */
  header?: {
    version?: { block?: string; app?: string };
    chain_id?: string;
    height?: string;
    time?: string;
    last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
    last_commit_hash?: string;
    data_hash?: string;
    validators_hash?: string;
    next_validators_hash?: string;
    consensus_hash?: string;
    app_hash?: string;
    last_results_hash?: string;
    evidence_hash?: string;
    proposer_address?: string;
  };

  /** Commit contains the evidence that a block was committed by a set of validators. */
  commit?: {
    height?: string;
    round?: number;
    block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
    signatures?: {
      block_id_flag?: "BLOCK_ID_FLAG_UNKNOWN" | "BLOCK_ID_FLAG_ABSENT" | "BLOCK_ID_FLAG_COMMIT" | "BLOCK_ID_FLAG_NIL";
      validator_address?: string;
      timestamp?: string;
      signature?: string;
    }[];
  };
}

/**
* SignedMsgType is a type of signed message in the consensus.

 - SIGNED_MSG_TYPE_PREVOTE: Votes
 - SIGNED_MSG_TYPE_PROPOSAL: Proposals
*/
export enum TendermintTypesSignedMsgType {
  SIGNED_MSG_TYPE_UNKNOWN = "SIGNED_MSG_TYPE_UNKNOWN",
  SIGNED_MSG_TYPE_PREVOTE = "SIGNED_MSG_TYPE_PREVOTE",
  SIGNED_MSG_TYPE_PRECOMMIT = "SIGNED_MSG_TYPE_PRECOMMIT",
  SIGNED_MSG_TYPE_PROPOSAL = "SIGNED_MSG_TYPE_PROPOSAL",
}

export interface TendermintTypesValidator {
  /** @format byte */
  address?: string;

  /** PublicKey defines the keys available for use with Tendermint Validators */
  pub_key?: { ed25519?: string; secp256k1?: string };

  /** @format int64 */
  voting_power?: string;

  /** @format int64 */
  proposer_priority?: string;
}

export interface TendermintTypesValidatorSet {
  validators?: {
    address?: string;
    pub_key?: { ed25519?: string; secp256k1?: string };
    voting_power?: string;
    proposer_priority?: string;
  }[];
  proposer?: {
    address?: string;
    pub_key?: { ed25519?: string; secp256k1?: string };
    voting_power?: string;
    proposer_priority?: string;
  };

  /** @format int64 */
  total_voting_power?: string;
}

/**
* Vote represents a prevote, precommit, or commit vote from validators for
consensus.
*/
export interface TendermintTypesVote {
  /**
   * SignedMsgType is a type of signed message in the consensus.
   *
   *  - SIGNED_MSG_TYPE_PREVOTE: Votes
   *  - SIGNED_MSG_TYPE_PROPOSAL: Proposals
   */
  type?:
    | "SIGNED_MSG_TYPE_UNKNOWN"
    | "SIGNED_MSG_TYPE_PREVOTE"
    | "SIGNED_MSG_TYPE_PRECOMMIT"
    | "SIGNED_MSG_TYPE_PROPOSAL";

  /** @format int64 */
  height?: string;

  /** @format int32 */
  round?: number;

  /** BlockID */
  block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };

  /** @format date-time */
  timestamp?: string;

  /** @format byte */
  validator_address?: string;

  /** @format int32 */
  validator_index?: number;

  /** @format byte */
  signature?: string;
}

/**
* Consensus captures the consensus rules for processing a block in the blockchain,
including all blockchain data structures and the rules of the application's
state transition machine.
*/
export interface TendermintVersionConsensus {
  /** @format uint64 */
  block?: string;

  /** @format uint64 */
  app?: string;
}

/**
 * MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type.
 */
export type CosmosCrisisV1Beta1MsgVerifyInvariantResponse = object;

/**
* DecCoin defines a token with a denomination and a decimal amount.

NOTE: The amount field is an Dec which implements the custom method
signatures required by gogoproto.
*/
export interface CosmosBaseV1Beta1DecCoin {
  denom?: string;
  amount?: string;
}

/**
* DelegationDelegatorReward represents the properties
of a delegator's delegation reward.
*/
export interface CosmosDistributionV1Beta1DelegationDelegatorReward {
  validator_address?: string;
  reward?: { denom?: string; amount?: string }[];
}

/**
 * MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.
 */
export type CosmosDistributionV1Beta1MsgFundCommunityPoolResponse = object;

/**
 * MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type.
 */
export type CosmosDistributionV1Beta1MsgSetWithdrawAddressResponse = object;

/**
 * MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type.
 */
export type CosmosDistributionV1Beta1MsgWithdrawDelegatorRewardResponse = object;

/**
 * MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type.
 */
export type CosmosDistributionV1Beta1MsgWithdrawValidatorCommissionResponse = object;

/**
 * Params defines the set of params for the distribution module.
 */
export interface CosmosDistributionV1Beta1Params {
  community_tax?: string;
  base_proposer_reward?: string;
  bonus_proposer_reward?: string;
  withdraw_addr_enabled?: boolean;
}

/**
* QueryCommunityPoolResponse is the response type for the Query/CommunityPool
RPC method.
*/
export interface CosmosDistributionV1Beta1QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool?: { denom?: string; amount?: string }[];
}

/**
* QueryDelegationRewardsResponse is the response type for the
Query/DelegationRewards RPC method.
*/
export interface CosmosDistributionV1Beta1QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards?: { denom?: string; amount?: string }[];
}

/**
* QueryDelegationTotalRewardsResponse is the response type for the
Query/DelegationTotalRewards RPC method.
*/
export interface CosmosDistributionV1Beta1QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards?: { validator_address?: string; reward?: { denom?: string; amount?: string }[] }[];

  /** total defines the sum of all the rewards. */
  total?: { denom?: string; amount?: string }[];
}

/**
* QueryDelegatorValidatorsResponse is the response type for the
Query/DelegatorValidators RPC method.
*/
export interface CosmosDistributionV1Beta1QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators?: string[];
}

/**
* QueryDelegatorWithdrawAddressResponse is the response type for the
Query/DelegatorWithdrawAddress RPC method.
*/
export interface CosmosDistributionV1Beta1QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdraw_address?: string;
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 */
export interface CosmosDistributionV1Beta1QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: {
    community_tax?: string;
    base_proposer_reward?: string;
    bonus_proposer_reward?: string;
    withdraw_addr_enabled?: boolean;
  };
}

export interface CosmosDistributionV1Beta1QueryValidatorCommissionResponse {
  /** commission defines the commision the validator received. */
  commission?: { commission?: { denom?: string; amount?: string }[] };
}

/**
* QueryValidatorOutstandingRewardsResponse is the response type for the
Query/ValidatorOutstandingRewards RPC method.
*/
export interface CosmosDistributionV1Beta1QueryValidatorOutstandingRewardsResponse {
  /**
   * ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
   * for a validator inexpensive to track, allows simple sanity checks.
   */
  rewards?: { rewards?: { denom?: string; amount?: string }[] };
}

/**
* QueryValidatorSlashesResponse is the response type for the
Query/ValidatorSlashes RPC method.
*/
export interface CosmosDistributionV1Beta1QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes?: { validator_period?: string; fraction?: string }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
* ValidatorAccumulatedCommission represents accumulated commission
for a validator kept as a running counter, can be withdrawn at any time.
*/
export interface CosmosDistributionV1Beta1ValidatorAccumulatedCommission {
  commission?: { denom?: string; amount?: string }[];
}

/**
* ValidatorOutstandingRewards represents outstanding (un-withdrawn) rewards
for a validator inexpensive to track, allows simple sanity checks.
*/
export interface CosmosDistributionV1Beta1ValidatorOutstandingRewards {
  rewards?: { denom?: string; amount?: string }[];
}

/**
* ValidatorSlashEvent represents a validator slash event.
Height is implicit within the store key.
This is needed to calculate appropriate amount of staking tokens
for delegations which are withdrawn after a slash has occurred.
*/
export interface CosmosDistributionV1Beta1ValidatorSlashEvent {
  /** @format uint64 */
  validator_period?: string;
  fraction?: string;
}

/**
 * MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 */
export interface CosmosEvidenceV1Beta1MsgSubmitEvidenceResponse {
  /**
   * hash defines the hash of the evidence.
   * @format byte
   */
  hash?: string;
}

/**
* QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
method.
*/
export interface CosmosEvidenceV1Beta1QueryAllEvidenceResponse {
  /** evidence returns all evidences. */
  evidence?: { "@type"?: string }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
 * QueryEvidenceResponse is the response type for the Query/Evidence RPC method.
 */
export interface CosmosEvidenceV1Beta1QueryEvidenceResponse {
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  evidence?: { "@type"?: string };
}

export interface CosmosFeegrantV1Beta1Grant {
  /** granter is the address of the user granting an allowance of their funds. */
  granter?: string;

  /** grantee is the address of the user being granted an allowance of another user's funds. */
  grantee?: string;

  /** allowance can be any of basic and filtered fee allowance. */
  allowance?: { "@type"?: string };
}

/**
 * MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type.
 */
export type CosmosFeegrantV1Beta1MsgGrantAllowanceResponse = object;

/**
 * MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type.
 */
export type CosmosFeegrantV1Beta1MsgRevokeAllowanceResponse = object;

/**
 * QueryAllowanceResponse is the response type for the Query/Allowance RPC method.
 */
export interface CosmosFeegrantV1Beta1QueryAllowanceResponse {
  /**
   * Grant is stored in the KVStore to record a grant with full context
   * allowance is a allowance granted for grantee by granter.
   */
  allowance?: { granter?: string; grantee?: string; allowance?: { "@type"?: string } };
}

/**
 * QueryAllowancesResponse is the response type for the Query/Allowances RPC method.
 */
export interface CosmosFeegrantV1Beta1QueryAllowancesResponse {
  /** allowances are allowance's granted for grantee by granter. */
  allowances?: { granter?: string; grantee?: string; allowance?: { "@type"?: string } }[];

  /** pagination defines an pagination for the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
* Deposit defines an amount deposited by an account address to an active
proposal.
*/
export interface CosmosGovV1Beta1Deposit {
  /** @format uint64 */
  proposal_id?: string;
  depositor?: string;
  amount?: { denom?: string; amount?: string }[];
}

/**
 * DepositParams defines the params for deposits on governance proposals.
 */
export interface CosmosGovV1Beta1DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  min_deposit?: { denom?: string; amount?: string }[];

  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   *  months.
   */
  max_deposit_period?: string;
}

/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 */
export type CosmosGovV1Beta1MsgDepositResponse = object;

/**
 * MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.
 */
export interface CosmosGovV1Beta1MsgSubmitProposalResponse {
  /** @format uint64 */
  proposal_id?: string;
}

/**
 * MsgVoteResponse defines the Msg/Vote response type.
 */
export type CosmosGovV1Beta1MsgVoteResponse = object;

/**
* MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.

Since: cosmos-sdk 0.43
*/
export type CosmosGovV1Beta1MsgVoteWeightedResponse = object;

/**
 * Proposal defines the core field members of a governance proposal.
 */
export interface CosmosGovV1Beta1Proposal {
  /** @format uint64 */
  proposal_id?: string;

  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  content?: { "@type"?: string };

  /**
   * ProposalStatus enumerates the valid statuses of a proposal.
   *
   *  - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
   *  - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   *  - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   *  - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   *  - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   *  - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  status?:
    | "PROPOSAL_STATUS_UNSPECIFIED"
    | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
    | "PROPOSAL_STATUS_VOTING_PERIOD"
    | "PROPOSAL_STATUS_PASSED"
    | "PROPOSAL_STATUS_REJECTED"
    | "PROPOSAL_STATUS_FAILED";

  /** TallyResult defines a standard tally for a governance proposal. */
  final_tally_result?: { yes?: string; abstain?: string; no?: string; no_with_veto?: string };

  /** @format date-time */
  submit_time?: string;

  /** @format date-time */
  deposit_end_time?: string;
  total_deposit?: { denom?: string; amount?: string }[];

  /** @format date-time */
  voting_start_time?: string;

  /** @format date-time */
  voting_end_time?: string;
}

/**
* ProposalStatus enumerates the valid statuses of a proposal.

 - PROPOSAL_STATUS_UNSPECIFIED: PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.
 - PROPOSAL_STATUS_DEPOSIT_PERIOD: PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
period.
 - PROPOSAL_STATUS_VOTING_PERIOD: PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
period.
 - PROPOSAL_STATUS_PASSED: PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
passed.
 - PROPOSAL_STATUS_REJECTED: PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
been rejected.
 - PROPOSAL_STATUS_FAILED: PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
failed.
*/
export enum CosmosGovV1Beta1ProposalStatus {
  PROPOSAL_STATUS_UNSPECIFIED = "PROPOSAL_STATUS_UNSPECIFIED",
  PROPOSAL_STATUS_DEPOSIT_PERIOD = "PROPOSAL_STATUS_DEPOSIT_PERIOD",
  PROPOSAL_STATUS_VOTING_PERIOD = "PROPOSAL_STATUS_VOTING_PERIOD",
  PROPOSAL_STATUS_PASSED = "PROPOSAL_STATUS_PASSED",
  PROPOSAL_STATUS_REJECTED = "PROPOSAL_STATUS_REJECTED",
  PROPOSAL_STATUS_FAILED = "PROPOSAL_STATUS_FAILED",
}

/**
 * QueryDepositResponse is the response type for the Query/Deposit RPC method.
 */
export interface CosmosGovV1Beta1QueryDepositResponse {
  /**
   * Deposit defines an amount deposited by an account address to an active
   * proposal.
   */
  deposit?: { proposal_id?: string; depositor?: string; amount?: { denom?: string; amount?: string }[] };
}

/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 */
export interface CosmosGovV1Beta1QueryDepositsResponse {
  deposits?: { proposal_id?: string; depositor?: string; amount?: { denom?: string; amount?: string }[] }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 */
export interface CosmosGovV1Beta1QueryParamsResponse {
  /** voting_params defines the parameters related to voting. */
  voting_params?: { voting_period?: string };

  /** deposit_params defines the parameters related to deposit. */
  deposit_params?: { min_deposit?: { denom?: string; amount?: string }[]; max_deposit_period?: string };

  /** tally_params defines the parameters related to tally. */
  tally_params?: { quorum?: string; threshold?: string; veto_threshold?: string };
}

/**
 * QueryProposalResponse is the response type for the Query/Proposal RPC method.
 */
export interface CosmosGovV1Beta1QueryProposalResponse {
  /** Proposal defines the core field members of a governance proposal. */
  proposal?: {
    proposal_id?: string;
    content?: { "@type"?: string };
    status?:
      | "PROPOSAL_STATUS_UNSPECIFIED"
      | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
      | "PROPOSAL_STATUS_VOTING_PERIOD"
      | "PROPOSAL_STATUS_PASSED"
      | "PROPOSAL_STATUS_REJECTED"
      | "PROPOSAL_STATUS_FAILED";
    final_tally_result?: { yes?: string; abstain?: string; no?: string; no_with_veto?: string };
    submit_time?: string;
    deposit_end_time?: string;
    total_deposit?: { denom?: string; amount?: string }[];
    voting_start_time?: string;
    voting_end_time?: string;
  };
}

/**
* QueryProposalsResponse is the response type for the Query/Proposals RPC
method.
*/
export interface CosmosGovV1Beta1QueryProposalsResponse {
  proposals?: {
    proposal_id?: string;
    content?: { "@type"?: string };
    status?:
      | "PROPOSAL_STATUS_UNSPECIFIED"
      | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
      | "PROPOSAL_STATUS_VOTING_PERIOD"
      | "PROPOSAL_STATUS_PASSED"
      | "PROPOSAL_STATUS_REJECTED"
      | "PROPOSAL_STATUS_FAILED";
    final_tally_result?: { yes?: string; abstain?: string; no?: string; no_with_veto?: string };
    submit_time?: string;
    deposit_end_time?: string;
    total_deposit?: { denom?: string; amount?: string }[];
    voting_start_time?: string;
    voting_end_time?: string;
  }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
 * QueryTallyResultResponse is the response type for the Query/Tally RPC method.
 */
export interface CosmosGovV1Beta1QueryTallyResultResponse {
  /** TallyResult defines a standard tally for a governance proposal. */
  tally?: { yes?: string; abstain?: string; no?: string; no_with_veto?: string };
}

/**
 * QueryVoteResponse is the response type for the Query/Vote RPC method.
 */
export interface CosmosGovV1Beta1QueryVoteResponse {
  /**
   * Vote defines a vote on a governance proposal.
   * A Vote consists of a proposal ID, the voter, and the vote option.
   */
  vote?: {
    proposal_id?: string;
    voter?: string;
    option?:
      | "VOTE_OPTION_UNSPECIFIED"
      | "VOTE_OPTION_YES"
      | "VOTE_OPTION_ABSTAIN"
      | "VOTE_OPTION_NO"
      | "VOTE_OPTION_NO_WITH_VETO";
    options?: {
      option?:
        | "VOTE_OPTION_UNSPECIFIED"
        | "VOTE_OPTION_YES"
        | "VOTE_OPTION_ABSTAIN"
        | "VOTE_OPTION_NO"
        | "VOTE_OPTION_NO_WITH_VETO";
      weight?: string;
    }[];
  };
}

/**
 * QueryVotesResponse is the response type for the Query/Votes RPC method.
 */
export interface CosmosGovV1Beta1QueryVotesResponse {
  /** votes defined the queried votes. */
  votes?: {
    proposal_id?: string;
    voter?: string;
    option?:
      | "VOTE_OPTION_UNSPECIFIED"
      | "VOTE_OPTION_YES"
      | "VOTE_OPTION_ABSTAIN"
      | "VOTE_OPTION_NO"
      | "VOTE_OPTION_NO_WITH_VETO";
    options?: {
      option?:
        | "VOTE_OPTION_UNSPECIFIED"
        | "VOTE_OPTION_YES"
        | "VOTE_OPTION_ABSTAIN"
        | "VOTE_OPTION_NO"
        | "VOTE_OPTION_NO_WITH_VETO";
      weight?: string;
    }[];
  }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
 * TallyParams defines the params for tallying votes on governance proposals.
 */
export interface CosmosGovV1Beta1TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid.
   * @format byte
   */
  quorum?: string;

  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 0.5.
   * @format byte
   */
  threshold?: string;

  /**
   * Minimum value of Veto votes to Total votes ratio for proposal to be
   *  vetoed. Default value: 1/3.
   * @format byte
   */
  veto_threshold?: string;
}

/**
 * TallyResult defines a standard tally for a governance proposal.
 */
export interface CosmosGovV1Beta1TallyResult {
  yes?: string;
  abstain?: string;
  no?: string;
  no_with_veto?: string;
}

/**
* Vote defines a vote on a governance proposal.
A Vote consists of a proposal ID, the voter, and the vote option.
*/
export interface CosmosGovV1Beta1Vote {
  /** @format uint64 */
  proposal_id?: string;
  voter?: string;

  /**
   * Deprecated: Prefer to use `options` instead. This field is set in queries
   * if and only if `len(options) == 1` and that option has weight 1. In all
   * other cases, this field will default to VOTE_OPTION_UNSPECIFIED.
   */
  option?:
    | "VOTE_OPTION_UNSPECIFIED"
    | "VOTE_OPTION_YES"
    | "VOTE_OPTION_ABSTAIN"
    | "VOTE_OPTION_NO"
    | "VOTE_OPTION_NO_WITH_VETO";

  /** Since: cosmos-sdk 0.43 */
  options?: {
    option?:
      | "VOTE_OPTION_UNSPECIFIED"
      | "VOTE_OPTION_YES"
      | "VOTE_OPTION_ABSTAIN"
      | "VOTE_OPTION_NO"
      | "VOTE_OPTION_NO_WITH_VETO";
    weight?: string;
  }[];
}

/**
* VoteOption enumerates the valid vote options for a given governance proposal.

 - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
 - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.
 - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.
 - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.
 - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
*/
export enum CosmosGovV1Beta1VoteOption {
  VOTE_OPTION_UNSPECIFIED = "VOTE_OPTION_UNSPECIFIED",
  VOTE_OPTION_YES = "VOTE_OPTION_YES",
  VOTE_OPTION_ABSTAIN = "VOTE_OPTION_ABSTAIN",
  VOTE_OPTION_NO = "VOTE_OPTION_NO",
  VOTE_OPTION_NO_WITH_VETO = "VOTE_OPTION_NO_WITH_VETO",
}

/**
 * VotingParams defines the params for voting on governance proposals.
 */
export interface CosmosGovV1Beta1VotingParams {
  /** Length of the voting period. */
  voting_period?: string;
}

/**
* WeightedVoteOption defines a unit of vote for vote split.

Since: cosmos-sdk 0.43
*/
export interface CosmosGovV1Beta1WeightedVoteOption {
  /**
   * VoteOption enumerates the valid vote options for a given governance proposal.
   *
   *  - VOTE_OPTION_UNSPECIFIED: VOTE_OPTION_UNSPECIFIED defines a no-op vote option.
   *  - VOTE_OPTION_YES: VOTE_OPTION_YES defines a yes vote option.
   *  - VOTE_OPTION_ABSTAIN: VOTE_OPTION_ABSTAIN defines an abstain vote option.
   *  - VOTE_OPTION_NO: VOTE_OPTION_NO defines a no vote option.
   *  - VOTE_OPTION_NO_WITH_VETO: VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option.
   */
  option?:
    | "VOTE_OPTION_UNSPECIFIED"
    | "VOTE_OPTION_YES"
    | "VOTE_OPTION_ABSTAIN"
    | "VOTE_OPTION_NO"
    | "VOTE_OPTION_NO_WITH_VETO";
  weight?: string;
}

/**
 * Params holds parameters for the mint module.
 */
export interface CosmosMintV1Beta1Params {
  /** type of coin to mint */
  mint_denom?: string;

  /** maximum annual change in inflation rate */
  inflation_rate_change?: string;

  /** maximum inflation rate */
  inflation_max?: string;

  /** minimum inflation rate */
  inflation_min?: string;

  /** goal of percent bonded atoms */
  goal_bonded?: string;

  /**
   * expected blocks per year
   * @format uint64
   */
  blocks_per_year?: string;
}

/**
* QueryAnnualProvisionsResponse is the response type for the
Query/AnnualProvisions RPC method.
*/
export interface CosmosMintV1Beta1QueryAnnualProvisionsResponse {
  /**
   * annual_provisions is the current minting annual provisions value.
   * @format byte
   */
  annual_provisions?: string;
}

/**
* QueryInflationResponse is the response type for the Query/Inflation RPC
method.
*/
export interface CosmosMintV1Beta1QueryInflationResponse {
  /**
   * inflation is the current minting inflation value.
   * @format byte
   */
  inflation?: string;
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 */
export interface CosmosMintV1Beta1QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: {
    mint_denom?: string;
    inflation_rate_change?: string;
    inflation_max?: string;
    inflation_min?: string;
    goal_bonded?: string;
    blocks_per_year?: string;
  };
}

/**
* ParamChange defines an individual parameter change, for use in
ParameterChangeProposal.
*/
export interface CosmosParamsV1Beta1ParamChange {
  subspace?: string;
  key?: string;
  value?: string;
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface CosmosParamsV1Beta1QueryParamsResponse {
  /** param defines the queried parameter. */
  param?: { subspace?: string; key?: string; value?: string };
}

export type CosmosSlashingV1Beta1MsgUnjailResponse = object;

/**
 * Params represents the parameters used for by the slashing module.
 */
export interface CosmosSlashingV1Beta1Params {
  /** @format int64 */
  signed_blocks_window?: string;

  /** @format byte */
  min_signed_per_window?: string;
  downtime_jail_duration?: string;

  /** @format byte */
  slash_fraction_double_sign?: string;

  /** @format byte */
  slash_fraction_downtime?: string;
}

export interface CosmosSlashingV1Beta1QueryParamsResponse {
  /** Params represents the parameters used for by the slashing module. */
  params?: {
    signed_blocks_window?: string;
    min_signed_per_window?: string;
    downtime_jail_duration?: string;
    slash_fraction_double_sign?: string;
    slash_fraction_downtime?: string;
  };
}

export interface CosmosSlashingV1Beta1QuerySigningInfoResponse {
  /**
   * val_signing_info is the signing info of requested val cons address
   * ValidatorSigningInfo defines a validator's signing info for monitoring their
   * liveness activity.
   */
  val_signing_info?: {
    address?: string;
    start_height?: string;
    index_offset?: string;
    jailed_until?: string;
    tombstoned?: boolean;
    missed_blocks_counter?: string;
  };
}

export interface CosmosSlashingV1Beta1QuerySigningInfosResponse {
  /** info is the signing info of all validators */
  info?: {
    address?: string;
    start_height?: string;
    index_offset?: string;
    jailed_until?: string;
    tombstoned?: boolean;
    missed_blocks_counter?: string;
  }[];

  /**
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: { next_key?: string; total?: string };
}

/**
* ValidatorSigningInfo defines a validator's signing info for monitoring their
liveness activity.
*/
export interface CosmosSlashingV1Beta1ValidatorSigningInfo {
  address?: string;

  /**
   * Height at which validator was first a candidate OR was unjailed
   * @format int64
   */
  start_height?: string;

  /**
   * Index which is incremented each time the validator was a bonded
   * in a block and may have signed a precommit or not. This in conjunction with the
   * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
   * @format int64
   */
  index_offset?: string;

  /**
   * Timestamp until which the validator is jailed due to liveness downtime.
   * @format date-time
   */
  jailed_until?: string;

  /**
   * Whether or not a validator has been tombstoned (killed out of validator set). It is set
   * once the validator commits an equivocation or for any other configured misbehiavor.
   */
  tombstoned?: boolean;

  /**
   * A counter kept to avoid unnecessary array reads.
   * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
   * @format int64
   */
  missed_blocks_counter?: string;
}

/**
* BondStatus is the status of a validator.

 - BOND_STATUS_UNSPECIFIED: UNSPECIFIED defines an invalid validator status.
 - BOND_STATUS_UNBONDED: UNBONDED defines a validator that is not bonded.
 - BOND_STATUS_UNBONDING: UNBONDING defines a validator that is unbonding.
 - BOND_STATUS_BONDED: BONDED defines a validator that is bonded.
*/
export enum CosmosStakingV1Beta1BondStatus {
  BOND_STATUS_UNSPECIFIED = "BOND_STATUS_UNSPECIFIED",
  BOND_STATUS_UNBONDED = "BOND_STATUS_UNBONDED",
  BOND_STATUS_UNBONDING = "BOND_STATUS_UNBONDING",
  BOND_STATUS_BONDED = "BOND_STATUS_BONDED",
}

/**
 * Commission defines commission parameters for a given validator.
 */
export interface CosmosStakingV1Beta1Commission {
  /** commission_rates defines the initial commission rates to be used for creating a validator. */
  commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };

  /**
   * update_time is the last time the commission rate was changed.
   * @format date-time
   */
  update_time?: string;
}

/**
* CommissionRates defines the initial commission rates to be used for creating
a validator.
*/
export interface CosmosStakingV1Beta1CommissionRates {
  /** rate is the commission rate charged to delegators, as a fraction. */
  rate?: string;

  /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
  max_rate?: string;

  /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
  max_change_rate?: string;
}

/**
* Delegation represents the bond with tokens held by an account. It is
owned by one delegator, and is associated with the voting power of one
validator.
*/
export interface CosmosStakingV1Beta1Delegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;

  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;

  /** shares define the delegation shares received. */
  shares?: string;
}

/**
* DelegationResponse is equivalent to Delegation except that it contains a
balance in addition to shares which is more suitable for client responses.
*/
export interface CosmosStakingV1Beta1DelegationResponse {
  /**
   * Delegation represents the bond with tokens held by an account. It is
   * owned by one delegator, and is associated with the voting power of one
   * validator.
   */
  delegation?: { delegator_address?: string; validator_address?: string; shares?: string };

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  balance?: { denom?: string; amount?: string };
}

/**
 * Description defines a validator description.
 */
export interface CosmosStakingV1Beta1Description {
  /** moniker defines a human-readable name for the validator. */
  moniker?: string;

  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity?: string;

  /** website defines an optional website link. */
  website?: string;

  /** security_contact defines an optional email for security contact. */
  security_contact?: string;

  /** details define other optional details. */
  details?: string;
}

/**
* HistoricalInfo contains header and validator information for a given block.
It is stored as part of staking module's state, which persists the `n` most
recent HistoricalInfo
(`n` is set by the staking module's `historical_entries` parameter).
*/
export interface CosmosStakingV1Beta1HistoricalInfo {
  /** Header defines the structure of a Tendermint block header. */
  header?: {
    version?: { block?: string; app?: string };
    chain_id?: string;
    height?: string;
    time?: string;
    last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
    last_commit_hash?: string;
    data_hash?: string;
    validators_hash?: string;
    next_validators_hash?: string;
    consensus_hash?: string;
    app_hash?: string;
    last_results_hash?: string;
    evidence_hash?: string;
    proposer_address?: string;
  };
  valset?: {
    operator_address?: string;
    consensus_pubkey?: { "@type"?: string };
    jailed?: boolean;
    status?: "BOND_STATUS_UNSPECIFIED" | "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNBONDING" | "BOND_STATUS_BONDED";
    tokens?: string;
    delegator_shares?: string;
    description?: {
      moniker?: string;
      identity?: string;
      website?: string;
      security_contact?: string;
      details?: string;
    };
    unbonding_height?: string;
    unbonding_time?: string;
    commission?: {
      commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
      update_time?: string;
    };
    min_self_delegation?: string;
  }[];
}

/**
 * MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type.
 */
export interface CosmosStakingV1Beta1MsgBeginRedelegateResponse {
  /** @format date-time */
  completion_time?: string;
}

/**
 * MsgCreateValidatorResponse defines the Msg/CreateValidator response type.
 */
export type CosmosStakingV1Beta1MsgCreateValidatorResponse = object;

/**
 * MsgDelegateResponse defines the Msg/Delegate response type.
 */
export type CosmosStakingV1Beta1MsgDelegateResponse = object;

/**
 * MsgEditValidatorResponse defines the Msg/EditValidator response type.
 */
export type CosmosStakingV1Beta1MsgEditValidatorResponse = object;

/**
 * MsgUndelegateResponse defines the Msg/Undelegate response type.
 */
export interface CosmosStakingV1Beta1MsgUndelegateResponse {
  /** @format date-time */
  completion_time?: string;
}

/**
 * Params defines the parameters for the staking module.
 */
export interface CosmosStakingV1Beta1Params {
  /** unbonding_time is the time duration of unbonding. */
  unbonding_time?: string;

  /**
   * max_validators is the maximum number of validators.
   * @format int64
   */
  max_validators?: number;

  /**
   * max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio).
   * @format int64
   */
  max_entries?: number;

  /**
   * historical_entries is the number of historical entries to persist.
   * @format int64
   */
  historical_entries?: number;

  /** bond_denom defines the bondable coin denomination. */
  bond_denom?: string;
}

/**
* Pool is used for tracking bonded and not-bonded token supply of the bond
denomination.
*/
export interface CosmosStakingV1Beta1Pool {
  not_bonded_tokens?: string;
  bonded_tokens?: string;
}

/**
 * QueryDelegationResponse is response type for the Query/Delegation RPC method.
 */
export interface CosmosStakingV1Beta1QueryDelegationResponse {
  /**
   * DelegationResponse is equivalent to Delegation except that it contains a
   * balance in addition to shares which is more suitable for client responses.
   */
  delegation_response?: {
    delegation?: { delegator_address?: string; validator_address?: string; shares?: string };
    balance?: { denom?: string; amount?: string };
  };
}

/**
* QueryDelegatorDelegationsResponse is response type for the
Query/DelegatorDelegations RPC method.
*/
export interface CosmosStakingV1Beta1QueryDelegatorDelegationsResponse {
  /** delegation_responses defines all the delegations' info of a delegator. */
  delegation_responses?: {
    delegation?: { delegator_address?: string; validator_address?: string; shares?: string };
    balance?: { denom?: string; amount?: string };
  }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
* QueryUnbondingDelegatorDelegationsResponse is response type for the
Query/UnbondingDelegatorDelegations RPC method.
*/
export interface CosmosStakingV1Beta1QueryDelegatorUnbondingDelegationsResponse {
  unbonding_responses?: {
    delegator_address?: string;
    validator_address?: string;
    entries?: { creation_height?: string; completion_time?: string; initial_balance?: string; balance?: string }[];
  }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
* QueryDelegatorValidatorResponse response type for the
Query/DelegatorValidator RPC method.
*/
export interface CosmosStakingV1Beta1QueryDelegatorValidatorResponse {
  /**
   * Validator defines a validator, together with the total amount of the
   * Validator's bond shares and their exchange rate to coins. Slashing results in
   * a decrease in the exchange rate, allowing correct calculation of future
   * undelegations without iterating over delegators. When coins are delegated to
   * this validator, the validator is credited with a delegation whose number of
   * bond shares is based on the amount of coins delegated divided by the current
   * exchange rate. Voting power can be calculated as total bonded shares
   * multiplied by exchange rate.
   */
  validator?: {
    operator_address?: string;
    consensus_pubkey?: { "@type"?: string };
    jailed?: boolean;
    status?: "BOND_STATUS_UNSPECIFIED" | "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNBONDING" | "BOND_STATUS_BONDED";
    tokens?: string;
    delegator_shares?: string;
    description?: {
      moniker?: string;
      identity?: string;
      website?: string;
      security_contact?: string;
      details?: string;
    };
    unbonding_height?: string;
    unbonding_time?: string;
    commission?: {
      commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
      update_time?: string;
    };
    min_self_delegation?: string;
  };
}

/**
* QueryDelegatorValidatorsResponse is response type for the
Query/DelegatorValidators RPC method.
*/
export interface CosmosStakingV1Beta1QueryDelegatorValidatorsResponse {
  /** validators defines the the validators' info of a delegator. */
  validators?: {
    operator_address?: string;
    consensus_pubkey?: { "@type"?: string };
    jailed?: boolean;
    status?: "BOND_STATUS_UNSPECIFIED" | "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNBONDING" | "BOND_STATUS_BONDED";
    tokens?: string;
    delegator_shares?: string;
    description?: {
      moniker?: string;
      identity?: string;
      website?: string;
      security_contact?: string;
      details?: string;
    };
    unbonding_height?: string;
    unbonding_time?: string;
    commission?: {
      commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
      update_time?: string;
    };
    min_self_delegation?: string;
  }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
* QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
method.
*/
export interface CosmosStakingV1Beta1QueryHistoricalInfoResponse {
  /** hist defines the historical info at the given height. */
  hist?: {
    header?: {
      version?: { block?: string; app?: string };
      chain_id?: string;
      height?: string;
      time?: string;
      last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
      last_commit_hash?: string;
      data_hash?: string;
      validators_hash?: string;
      next_validators_hash?: string;
      consensus_hash?: string;
      app_hash?: string;
      last_results_hash?: string;
      evidence_hash?: string;
      proposer_address?: string;
    };
    valset?: {
      operator_address?: string;
      consensus_pubkey?: { "@type"?: string };
      jailed?: boolean;
      status?: "BOND_STATUS_UNSPECIFIED" | "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNBONDING" | "BOND_STATUS_BONDED";
      tokens?: string;
      delegator_shares?: string;
      description?: {
        moniker?: string;
        identity?: string;
        website?: string;
        security_contact?: string;
        details?: string;
      };
      unbonding_height?: string;
      unbonding_time?: string;
      commission?: {
        commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
        update_time?: string;
      };
      min_self_delegation?: string;
    }[];
  };
}

/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface CosmosStakingV1Beta1QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params?: {
    unbonding_time?: string;
    max_validators?: number;
    max_entries?: number;
    historical_entries?: number;
    bond_denom?: string;
  };
}

/**
 * QueryPoolResponse is response type for the Query/Pool RPC method.
 */
export interface CosmosStakingV1Beta1QueryPoolResponse {
  /** pool defines the pool info. */
  pool?: { not_bonded_tokens?: string; bonded_tokens?: string };
}

/**
* QueryRedelegationsResponse is response type for the Query/Redelegations RPC
method.
*/
export interface CosmosStakingV1Beta1QueryRedelegationsResponse {
  redelegation_responses?: {
    redelegation?: {
      delegator_address?: string;
      validator_src_address?: string;
      validator_dst_address?: string;
      entries?: { creation_height?: string; completion_time?: string; initial_balance?: string; shares_dst?: string }[];
    };
    entries?: {
      redelegation_entry?: {
        creation_height?: string;
        completion_time?: string;
        initial_balance?: string;
        shares_dst?: string;
      };
      balance?: string;
    }[];
  }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
* QueryDelegationResponse is response type for the Query/UnbondingDelegation
RPC method.
*/
export interface CosmosStakingV1Beta1QueryUnbondingDelegationResponse {
  /**
   * UnbondingDelegation stores all of a single delegator's unbonding bonds
   * for a single validator in an time-ordered list.
   */
  unbond?: {
    delegator_address?: string;
    validator_address?: string;
    entries?: { creation_height?: string; completion_time?: string; initial_balance?: string; balance?: string }[];
  };
}

export interface CosmosStakingV1Beta1QueryValidatorDelegationsResponse {
  delegation_responses?: {
    delegation?: { delegator_address?: string; validator_address?: string; shares?: string };
    balance?: { denom?: string; amount?: string };
  }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

export interface CosmosStakingV1Beta1QueryValidatorResponse {
  /**
   * Validator defines a validator, together with the total amount of the
   * Validator's bond shares and their exchange rate to coins. Slashing results in
   * a decrease in the exchange rate, allowing correct calculation of future
   * undelegations without iterating over delegators. When coins are delegated to
   * this validator, the validator is credited with a delegation whose number of
   * bond shares is based on the amount of coins delegated divided by the current
   * exchange rate. Voting power can be calculated as total bonded shares
   * multiplied by exchange rate.
   */
  validator?: {
    operator_address?: string;
    consensus_pubkey?: { "@type"?: string };
    jailed?: boolean;
    status?: "BOND_STATUS_UNSPECIFIED" | "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNBONDING" | "BOND_STATUS_BONDED";
    tokens?: string;
    delegator_shares?: string;
    description?: {
      moniker?: string;
      identity?: string;
      website?: string;
      security_contact?: string;
      details?: string;
    };
    unbonding_height?: string;
    unbonding_time?: string;
    commission?: {
      commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
      update_time?: string;
    };
    min_self_delegation?: string;
  };
}

/**
* QueryValidatorUnbondingDelegationsResponse is response type for the
Query/ValidatorUnbondingDelegations RPC method.
*/
export interface CosmosStakingV1Beta1QueryValidatorUnbondingDelegationsResponse {
  unbonding_responses?: {
    delegator_address?: string;
    validator_address?: string;
    entries?: { creation_height?: string; completion_time?: string; initial_balance?: string; balance?: string }[];
  }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

export interface CosmosStakingV1Beta1QueryValidatorsResponse {
  /** validators contains all the queried validators. */
  validators?: {
    operator_address?: string;
    consensus_pubkey?: { "@type"?: string };
    jailed?: boolean;
    status?: "BOND_STATUS_UNSPECIFIED" | "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNBONDING" | "BOND_STATUS_BONDED";
    tokens?: string;
    delegator_shares?: string;
    description?: {
      moniker?: string;
      identity?: string;
      website?: string;
      security_contact?: string;
      details?: string;
    };
    unbonding_height?: string;
    unbonding_time?: string;
    commission?: {
      commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
      update_time?: string;
    };
    min_self_delegation?: string;
  }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
* Redelegation contains the list of a particular delegator's redelegating bonds
from a particular source validator to a particular destination validator.
*/
export interface CosmosStakingV1Beta1Redelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;

  /** validator_src_address is the validator redelegation source operator address. */
  validator_src_address?: string;

  /** validator_dst_address is the validator redelegation destination operator address. */
  validator_dst_address?: string;

  /** entries are the redelegation entries. */
  entries?: { creation_height?: string; completion_time?: string; initial_balance?: string; shares_dst?: string }[];
}

/**
 * RedelegationEntry defines a redelegation object with relevant metadata.
 */
export interface CosmosStakingV1Beta1RedelegationEntry {
  /**
   * creation_height  defines the height which the redelegation took place.
   * @format int64
   */
  creation_height?: string;

  /**
   * completion_time defines the unix time for redelegation completion.
   * @format date-time
   */
  completion_time?: string;

  /** initial_balance defines the initial balance when redelegation started. */
  initial_balance?: string;

  /** shares_dst is the amount of destination-validator shares created by redelegation. */
  shares_dst?: string;
}

/**
* RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
contains a balance in addition to shares which is more suitable for client
responses.
*/
export interface CosmosStakingV1Beta1RedelegationEntryResponse {
  /** RedelegationEntry defines a redelegation object with relevant metadata. */
  redelegation_entry?: {
    creation_height?: string;
    completion_time?: string;
    initial_balance?: string;
    shares_dst?: string;
  };
  balance?: string;
}

/**
* RedelegationResponse is equivalent to a Redelegation except that its entries
contain a balance in addition to shares which is more suitable for client
responses.
*/
export interface CosmosStakingV1Beta1RedelegationResponse {
  /**
   * Redelegation contains the list of a particular delegator's redelegating bonds
   * from a particular source validator to a particular destination validator.
   */
  redelegation?: {
    delegator_address?: string;
    validator_src_address?: string;
    validator_dst_address?: string;
    entries?: { creation_height?: string; completion_time?: string; initial_balance?: string; shares_dst?: string }[];
  };
  entries?: {
    redelegation_entry?: {
      creation_height?: string;
      completion_time?: string;
      initial_balance?: string;
      shares_dst?: string;
    };
    balance?: string;
  }[];
}

/**
* UnbondingDelegation stores all of a single delegator's unbonding bonds
for a single validator in an time-ordered list.
*/
export interface CosmosStakingV1Beta1UnbondingDelegation {
  /** delegator_address is the bech32-encoded address of the delegator. */
  delegator_address?: string;

  /** validator_address is the bech32-encoded address of the validator. */
  validator_address?: string;

  /** entries are the unbonding delegation entries. */
  entries?: { creation_height?: string; completion_time?: string; initial_balance?: string; balance?: string }[];
}

/**
 * UnbondingDelegationEntry defines an unbonding object with relevant metadata.
 */
export interface CosmosStakingV1Beta1UnbondingDelegationEntry {
  /**
   * creation_height is the height which the unbonding took place.
   * @format int64
   */
  creation_height?: string;

  /**
   * completion_time is the unix time for unbonding completion.
   * @format date-time
   */
  completion_time?: string;

  /** initial_balance defines the tokens initially scheduled to receive at completion. */
  initial_balance?: string;

  /** balance defines the tokens to receive at completion. */
  balance?: string;
}

/**
* Validator defines a validator, together with the total amount of the
Validator's bond shares and their exchange rate to coins. Slashing results in
a decrease in the exchange rate, allowing correct calculation of future
undelegations without iterating over delegators. When coins are delegated to
this validator, the validator is credited with a delegation whose number of
bond shares is based on the amount of coins delegated divided by the current
exchange rate. Voting power can be calculated as total bonded shares
multiplied by exchange rate.
*/
export interface CosmosStakingV1Beta1Validator {
  /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
  operator_address?: string;

  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  consensus_pubkey?: { "@type"?: string };

  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed?: boolean;

  /** status is the validator status (bonded/unbonding/unbonded). */
  status?: "BOND_STATUS_UNSPECIFIED" | "BOND_STATUS_UNBONDED" | "BOND_STATUS_UNBONDING" | "BOND_STATUS_BONDED";

  /** tokens define the delegated tokens (incl. self-delegation). */
  tokens?: string;

  /** delegator_shares defines total shares issued to a validator's delegators. */
  delegator_shares?: string;

  /** description defines the description terms for the validator. */
  description?: { moniker?: string; identity?: string; website?: string; security_contact?: string; details?: string };

  /**
   * unbonding_height defines, if unbonding, the height at which this validator has begun unbonding.
   * @format int64
   */
  unbonding_height?: string;

  /**
   * unbonding_time defines, if unbonding, the min time for the validator to complete unbonding.
   * @format date-time
   */
  unbonding_time?: string;

  /** commission defines the commission parameters. */
  commission?: {
    commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
    update_time?: string;
  };

  /** min_self_delegation is the validator's self declared minimum self delegation. */
  min_self_delegation?: string;
}

/**
 * ABCIMessageLog defines a structure containing an indexed tx ABCI message log.
 */
export interface CosmosBaseAbciV1Beta1ABCIMessageLog {
  /** @format int64 */
  msg_index?: number;
  log?: string;

  /**
   * Events contains a slice of Event objects that were emitted during some
   * execution.
   */
  events?: { type?: string; attributes?: { key?: string; value?: string }[] }[];
}

/**
* Attribute defines an attribute wrapper where the key and value are
strings instead of raw bytes.
*/
export interface CosmosBaseAbciV1Beta1Attribute {
  key?: string;
  value?: string;
}

/**
 * GasInfo defines tx execution gas context.
 */
export interface CosmosBaseAbciV1Beta1GasInfo {
  /**
   * GasWanted is the maximum units of work we allow this tx to perform.
   * @format uint64
   */
  gas_wanted?: string;

  /**
   * GasUsed is the amount of gas actually consumed.
   * @format uint64
   */
  gas_used?: string;
}

/**
 * Result is the union of ResponseFormat and ResponseCheckTx.
 */
export interface CosmosBaseAbciV1Beta1Result {
  /**
   * Data is any data returned from message or handler execution. It MUST be
   * length prefixed in order to separate data from multiple message executions.
   * @format byte
   */
  data?: string;

  /** Log contains the log information from message or handler execution. */
  log?: string;

  /**
   * Events contains a slice of Event objects that were emitted during message
   * or handler execution.
   */
  events?: { type?: string; attributes?: { key?: string; value?: string; index?: boolean }[] }[];
}

/**
* StringEvent defines en Event object wrapper where all the attributes
contain key/value pairs that are strings instead of raw bytes.
*/
export interface CosmosBaseAbciV1Beta1StringEvent {
  type?: string;
  attributes?: { key?: string; value?: string }[];
}

/**
* TxResponse defines a structure containing relevant tx data and metadata. The
tags are stringified and the log is JSON decoded.
*/
export interface CosmosBaseAbciV1Beta1TxResponse {
  /**
   * The block height
   * @format int64
   */
  height?: string;

  /** The transaction hash. */
  txhash?: string;

  /** Namespace for the Code */
  codespace?: string;

  /**
   * Response code.
   * @format int64
   */
  code?: number;

  /** Result bytes, if any. */
  data?: string;

  /**
   * The output of the application's logger (raw string). May be
   * non-deterministic.
   */
  raw_log?: string;

  /** The output of the application's logger (typed). May be non-deterministic. */
  logs?: {
    msg_index?: number;
    log?: string;
    events?: { type?: string; attributes?: { key?: string; value?: string }[] }[];
  }[];

  /** Additional information. May be non-deterministic. */
  info?: string;

  /**
   * Amount of gas requested for transaction.
   * @format int64
   */
  gas_wanted?: string;

  /**
   * Amount of gas consumed by transaction.
   * @format int64
   */
  gas_used?: string;

  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  tx?: { "@type"?: string };

  /**
   * Time of the previous block. For heights > 1, it's the weighted median of
   * the timestamps of the valid votes in the block.LastCommit. For height == 1,
   * it's genesis time.
   */
  timestamp?: string;

  /**
   * Events defines all the events emitted by processing a transaction. Note,
   * these events include those emitted by processing all the messages and those
   * emitted from the ante handler. Whereas Logs contains the events, with
   * additional metadata, emitted only by processing the messages.
   *
   * Since: cosmos-sdk 0.42.11, 0.44.5, 0.45
   */
  events?: { type?: string; attributes?: { key?: string; value?: string; index?: boolean }[] }[];
}

/**
* CompactBitArray is an implementation of a space efficient bit array.
This is used to ensure that the encoded data takes up a minimal amount of
space after proto encoding.
This is not thread safe, and is not intended for concurrent usage.
*/
export interface CosmosCryptoMultisigV1Beta1CompactBitArray {
  /** @format int64 */
  extra_bits_stored?: number;

  /** @format byte */
  elems?: string;
}

/**
* SignMode represents a signing mode with its own security guarantees.

 - SIGN_MODE_UNSPECIFIED: SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
rejected
 - SIGN_MODE_DIRECT: SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
verified with raw bytes from Tx
 - SIGN_MODE_TEXTUAL: SIGN_MODE_TEXTUAL is a future signing mode that will verify some
human-readable textual representation on top of the binary representation
from SIGN_MODE_DIRECT
 - SIGN_MODE_LEGACY_AMINO_JSON: SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
Amino JSON and will be removed in the future
*/
export enum CosmosTxSigningV1Beta1SignMode {
  SIGN_MODE_UNSPECIFIED = "SIGN_MODE_UNSPECIFIED",
  SIGN_MODE_DIRECT = "SIGN_MODE_DIRECT",
  SIGN_MODE_TEXTUAL = "SIGN_MODE_TEXTUAL",
  SIGN_MODE_LEGACY_AMINO_JSON = "SIGN_MODE_LEGACY_AMINO_JSON",
}

/**
* AuthInfo describes the fee and signer modes that are used to sign a
transaction.
*/
export interface CosmosTxV1Beta1AuthInfo {
  /**
   * signer_infos defines the signing modes for the required signers. The number
   * and order of elements must match the required signers from TxBody's
   * messages. The first element is the primary signer and the one which pays
   * the fee.
   */
  signer_infos?: CosmosTxV1Beta1SignerInfo[];

  /**
   * Fee is the fee and gas limit for the transaction. The first signer is the
   * primary signer and the one which pays the fee. The fee can be calculated
   * based on the cost of evaluating the body and doing signature verification
   * of the signers. This can be estimated via simulation.
   */
  fee?: { amount?: { denom?: string; amount?: string }[]; gas_limit?: string; payer?: string; granter?: string };
}

/**
* BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method.

 - BROADCAST_MODE_UNSPECIFIED: zero-value for mode ordering
 - BROADCAST_MODE_BLOCK: BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
the tx to be committed in a block.
 - BROADCAST_MODE_SYNC: BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
a CheckTx execution response only.
 - BROADCAST_MODE_ASYNC: BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
immediately.
*/
export enum CosmosTxV1Beta1BroadcastMode {
  BROADCAST_MODE_UNSPECIFIED = "BROADCAST_MODE_UNSPECIFIED",
  BROADCAST_MODE_BLOCK = "BROADCAST_MODE_BLOCK",
  BROADCAST_MODE_SYNC = "BROADCAST_MODE_SYNC",
  BROADCAST_MODE_ASYNC = "BROADCAST_MODE_ASYNC",
}

/**
* BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
RPC method.
*/
export interface CosmosTxV1Beta1BroadcastTxRequest {
  /**
   * tx_bytes is the raw transaction.
   * @format byte
   */
  tx_bytes?: string;

  /**
   * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC method.
   *
   *  - BROADCAST_MODE_UNSPECIFIED: zero-value for mode ordering
   *  - BROADCAST_MODE_BLOCK: BROADCAST_MODE_BLOCK defines a tx broadcasting mode where the client waits for
   * the tx to be committed in a block.
   *  - BROADCAST_MODE_SYNC: BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits for
   * a CheckTx execution response only.
   *  - BROADCAST_MODE_ASYNC: BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client returns
   * immediately.
   */
  mode?: "BROADCAST_MODE_UNSPECIFIED" | "BROADCAST_MODE_BLOCK" | "BROADCAST_MODE_SYNC" | "BROADCAST_MODE_ASYNC";
}

/**
* BroadcastTxResponse is the response type for the
Service.BroadcastTx method.
*/
export interface CosmosTxV1Beta1BroadcastTxResponse {
  /**
   * TxResponse defines a structure containing relevant tx data and metadata. The
   * tags are stringified and the log is JSON decoded.
   */
  tx_response?: {
    height?: string;
    txhash?: string;
    codespace?: string;
    code?: number;
    data?: string;
    raw_log?: string;
    logs?: {
      msg_index?: number;
      log?: string;
      events?: { type?: string; attributes?: { key?: string; value?: string }[] }[];
    }[];
    info?: string;
    gas_wanted?: string;
    gas_used?: string;
    tx?: { "@type"?: string };
    timestamp?: string;
    events?: { type?: string; attributes?: { key?: string; value?: string; index?: boolean }[] }[];
  };
}

/**
* Fee includes the amount of coins paid in fees and the maximum
gas to be used by the transaction. The ratio yields an effective "gasprice",
which must be above some miminum to be accepted into the mempool.
*/
export interface CosmosTxV1Beta1Fee {
  /** amount is the amount of coins to be paid as a fee */
  amount?: { denom?: string; amount?: string }[];

  /**
   * gas_limit is the maximum gas that can be used in transaction processing
   * before an out of gas error occurs
   * @format uint64
   */
  gas_limit?: string;

  /**
   * if unset, the first signer is responsible for paying the fees. If set, the specified account must pay the fees.
   * the payer must be a tx signer (and thus have signed this field in AuthInfo).
   * setting this field does *not* change the ordering of required signers for the transaction.
   */
  payer?: string;

  /**
   * if set, the fee payer (either the first signer or the value of the payer field) requests that a fee grant be used
   * to pay fees instead of the fee payer's own balance. If an appropriate fee grant does not exist or the chain does
   * not support fee grants, this will fail
   */
  granter?: string;
}

/**
 * GetTxResponse is the response type for the Service.GetTx method.
 */
export interface CosmosTxV1Beta1GetTxResponse {
  /** tx is the queried transaction. */
  tx?: CosmosTxV1Beta1Tx;

  /**
   * TxResponse defines a structure containing relevant tx data and metadata. The
   * tags are stringified and the log is JSON decoded.
   */
  tx_response?: {
    height?: string;
    txhash?: string;
    codespace?: string;
    code?: number;
    data?: string;
    raw_log?: string;
    logs?: {
      msg_index?: number;
      log?: string;
      events?: { type?: string; attributes?: { key?: string; value?: string }[] }[];
    }[];
    info?: string;
    gas_wanted?: string;
    gas_used?: string;
    tx?: { "@type"?: string };
    timestamp?: string;
    events?: { type?: string; attributes?: { key?: string; value?: string; index?: boolean }[] }[];
  };
}

/**
* GetTxsEventResponse is the response type for the Service.TxsByEvents
RPC method.
*/
export interface CosmosTxV1Beta1GetTxsEventResponse {
  /** txs is the list of queried transactions. */
  txs?: CosmosTxV1Beta1Tx[];

  /** tx_responses is the list of queried TxResponses. */
  tx_responses?: {
    height?: string;
    txhash?: string;
    codespace?: string;
    code?: number;
    data?: string;
    raw_log?: string;
    logs?: {
      msg_index?: number;
      log?: string;
      events?: { type?: string; attributes?: { key?: string; value?: string }[] }[];
    }[];
    info?: string;
    gas_wanted?: string;
    gas_used?: string;
    tx?: { "@type"?: string };
    timestamp?: string;
    events?: { type?: string; attributes?: { key?: string; value?: string; index?: boolean }[] }[];
  }[];

  /** pagination defines an pagination for the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
 * ModeInfo describes the signing mode of a single or nested multisig signer.
 */
export interface CosmosTxV1Beta1ModeInfo {
  /** single represents a single signer */
  single?: {
    mode?: "SIGN_MODE_UNSPECIFIED" | "SIGN_MODE_DIRECT" | "SIGN_MODE_TEXTUAL" | "SIGN_MODE_LEGACY_AMINO_JSON";
  };

  /** multi represents a nested multisig signer */
  multi?: CosmosTxV1Beta1ModeInfoMulti;
}

export interface CosmosTxV1Beta1ModeInfoMulti {
  /**
   * bitarray specifies which keys within the multisig are signing
   * CompactBitArray is an implementation of a space efficient bit array.
   * This is used to ensure that the encoded data takes up a minimal amount of
   * space after proto encoding.
   * This is not thread safe, and is not intended for concurrent usage.
   */
  bitarray?: { extra_bits_stored?: number; elems?: string };

  /**
   * mode_infos is the corresponding modes of the signers of the multisig
   * which could include nested multisig public keys
   */
  mode_infos?: CosmosTxV1Beta1ModeInfo[];
}

export interface CosmosTxV1Beta1ModeInfoSingle {
  /**
   * mode is the signing mode of the single signer
   * SignMode represents a signing mode with its own security guarantees.
   *
   *  - SIGN_MODE_UNSPECIFIED: SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
   * rejected
   *  - SIGN_MODE_DIRECT: SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
   * verified with raw bytes from Tx
   *  - SIGN_MODE_TEXTUAL: SIGN_MODE_TEXTUAL is a future signing mode that will verify some
   * human-readable textual representation on top of the binary representation
   * from SIGN_MODE_DIRECT
   *  - SIGN_MODE_LEGACY_AMINO_JSON: SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
   * Amino JSON and will be removed in the future
   */
  mode?: "SIGN_MODE_UNSPECIFIED" | "SIGN_MODE_DIRECT" | "SIGN_MODE_TEXTUAL" | "SIGN_MODE_LEGACY_AMINO_JSON";
}

/**
* - ORDER_BY_UNSPECIFIED: ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults to ASC in this case.
 - ORDER_BY_ASC: ORDER_BY_ASC defines ascending order
 - ORDER_BY_DESC: ORDER_BY_DESC defines descending order
*/
export enum CosmosTxV1Beta1OrderBy {
  ORDER_BY_UNSPECIFIED = "ORDER_BY_UNSPECIFIED",
  ORDER_BY_ASC = "ORDER_BY_ASC",
  ORDER_BY_DESC = "ORDER_BY_DESC",
}

/**
* SignerInfo describes the public key and signing mode of a single top-level
signer.
*/
export interface CosmosTxV1Beta1SignerInfo {
  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  public_key?: { "@type"?: string };

  /**
   * mode_info describes the signing mode of the signer and is a nested
   * structure to support nested multisig pubkey's
   * ModeInfo describes the signing mode of a single or nested multisig signer.
   */
  mode_info?: CosmosTxV1Beta1ModeInfo;

  /**
   * sequence is the sequence of the account, which describes the
   * number of committed transactions signed by a given address. It is used to
   * prevent replay attacks.
   * @format uint64
   */
  sequence?: string;
}

/**
* SimulateRequest is the request type for the Service.Simulate
RPC method.
*/
export interface CosmosTxV1Beta1SimulateRequest {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   */
  tx?: CosmosTxV1Beta1Tx;

  /**
   * tx_bytes is the raw transaction.
   *
   * Since: cosmos-sdk 0.43
   * @format byte
   */
  tx_bytes?: string;
}

/**
* SimulateResponse is the response type for the
Service.SimulateRPC method.
*/
export interface CosmosTxV1Beta1SimulateResponse {
  /** gas_info is the information about gas used in the simulation. */
  gas_info?: { gas_wanted?: string; gas_used?: string };

  /** result is the result of the simulation. */
  result?: {
    data?: string;
    log?: string;
    events?: { type?: string; attributes?: { key?: string; value?: string; index?: boolean }[] }[];
  };
}

/**
 * Tx is the standard type used for broadcasting transactions.
 */
export interface CosmosTxV1Beta1Tx {
  /**
   * body is the processable content of the transaction
   * TxBody is the body of a transaction that all signers sign over.
   */
  body?: {
    messages?: { "@type"?: string }[];
    memo?: string;
    timeout_height?: string;
    extension_options?: { "@type"?: string }[];
    non_critical_extension_options?: { "@type"?: string }[];
  };

  /**
   * auth_info is the authorization related content of the transaction,
   * specifically signers, signer modes and fee
   * AuthInfo describes the fee and signer modes that are used to sign a
   * transaction.
   */
  auth_info?: CosmosTxV1Beta1AuthInfo;

  /**
   * signatures is a list of signatures that matches the length and order of
   * AuthInfo's signer_infos to allow connecting signature meta information like
   * public key and signing mode by position.
   */
  signatures?: string[];
}

/**
 * TxBody is the body of a transaction that all signers sign over.
 */
export interface CosmosTxV1Beta1TxBody {
  /**
   * messages is a list of messages to be executed. The required signers of
   * those messages define the number and order of elements in AuthInfo's
   * signer_infos and Tx's signatures. Each required signer address is added to
   * the list only the first time it occurs.
   * By convention, the first required signer (usually from the first message)
   * is referred to as the primary signer and pays the fee for the whole
   * transaction.
   */
  messages?: { "@type"?: string }[];

  /**
   * memo is any arbitrary note/comment to be added to the transaction.
   * WARNING: in clients, any publicly exposed text should not be called memo,
   * but should be called `note` instead (see https://github.com/cosmos/cosmos-sdk/issues/9122).
   */
  memo?: string;

  /**
   * timeout is the block height after which this transaction will not
   * be processed by the chain
   * @format uint64
   */
  timeout_height?: string;

  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, the transaction will be rejected
   */
  extension_options?: { "@type"?: string }[];

  /**
   * extension_options are arbitrary options that can be added by chains
   * when the default options are not sufficient. If any of these are present
   * and can't be handled, they will be ignored
   */
  non_critical_extension_options?: { "@type"?: string }[];
}

/**
* Event allows application developers to attach additional information to
ResponseBeginBlock, ResponseEndBlock, ResponseCheckTx and ResponseDeliverTx.
Later, transactions may be queried using these events.
*/
export interface TendermintAbciEvent {
  type?: string;
  attributes?: { key?: string; value?: string; index?: boolean }[];
}

/**
 * EventAttribute is a single key-value pair, associated with an event.
 */
export interface TendermintAbciEventAttribute {
  /** @format byte */
  key?: string;

  /** @format byte */
  value?: string;
  index?: boolean;
}

/**
* ModuleVersion specifies a module and its consensus version.

Since: cosmos-sdk 0.43
*/
export interface CosmosUpgradeV1Beta1ModuleVersion {
  /** name of the app module */
  name?: string;

  /**
   * consensus version of the app module
   * @format uint64
   */
  version?: string;
}

/**
 * Plan specifies information about a planned upgrade and when it should occur.
 */
export interface CosmosUpgradeV1Beta1Plan {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name?: string;

  /**
   * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
   * has been removed from the SDK.
   * If this field is not empty, an error will be thrown.
   * @format date-time
   */
  time?: string;

  /**
   * The height at which the upgrade must be performed.
   * Only used if Time is not set.
   * @format int64
   */
  height?: string;

  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info?: string;

  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  upgraded_client_state?: { "@type"?: string };
}

/**
* QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
method.
*/
export interface CosmosUpgradeV1Beta1QueryAppliedPlanResponse {
  /**
   * height is the block height at which the plan was applied.
   * @format int64
   */
  height?: string;
}

/**
* QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
method.
*/
export interface CosmosUpgradeV1Beta1QueryCurrentPlanResponse {
  /** plan is the current upgrade plan. */
  plan?: { name?: string; time?: string; height?: string; info?: string; upgraded_client_state?: { "@type"?: string } };
}

/**
* QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
RPC method.

Since: cosmos-sdk 0.43
*/
export interface CosmosUpgradeV1Beta1QueryModuleVersionsResponse {
  /** module_versions is a list of module names with their consensus versions. */
  module_versions?: { name?: string; version?: string }[];
}

/**
* QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
RPC method.
*/
export interface CosmosUpgradeV1Beta1QueryUpgradedConsensusStateResponse {
  /**
   * Since: cosmos-sdk 0.43
   * @format byte
   */
  upgraded_consensus_state?: string;
}

/**
 * MsgCreateVestingAccountResponse defines the Msg/CreateVestingAccount response type.
 */
export type CosmosVestingV1Beta1MsgCreateVestingAccountResponse = object;

/**
* The actual content of the claims is passed in with the transaction making the claim
and then passed through the call stack alongside the attestation while it is processed
the key in which the attestation is stored is keyed on the exact details of the claim
but there is no reason to store those exact details becuause the next message sender
will kindly provide you with them.
*/
export interface GravityV1Attestation {
  observed?: boolean;
  votes?: string[];

  /** @format uint64 */
  height?: string;

  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  claim?: { "@type"?: string };
}

export interface GravityV1BatchFees {
  token?: string;
  total_fees?: string;

  /** @format uint64 */
  tx_count?: string;
}

export interface GravityV1BridgeValidator {
  /** @format uint64 */
  power?: string;
  ethereum_address?: string;
}

export interface GravityV1ERC20Token {
  contract?: string;
  amount?: string;
}

export type GravityV1MsgBatchSendToEthClaimResponse = object;

export type GravityV1MsgCancelSendToEthResponse = object;

export interface GravityV1MsgConfirmBatch {
  /** @format uint64 */
  nonce?: string;
  token_contract?: string;
  eth_signer?: string;
  orchestrator?: string;
  signature?: string;
}

export type GravityV1MsgConfirmBatchResponse = object;

export interface GravityV1MsgConfirmLogicCall {
  invalidation_id?: string;

  /** @format uint64 */
  invalidation_nonce?: string;
  eth_signer?: string;
  orchestrator?: string;
  signature?: string;
}

export type GravityV1MsgConfirmLogicCallResponse = object;

export type GravityV1MsgERC20DeployedClaimResponse = object;

export type GravityV1MsgLogicCallExecutedClaimResponse = object;

export type GravityV1MsgRequestBatchResponse = object;

export type GravityV1MsgSendToCosmosClaimResponse = object;

export type GravityV1MsgSendToEthResponse = object;

export type GravityV1MsgSetOrchestratorAddressResponse = object;

export type GravityV1MsgSubmitBadSignatureEvidenceResponse = object;

/**
* MsgValsetConfirm
this is the message sent by the validators when they wish to submit their
signatures over the validator set at a given block height. A validator must
first call MsgSetEthAddress to set their Ethereum address to be used for
signing. Then someone (anyone) must make a ValsetRequest, the request is
essentially a messaging mechanism to determine which block all validators
should submit signatures over. Finally validators sign the validator set,
powers, and Ethereum addresses of the entire validator set at the height of a
ValsetRequest and submit that signature with this message.

If a sufficient number of validators (66% of voting power) (A) have set
Ethereum addresses and (B) submit ValsetConfirm messages with their
signatures it is then possible for anyone to view these signatures in the
chain store and submit them to Ethereum to update the validator set
-------------
*/
export interface GravityV1MsgValsetConfirm {
  /** @format uint64 */
  nonce?: string;
  orchestrator?: string;
  eth_address?: string;
  signature?: string;
}

export type GravityV1MsgValsetConfirmResponse = object;

export type GravityV1MsgValsetUpdatedClaimResponse = object;

export interface GravityV1OutgoingLogicCall {
  transfers?: { contract?: string; amount?: string }[];
  fees?: { contract?: string; amount?: string }[];
  logic_contract_address?: string;

  /** @format byte */
  payload?: string;

  /** @format uint64 */
  timeout?: string;

  /** @format byte */
  invalidation_id?: string;

  /** @format uint64 */
  invalidation_nonce?: string;

  /** @format uint64 */
  block?: string;
}

export interface GravityV1OutgoingTransferTx {
  /** @format uint64 */
  id?: string;
  sender?: string;
  dest_address?: string;

  /**
   * ERC20Token unique identifier for an Ethereum ERC20 token.
   * CONTRACT:
   * The contract address on ETH of the token, this could be a Cosmos
   * originated token, if so it will be the ERC20 address of the representation
   * (note: developers should look up the token symbol using the address on ETH to display for UI)
   */
  erc20_token?: { contract?: string; amount?: string };

  /**
   * ERC20Token unique identifier for an Ethereum ERC20 token.
   * CONTRACT:
   * The contract address on ETH of the token, this could be a Cosmos
   * originated token, if so it will be the ERC20 address of the representation
   * (note: developers should look up the token symbol using the address on ETH to display for UI)
   */
  erc20_fee?: { contract?: string; amount?: string };
}

export interface GravityV1OutgoingTxBatch {
  /** @format uint64 */
  batch_nonce?: string;

  /** @format uint64 */
  batch_timeout?: string;
  transactions?: {
    id?: string;
    sender?: string;
    dest_address?: string;
    erc20_token?: { contract?: string; amount?: string };
    erc20_fee?: { contract?: string; amount?: string };
  }[];
  token_contract?: string;

  /** @format uint64 */
  block?: string;
}

/**
* unbond_slashing_valsets_window

The unbond slashing valsets window is used to determine how many blocks after starting to unbond
a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
the set, if their leaving creates enough change in the validator set to justify an update they will sign
a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
from the Ethereum bridge and replace them with the new set gracefully.

valset_reward

These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
with this feature a governance proposal can be used instead

bridge_active

This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
the creation of new batches that may be relayed to Ethereum.
This does not prevent the creation of validator sets
or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
set and steal funds on Ethereum without consequence.
The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
Cosmos will not execute on Ethereum.
*/
export interface GravityV1Params {
  gravity_id?: string;
  contract_source_hash?: string;
  bridge_ethereum_address?: string;

  /** @format uint64 */
  bridge_chain_id?: string;

  /** @format uint64 */
  signed_valsets_window?: string;

  /** @format uint64 */
  signed_batches_window?: string;

  /** @format uint64 */
  signed_logic_calls_window?: string;

  /** @format uint64 */
  target_batch_timeout?: string;

  /** @format uint64 */
  average_block_time?: string;

  /** @format uint64 */
  average_ethereum_block_time?: string;

  /** @format byte */
  slash_fraction_valset?: string;

  /** @format byte */
  slash_fraction_batch?: string;

  /** @format byte */
  slash_fraction_logic_call?: string;

  /** @format uint64 */
  unbond_slashing_valsets_window?: string;

  /** @format byte */
  slash_fraction_bad_eth_signature?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  valset_reward?: { denom?: string; amount?: string };
  bridge_active?: boolean;

  /**
   * addresses on this blacklist are forbidden from depositing or withdrawing
   * from Ethereum to the bridge
   */
  ethereum_blacklist?: string[];
}

export interface GravityV1QueryAttestationsResponse {
  attestations?: { observed?: boolean; votes?: string[]; height?: string; claim?: { "@type"?: string } }[];
}

export interface GravityV1QueryBatchConfirmsResponse {
  confirms?: {
    nonce?: string;
    token_contract?: string;
    eth_signer?: string;
    orchestrator?: string;
    signature?: string;
  }[];
}

export interface GravityV1QueryBatchFeeResponse {
  batch_fees?: { token?: string; total_fees?: string; tx_count?: string }[];
}

export interface GravityV1QueryBatchRequestByNonceResponse {
  /** OutgoingTxBatch represents a batch of transactions going from gravity to ETH */
  batch?: {
    batch_nonce?: string;
    batch_timeout?: string;
    transactions?: {
      id?: string;
      sender?: string;
      dest_address?: string;
      erc20_token?: { contract?: string; amount?: string };
      erc20_fee?: { contract?: string; amount?: string };
    }[];
    token_contract?: string;
    block?: string;
  };
}

export interface GravityV1QueryCurrentValsetResponse {
  /**
   * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
   * maintains an ETH key to sign messages, these are used to check signatures on
   * ETH because of the significant gas savings
   */
  valset?: {
    nonce?: string;
    members?: { power?: string; ethereum_address?: string }[];
    height?: string;
    reward_amount?: string;
    reward_token?: string;
  };
}

export interface GravityV1QueryDelegateKeysByEthAddressResponse {
  validator_address?: string;
  orchestrator_address?: string;
}

export interface GravityV1QueryDelegateKeysByOrchestratorAddressResponse {
  validator_address?: string;
  eth_address?: string;
}

export interface GravityV1QueryDelegateKeysByValidatorAddressResponse {
  eth_address?: string;
  orchestrator_address?: string;
}

export interface GravityV1QueryDenomToERC20Response {
  erc20?: string;
  cosmos_originated?: boolean;
}

export interface GravityV1QueryERC20ToDenomResponse {
  denom?: string;
  cosmos_originated?: boolean;
}

export interface GravityV1QueryLastEventNonceByAddrResponse {
  /** @format uint64 */
  event_nonce?: string;
}

export interface GravityV1QueryLastPendingBatchRequestByAddrResponse {
  batch?: {
    batch_nonce?: string;
    batch_timeout?: string;
    transactions?: {
      id?: string;
      sender?: string;
      dest_address?: string;
      erc20_token?: { contract?: string; amount?: string };
      erc20_fee?: { contract?: string; amount?: string };
    }[];
    token_contract?: string;
    block?: string;
  }[];
}

export interface GravityV1QueryLastPendingLogicCallByAddrResponse {
  call?: {
    transfers?: { contract?: string; amount?: string }[];
    fees?: { contract?: string; amount?: string }[];
    logic_contract_address?: string;
    payload?: string;
    timeout?: string;
    invalidation_id?: string;
    invalidation_nonce?: string;
    block?: string;
  }[];
}

export interface GravityV1QueryLastPendingValsetRequestByAddrResponse {
  valsets?: {
    nonce?: string;
    members?: { power?: string; ethereum_address?: string }[];
    height?: string;
    reward_amount?: string;
    reward_token?: string;
  }[];
}

export interface GravityV1QueryLastValsetRequestsResponse {
  valsets?: {
    nonce?: string;
    members?: { power?: string; ethereum_address?: string }[];
    height?: string;
    reward_amount?: string;
    reward_token?: string;
  }[];
}

export interface GravityV1QueryLogicConfirmsResponse {
  confirms?: {
    invalidation_id?: string;
    invalidation_nonce?: string;
    eth_signer?: string;
    orchestrator?: string;
    signature?: string;
  }[];
}

export interface GravityV1QueryOutgoingLogicCallsResponse {
  calls?: {
    transfers?: { contract?: string; amount?: string }[];
    fees?: { contract?: string; amount?: string }[];
    logic_contract_address?: string;
    payload?: string;
    timeout?: string;
    invalidation_id?: string;
    invalidation_nonce?: string;
    block?: string;
  }[];
}

export interface GravityV1QueryOutgoingTxBatchesResponse {
  batches?: {
    batch_nonce?: string;
    batch_timeout?: string;
    transactions?: {
      id?: string;
      sender?: string;
      dest_address?: string;
      erc20_token?: { contract?: string; amount?: string };
      erc20_fee?: { contract?: string; amount?: string };
    }[];
    token_contract?: string;
    block?: string;
  }[];
}

export interface GravityV1QueryParamsResponse {
  /**
   * The slashing fractions for the various gravity related slashing conditions. The first three
   * refer to not submitting a particular message, the third for submitting a different claim
   * for the same Ethereum event
   * unbond_slashing_valsets_window
   *
   * The unbond slashing valsets window is used to determine how many blocks after starting to unbond
   * a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
   * the set, if their leaving creates enough change in the validator set to justify an update they will sign
   * a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
   * from the Ethereum bridge and replace them with the new set gracefully.
   * valset_reward
   * These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
   * the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
   * if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
   * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
   * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
   * with this feature a governance proposal can be used instead
   * bridge_active
   * This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
   * In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
   * the creation of new batches that may be relayed to Ethereum.
   * This does not prevent the creation of validator sets
   * or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
   * set and steal funds on Ethereum without consequence.
   * The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
   * Cosmos will not execute on Ethereum.
   */
  params?: {
    gravity_id?: string;
    contract_source_hash?: string;
    bridge_ethereum_address?: string;
    bridge_chain_id?: string;
    signed_valsets_window?: string;
    signed_batches_window?: string;
    signed_logic_calls_window?: string;
    target_batch_timeout?: string;
    average_block_time?: string;
    average_ethereum_block_time?: string;
    slash_fraction_valset?: string;
    slash_fraction_batch?: string;
    slash_fraction_logic_call?: string;
    unbond_slashing_valsets_window?: string;
    slash_fraction_bad_eth_signature?: string;
    valset_reward?: { denom?: string; amount?: string };
    bridge_active?: boolean;
    ethereum_blacklist?: string[];
  };
}

export interface GravityV1QueryPendingSendToEthResponse {
  transfers_in_batches?: {
    id?: string;
    sender?: string;
    dest_address?: string;
    erc20_token?: { contract?: string; amount?: string };
    erc20_fee?: { contract?: string; amount?: string };
  }[];
  unbatched_transfers?: {
    id?: string;
    sender?: string;
    dest_address?: string;
    erc20_token?: { contract?: string; amount?: string };
    erc20_fee?: { contract?: string; amount?: string };
  }[];
}

export interface GravityV1QueryValsetConfirmResponse {
  /**
   * MsgValsetConfirm
   * this is the message sent by the validators when they wish to submit their
   * signatures over the validator set at a given block height. A validator must
   * first call MsgSetEthAddress to set their Ethereum address to be used for
   * signing. Then someone (anyone) must make a ValsetRequest, the request is
   * essentially a messaging mechanism to determine which block all validators
   * should submit signatures over. Finally validators sign the validator set,
   * powers, and Ethereum addresses of the entire validator set at the height of a
   * ValsetRequest and submit that signature with this message.
   *
   * If a sufficient number of validators (66% of voting power) (A) have set
   * Ethereum addresses and (B) submit ValsetConfirm messages with their
   * signatures it is then possible for anyone to view these signatures in the
   * chain store and submit them to Ethereum to update the validator set
   * -------------
   */
  confirm?: { nonce?: string; orchestrator?: string; eth_address?: string; signature?: string };
}

export interface GravityV1QueryValsetConfirmsByNonceResponse {
  confirms?: { nonce?: string; orchestrator?: string; eth_address?: string; signature?: string }[];
}

export interface GravityV1QueryValsetRequestResponse {
  /**
   * Valset is the Ethereum Bridge Multsig Set, each gravity validator also
   * maintains an ETH key to sign messages, these are used to check signatures on
   * ETH because of the significant gas savings
   */
  valset?: {
    nonce?: string;
    members?: { power?: string; ethereum_address?: string }[];
    height?: string;
    reward_amount?: string;
    reward_token?: string;
  };
}

export interface GravityV1Valset {
  /** @format uint64 */
  nonce?: string;
  members?: { power?: string; ethereum_address?: string }[];

  /** @format uint64 */
  height?: string;
  reward_amount?: string;

  /** the reward token in it's Ethereum hex address representation */
  reward_token?: string;
}

/**
* DenomTrace contains the base denomination for ICS20 fungible tokens and the
source tracing information path.
*/
export interface IbcApplicationsTransferV1DenomTrace {
  /**
   * path defines the chain of port/channel identifiers used for tracing the
   * source of the fungible token.
   */
  path?: string;

  /** base denomination of the relayed fungible token. */
  base_denom?: string;
}

/**
 * MsgTransferResponse defines the Msg/Transfer response type.
 */
export type IbcApplicationsTransferV1MsgTransferResponse = object;

/**
* Params defines the set of IBC transfer parameters.
NOTE: To prevent a single token from being transferred, set the
TransfersEnabled parameter to true and then set the bank module's SendEnabled
parameter for the denomination to false.
*/
export interface IbcApplicationsTransferV1Params {
  /**
   * send_enabled enables or disables all cross-chain token transfers from this
   * chain.
   */
  send_enabled?: boolean;

  /**
   * receive_enabled enables or disables all cross-chain token transfers to this
   * chain.
   */
  receive_enabled?: boolean;
}

/**
* QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
method.
*/
export interface IbcApplicationsTransferV1QueryDenomTraceResponse {
  /**
   * DenomTrace contains the base denomination for ICS20 fungible tokens and the
   * source tracing information path.
   */
  denom_trace?: { path?: string; base_denom?: string };
}

/**
* QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
method.
*/
export interface IbcApplicationsTransferV1QueryDenomTracesResponse {
  /** denom_traces returns all denominations trace information. */
  denom_traces?: { path?: string; base_denom?: string }[];

  /** pagination defines the pagination in the response. */
  pagination?: { next_key?: string; total?: string };
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 */
export interface IbcApplicationsTransferV1QueryParamsResponse {
  /** params defines the parameters of the module. */
  params?: { send_enabled?: boolean; receive_enabled?: boolean };
}

/**
* Normally the RevisionHeight is incremented at each height while keeping
RevisionNumber the same. However some consensus algorithms may choose to
reset the height in certain conditions e.g. hard forks, state-machine
breaking changes In these cases, the RevisionNumber is incremented so that
height continues to be monitonically increasing even as the RevisionHeight
gets reset
*/
export interface IbcCoreClientV1Height {
  /**
   * the revision that the client is currently on
   * @format uint64
   */
  revision_number?: string;

  /**
   * the height within the given revision
   * @format uint64
   */
  revision_height?: string;
}

/**
* Channel defines pipeline for exactly-once packet delivery between specific
modules on separate blockchains, which has at least one end capable of
sending packets and one end capable of receiving packets.
*/
export interface IbcCoreChannelV1Channel {
  /**
   * current state of the channel end
   * State defines if a channel is in one of the following states:
   * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
   *
   *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
   *  - STATE_INIT: A channel has just started the opening handshake.
   *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
   *  - STATE_OPEN: A channel has completed the handshake. Open channels are
   * ready to send and receive packets.
   *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
   * packets.
   */
  state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN" | "STATE_CLOSED";

  /**
   * whether the channel is ordered or unordered
   * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
   *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
   * which they were sent.
   *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
   */
  ordering?: "ORDER_NONE_UNSPECIFIED" | "ORDER_UNORDERED" | "ORDER_ORDERED";

  /** counterparty channel end */
  counterparty?: { port_id?: string; channel_id?: string };

  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connection_hops?: string[];

  /** opaque channel version, which is agreed upon during the handshake */
  version?: string;
}

export interface IbcCoreChannelV1Counterparty {
  /** port on the counterparty chain which owns the other end of the channel. */
  port_id?: string;

  /** channel end on the counterparty chain */
  channel_id?: string;
}

/**
* IdentifiedChannel defines a channel with additional port and channel
identifier fields.
*/
export interface IbcCoreChannelV1IdentifiedChannel {
  /**
   * current state of the channel end
   * State defines if a channel is in one of the following states:
   * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
   *
   *  - STATE_UNINITIALIZED_UNSPECIFIED: Default State
   *  - STATE_INIT: A channel has just started the opening handshake.
   *  - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
   *  - STATE_OPEN: A channel has completed the handshake. Open channels are
   * ready to send and receive packets.
   *  - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
   * packets.
   */
  state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN" | "STATE_CLOSED";

  /**
   * whether the channel is ordered or unordered
   * - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
   *  - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
   * which they were sent.
   *  - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
   */
  ordering?: "ORDER_NONE_UNSPECIFIED" | "ORDER_UNORDERED" | "ORDER_ORDERED";

  /** counterparty channel end */
  counterparty?: { port_id?: string; channel_id?: string };

  /**
   * list of connection identifiers, in order, along which packets sent on
   * this channel will travel
   */
  connection_hops?: string[];

  /** opaque channel version, which is agreed upon during the handshake */
  version?: string;

  /** port identifier */
  port_id?: string;

  /** channel identifier */
  channel_id?: string;
}

/**
 * MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.
 */
export type IbcCoreChannelV1MsgAcknowledgementResponse = object;

/**
* MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
type.
*/
export type IbcCoreChannelV1MsgChannelCloseConfirmResponse = object;

/**
 * MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type.
 */
export type IbcCoreChannelV1MsgChannelCloseInitResponse = object;

/**
 * MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type.
 */
export type IbcCoreChannelV1MsgChannelOpenAckResponse = object;

/**
* MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
type.
*/
export type IbcCoreChannelV1MsgChannelOpenConfirmResponse = object;

/**
 * MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type.
 */
export type IbcCoreChannelV1MsgChannelOpenInitResponse = object;

/**
 * MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type.
 */
export type IbcCoreChannelV1MsgChannelOpenTryResponse = object;

/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 */
export type IbcCoreChannelV1MsgRecvPacketResponse = object;

/**
 * MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type.
 */
export type IbcCoreChannelV1MsgTimeoutOnCloseResponse = object;

/**
 * MsgTimeoutResponse defines the Msg/Timeout response type.
 */
export type IbcCoreChannelV1MsgTimeoutResponse = object;

/**
* - ORDER_NONE_UNSPECIFIED: zero-value for channel ordering
 - ORDER_UNORDERED: packets can be delivered in any order, which may differ from the order in
which they were sent.
 - ORDER_ORDERED: packets are delivered exactly in the order which they were sent
*/
export enum IbcCoreChannelV1Order {
  ORDER_NONE_UNSPECIFIED = "ORDER_NONE_UNSPECIFIED",
  ORDER_UNORDERED = "ORDER_UNORDERED",
  ORDER_ORDERED = "ORDER_ORDERED",
}

export interface IbcCoreChannelV1Packet {
  /**
   * number corresponds to the order of sends and receives, where a Packet
   * with an earlier sequence number must be sent and received before a Packet
   * with a later sequence number.
   * @format uint64
   */
  sequence?: string;

  /** identifies the port on the sending chain. */
  source_port?: string;

  /** identifies the channel end on the sending chain. */
  source_channel?: string;

  /** identifies the port on the receiving chain. */
  destination_port?: string;

  /** identifies the channel end on the receiving chain. */
  destination_channel?: string;

  /**
   * actual opaque bytes transferred directly to the application module
   * @format byte
   */
  data?: string;

  /**
   * block height after which the packet times out
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  timeout_height?: { revision_number?: string; revision_height?: string };

  /**
   * block timestamp (in nanoseconds) after which the packet times out
   * @format uint64
   */
  timeout_timestamp?: string;
}

/**
* PacketState defines the generic type necessary to retrieve and store
packet commitments, acknowledgements, and receipts.
Caller is responsible for knowing the context necessary to interpret this
state as a commitment, acknowledgement, or a receipt.
*/
export interface IbcCoreChannelV1PacketState {
  /** channel port identifier. */
  port_id?: string;

  /** channel unique identifier. */
  channel_id?: string;

  /**
   * packet sequence.
   * @format uint64
   */
  sequence?: string;

  /**
   * embedded data that represents packet state.
   * @format byte
   */
  data?: string;
}

export interface IbcCoreChannelV1QueryChannelClientStateResponse {
  /**
   * client state associated with the channel
   * IdentifiedClientState defines a client state with an additional client
   * identifier field.
   */
  identified_client_state?: { client_id?: string; client_state?: { "@type"?: string } };

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreChannelV1QueryChannelConsensusStateResponse {
  /**
   * consensus state associated with the channel
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  consensus_state?: { "@type"?: string };

  /** client ID associated with the consensus state */
  client_id?: string;

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

/**
* QueryChannelResponse is the response type for the Query/Channel RPC method.
Besides the Channel end, it includes a proof and the height from which the
proof was retrieved.
*/
export interface IbcCoreChannelV1QueryChannelResponse {
  /**
   * channel associated with the request identifiers
   * Channel defines pipeline for exactly-once packet delivery between specific
   * modules on separate blockchains, which has at least one end capable of
   * sending packets and one end capable of receiving packets.
   */
  channel?: {
    state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN" | "STATE_CLOSED";
    ordering?: "ORDER_NONE_UNSPECIFIED" | "ORDER_UNORDERED" | "ORDER_ORDERED";
    counterparty?: { port_id?: string; channel_id?: string };
    connection_hops?: string[];
    version?: string;
  };

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

/**
 * QueryChannelsResponse is the response type for the Query/Channels RPC method.
 */
export interface IbcCoreChannelV1QueryChannelsResponse {
  /** list of stored channels of the chain. */
  channels?: {
    state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN" | "STATE_CLOSED";
    ordering?: "ORDER_NONE_UNSPECIFIED" | "ORDER_UNORDERED" | "ORDER_ORDERED";
    counterparty?: { port_id?: string; channel_id?: string };
    connection_hops?: string[];
    version?: string;
    port_id?: string;
    channel_id?: string;
  }[];

  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: { next_key?: string; total?: string };

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreChannelV1QueryConnectionChannelsResponse {
  /** list of channels associated with a connection. */
  channels?: {
    state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN" | "STATE_CLOSED";
    ordering?: "ORDER_NONE_UNSPECIFIED" | "ORDER_UNORDERED" | "ORDER_ORDERED";
    counterparty?: { port_id?: string; channel_id?: string };
    connection_hops?: string[];
    version?: string;
    port_id?: string;
    channel_id?: string;
  }[];

  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: { next_key?: string; total?: string };

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreChannelV1QueryNextSequenceReceiveResponse {
  /**
   * next sequence receive number
   * @format uint64
   */
  next_sequence_receive?: string;

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreChannelV1QueryPacketAcknowledgementResponse {
  /**
   * packet associated with the request fields
   * @format byte
   */
  acknowledgement?: string;

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreChannelV1QueryPacketAcknowledgementsResponse {
  acknowledgements?: { port_id?: string; channel_id?: string; sequence?: string; data?: string }[];

  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: { next_key?: string; total?: string };

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreChannelV1QueryPacketCommitmentResponse {
  /**
   * packet associated with the request fields
   * @format byte
   */
  commitment?: string;

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreChannelV1QueryPacketCommitmentsResponse {
  commitments?: { port_id?: string; channel_id?: string; sequence?: string; data?: string }[];

  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: { next_key?: string; total?: string };

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreChannelV1QueryPacketReceiptResponse {
  /** success flag for if receipt exists */
  received?: boolean;

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreChannelV1QueryUnreceivedAcksResponse {
  /** list of unreceived acknowledgement sequences */
  sequences?: string[];

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreChannelV1QueryUnreceivedPacketsResponse {
  /** list of unreceived packet sequences */
  sequences?: string[];

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: { revision_number?: string; revision_height?: string };
}

/**
* State defines if a channel is in one of the following states:
CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.

 - STATE_UNINITIALIZED_UNSPECIFIED: Default State
 - STATE_INIT: A channel has just started the opening handshake.
 - STATE_TRYOPEN: A channel has acknowledged the handshake step on the counterparty chain.
 - STATE_OPEN: A channel has completed the handshake. Open channels are
ready to send and receive packets.
 - STATE_CLOSED: A channel has been closed and can no longer be used to send or receive
packets.
*/
export enum IbcCoreChannelV1State {
  STATE_UNINITIALIZED_UNSPECIFIED = "STATE_UNINITIALIZED_UNSPECIFIED",
  STATE_INIT = "STATE_INIT",
  STATE_TRYOPEN = "STATE_TRYOPEN",
  STATE_OPEN = "STATE_OPEN",
  STATE_CLOSED = "STATE_CLOSED",
}

/**
* IdentifiedClientState defines a client state with an additional client
identifier field.
*/
export interface IbcCoreClientV1IdentifiedClientState {
  /** client identifier */
  client_id?: string;

  /**
   * client state
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  client_state?: { "@type"?: string };
}

/**
* ConsensusStateWithHeight defines a consensus state with an additional height
field.
*/
export interface IbcCoreClientV1ConsensusStateWithHeight {
  /**
   * consensus state height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: { revision_number?: string; revision_height?: string };

  /**
   * consensus state
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  consensus_state?: { "@type"?: string };
}

/**
 * MsgCreateClientResponse defines the Msg/CreateClient response type.
 */
export type IbcCoreClientV1MsgCreateClientResponse = object;

/**
* MsgSubmitMisbehaviourResponse defines the Msg/SubmitMisbehaviour response
type.
*/
export type IbcCoreClientV1MsgSubmitMisbehaviourResponse = object;

/**
 * MsgUpdateClientResponse defines the Msg/UpdateClient response type.
 */
export type IbcCoreClientV1MsgUpdateClientResponse = object;

/**
 * MsgUpgradeClientResponse defines the Msg/UpgradeClient response type.
 */
export type IbcCoreClientV1MsgUpgradeClientResponse = object;

/**
 * Params defines the set of IBC light client parameters.
 */
export interface IbcCoreClientV1Params {
  /** allowed_clients defines the list of allowed client state types. */
  allowed_clients?: string[];
}

/**
* QueryClientParamsResponse is the response type for the Query/ClientParams RPC
method.
*/
export interface IbcCoreClientV1QueryClientParamsResponse {
  /** params defines the parameters of the module. */
  params?: { allowed_clients?: string[] };
}

/**
* QueryClientStateResponse is the response type for the Query/ClientState RPC
method. Besides the client state, it includes a proof and the height from
which the proof was retrieved.
*/
export interface IbcCoreClientV1QueryClientStateResponse {
  /**
   * client state associated with the request identifier
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  client_state?: { "@type"?: string };

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

/**
* QueryClientStatesResponse is the response type for the Query/ClientStates RPC
method.
*/
export interface IbcCoreClientV1QueryClientStatesResponse {
  /** list of stored ClientStates of the chain. */
  client_states?: { client_id?: string; client_state?: { "@type"?: string } }[];

  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: { next_key?: string; total?: string };
}

/**
* QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
method. It returns the current status of the IBC client.
*/
export interface IbcCoreClientV1QueryClientStatusResponse {
  status?: string;
}

export interface IbcCoreClientV1QueryConsensusStateResponse {
  /**
   * consensus state associated with the client identifier at the given height
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  consensus_state?: { "@type"?: string };

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreClientV1QueryConsensusStatesResponse {
  /** consensus states associated with the identifier */
  consensus_states?: {
    height?: { revision_number?: string; revision_height?: string };
    consensus_state?: { "@type"?: string };
  }[];

  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: { next_key?: string; total?: string };
}

/**
* QueryUpgradedClientStateResponse is the response type for the
Query/UpgradedClientState RPC method.
*/
export interface IbcCoreClientV1QueryUpgradedClientStateResponse {
  /**
   * client state associated with the request identifier
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  upgraded_client_state?: { "@type"?: string };
}

/**
* QueryUpgradedConsensusStateResponse is the response type for the
Query/UpgradedConsensusState RPC method.
*/
export interface IbcCoreClientV1QueryUpgradedConsensusStateResponse {
  /**
   * Consensus state associated with the request identifier
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  upgraded_consensus_state?: { "@type"?: string };
}

export interface IbcCoreCommitmentV1MerklePrefix {
  /** @format byte */
  key_prefix?: string;
}

/**
* ConnectionEnd defines a stateful object on a chain connected to another
separate one.
NOTE: there must only be 2 defined ConnectionEnds to establish
a connection between two chains.
*/
export interface IbcCoreConnectionV1ConnectionEnd {
  /** client associated with this connection. */
  client_id?: string;

  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection.
   */
  versions?: { identifier?: string; features?: string[] }[];

  /** current state of the connection end. */
  state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN";

  /** counterparty chain associated with this connection. */
  counterparty?: { client_id?: string; connection_id?: string; prefix?: { key_prefix?: string } };

  /**
   * delay period that must pass before a consensus state can be used for
   * packet-verification NOTE: delay period logic is only implemented by some
   * clients.
   * @format uint64
   */
  delay_period?: string;
}

/**
 * Counterparty defines the counterparty chain associated with a connection end.
 */
export interface IbcCoreConnectionV1Counterparty {
  /**
   * identifies the client on the counterparty chain associated with a given
   * connection.
   */
  client_id?: string;

  /**
   * identifies the connection end on the counterparty chain associated with a
   * given connection.
   */
  connection_id?: string;

  /**
   * MerklePrefix is merkle path prefixed to the key.
   * The constructed key from the Path and the key will be append(Path.KeyPath,
   * append(Path.KeyPrefix, key...))
   * commitment merkle prefix of the counterparty chain.
   */
  prefix?: { key_prefix?: string };
}

/**
* IdentifiedConnection defines a connection with additional connection
identifier field.
*/
export interface IbcCoreConnectionV1IdentifiedConnection {
  /** connection identifier. */
  id?: string;

  /** client associated with this connection. */
  client_id?: string;

  /**
   * IBC version which can be utilised to determine encodings or protocols for
   * channels or packets utilising this connection
   */
  versions?: { identifier?: string; features?: string[] }[];

  /** current state of the connection end. */
  state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN";

  /** counterparty chain associated with this connection. */
  counterparty?: { client_id?: string; connection_id?: string; prefix?: { key_prefix?: string } };

  /**
   * delay period associated with this connection.
   * @format uint64
   */
  delay_period?: string;
}

/**
 * MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type.
 */
export type IbcCoreConnectionV1MsgConnectionOpenAckResponse = object;

/**
* MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
response type.
*/
export type IbcCoreConnectionV1MsgConnectionOpenConfirmResponse = object;

/**
* MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
type.
*/
export type IbcCoreConnectionV1MsgConnectionOpenInitResponse = object;

/**
 * MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type.
 */
export type IbcCoreConnectionV1MsgConnectionOpenTryResponse = object;

export interface IbcCoreConnectionV1QueryClientConnectionsResponse {
  /** slice of all the connection paths associated with a client. */
  connection_paths?: string[];

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was generated
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreConnectionV1QueryConnectionClientStateResponse {
  /**
   * client state associated with the channel
   * IdentifiedClientState defines a client state with an additional client
   * identifier field.
   */
  identified_client_state?: { client_id?: string; client_state?: { "@type"?: string } };

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

export interface IbcCoreConnectionV1QueryConnectionConsensusStateResponse {
  /**
   * consensus state associated with the channel
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  consensus_state?: { "@type"?: string };

  /** client ID associated with the consensus state */
  client_id?: string;

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

/**
* QueryConnectionResponse is the response type for the Query/Connection RPC
method. Besides the connection end, it includes a proof and the height from
which the proof was retrieved.
*/
export interface IbcCoreConnectionV1QueryConnectionResponse {
  /**
   * connection associated with the request identifier
   * ConnectionEnd defines a stateful object on a chain connected to another
   * separate one.
   * NOTE: there must only be 2 defined ConnectionEnds to establish
   * a connection between two chains.
   */
  connection?: {
    client_id?: string;
    versions?: { identifier?: string; features?: string[] }[];
    state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN";
    counterparty?: { client_id?: string; connection_id?: string; prefix?: { key_prefix?: string } };
    delay_period?: string;
  };

  /**
   * merkle proof of existence
   * @format byte
   */
  proof?: string;

  /**
   * height at which the proof was retrieved
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  proof_height?: { revision_number?: string; revision_height?: string };
}

/**
* QueryConnectionsResponse is the response type for the Query/Connections RPC
method.
*/
export interface IbcCoreConnectionV1QueryConnectionsResponse {
  /** list of stored connections of the chain. */
  connections?: {
    id?: string;
    client_id?: string;
    versions?: { identifier?: string; features?: string[] }[];
    state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN";
    counterparty?: { client_id?: string; connection_id?: string; prefix?: { key_prefix?: string } };
    delay_period?: string;
  }[];

  /**
   * pagination response
   * PageResponse is to be embedded in gRPC response messages where the
   * corresponding request message has used PageRequest.
   *
   *  message SomeResponse {
   *          repeated Bar results = 1;
   *          PageResponse page = 2;
   *  }
   */
  pagination?: { next_key?: string; total?: string };

  /**
   * query block height
   * Normally the RevisionHeight is incremented at each height while keeping
   * RevisionNumber the same. However some consensus algorithms may choose to
   * reset the height in certain conditions e.g. hard forks, state-machine
   * breaking changes In these cases, the RevisionNumber is incremented so that
   * height continues to be monitonically increasing even as the RevisionHeight
   * gets reset
   */
  height?: { revision_number?: string; revision_height?: string };
}

/**
* State defines if a connection is in one of the following states:
INIT, TRYOPEN, OPEN or UNINITIALIZED.

 - STATE_UNINITIALIZED_UNSPECIFIED: Default State
 - STATE_INIT: A connection end has just started the opening handshake.
 - STATE_TRYOPEN: A connection end has acknowledged the handshake step on the counterparty
chain.
 - STATE_OPEN: A connection end has completed the handshake.
*/
export enum IbcCoreConnectionV1State {
  STATE_UNINITIALIZED_UNSPECIFIED = "STATE_UNINITIALIZED_UNSPECIFIED",
  STATE_INIT = "STATE_INIT",
  STATE_TRYOPEN = "STATE_TRYOPEN",
  STATE_OPEN = "STATE_OPEN",
}

/**
* Version defines the versioning scheme used to negotiate the IBC verison in
the connection handshake.
*/
export interface IbcCoreConnectionV1Version {
  /** unique version identifier */
  identifier?: string;

  /** list of features compatible with the specified identifier */
  features?: string[];
}

/**
 * QueryAppVersionResponse is the response type for the Query/AppVersion RPC method.
 */
export interface IbcCorePortV1QueryAppVersionResponse {
  /** port id associated with the request identifiers */
  port_id?: string;

  /** supported app version */
  version?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title HTTP API Console
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  cosmos = {
    /**
     * @description Since: cosmos-sdk 0.43
     *
     * @tags Query
     * @name CosmosAuthV1Beta1Accounts
     * @summary Accounts returns all the existing accounts
     * @request GET:/cosmos/auth/v1beta1/accounts
     */
    cosmosAuthV1Beta1Accounts: (
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { accounts?: { "@type"?: string }[]; pagination?: { next_key?: string; total?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/auth/v1beta1/accounts`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosAuthV1Beta1Account
     * @summary Account returns account details based on address.
     * @request GET:/cosmos/auth/v1beta1/accounts/{address}
     */
    cosmosAuthV1Beta1Account: (address: string, params: RequestParams = {}) =>
      this.request<
        { account?: { "@type"?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/auth/v1beta1/accounts/${address}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosAuthV1Beta1Params
     * @summary Params queries all parameters.
     * @request GET:/cosmos/auth/v1beta1/params
     */
    cosmosAuthV1Beta1Params: (params: RequestParams = {}) =>
      this.request<
        {
          params?: {
            max_memo_characters?: string;
            tx_sig_limit?: string;
            tx_size_cost_per_byte?: string;
            sig_verify_cost_ed25519?: string;
            sig_verify_cost_secp256k1?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/auth/v1beta1/params`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosBankV1Beta1AllBalances
     * @summary AllBalances queries the balance of all coins for a single account.
     * @request GET:/cosmos/bank/v1beta1/balances/{address}
     */
    cosmosBankV1Beta1AllBalances: (
      address: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { balances?: { denom?: string; amount?: string }[]; pagination?: { next_key?: string; total?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/bank/v1beta1/balances/${address}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosBankV1Beta1Balance
     * @summary Balance queries the balance of a single coin for a single account.
     * @request GET:/cosmos/bank/v1beta1/balances/{address}/by_denom
     */
    cosmosBankV1Beta1Balance: (address: string, query?: { denom?: string }, params: RequestParams = {}) =>
      this.request<
        { balance?: { denom?: string; amount?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/bank/v1beta1/balances/${address}/by_denom`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosBankV1Beta1DenomsMetadata
     * @summary DenomsMetadata queries the client metadata for all registered coin denominations.
     * @request GET:/cosmos/bank/v1beta1/denoms_metadata
     */
    cosmosBankV1Beta1DenomsMetadata: (
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          metadatas?: {
            description?: string;
            denom_units?: { denom?: string; exponent?: number; aliases?: string[] }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/bank/v1beta1/denoms_metadata`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosBankV1Beta1DenomMetadata
     * @summary DenomsMetadata queries the client metadata of a given coin denomination.
     * @request GET:/cosmos/bank/v1beta1/denoms_metadata/{denom}
     */
    cosmosBankV1Beta1DenomMetadata: (denom: string, params: RequestParams = {}) =>
      this.request<
        {
          metadata?: {
            description?: string;
            denom_units?: { denom?: string; exponent?: number; aliases?: string[] }[];
            base?: string;
            display?: string;
            name?: string;
            symbol?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/bank/v1beta1/denoms_metadata/${denom}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosBankV1Beta1Params
     * @summary Params queries the parameters of x/bank module.
     * @request GET:/cosmos/bank/v1beta1/params
     */
    cosmosBankV1Beta1Params: (params: RequestParams = {}) =>
      this.request<
        { params?: { send_enabled?: { denom?: string; enabled?: boolean }[]; default_send_enabled?: boolean } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/bank/v1beta1/params`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosBankV1Beta1TotalSupply
     * @summary TotalSupply queries the total supply of all coins.
     * @request GET:/cosmos/bank/v1beta1/supply
     */
    cosmosBankV1Beta1TotalSupply: (
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { supply?: { denom?: string; amount?: string }[]; pagination?: { next_key?: string; total?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/bank/v1beta1/supply`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosBankV1Beta1SupplyOf
     * @summary SupplyOf queries the supply of a single coin.
     * @request GET:/cosmos/bank/v1beta1/supply/{denom}
     */
    cosmosBankV1Beta1SupplyOf: (denom: string, params: RequestParams = {}) =>
      this.request<
        { amount?: { denom?: string; amount?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/bank/v1beta1/supply/${denom}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service
     * @name CosmosBaseTendermintV1Beta1GetLatestBlock
     * @summary GetLatestBlock returns the latest block.
     * @request GET:/cosmos/base/tendermint/v1beta1/blocks/latest
     */
    cosmosBaseTendermintV1Beta1GetLatestBlock: (params: RequestParams = {}) =>
      this.request<
        {
          block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
          block?: {
            header?: {
              version?: { block?: string; app?: string };
              chain_id?: string;
              height?: string;
              time?: string;
              last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
              last_commit_hash?: string;
              data_hash?: string;
              validators_hash?: string;
              next_validators_hash?: string;
              consensus_hash?: string;
              app_hash?: string;
              last_results_hash?: string;
              evidence_hash?: string;
              proposer_address?: string;
            };
            data?: { txs?: string[] };
            evidence?: {
              evidence?: {
                duplicate_vote_evidence?: {
                  vote_a?: {
                    type?:
                      | "SIGNED_MSG_TYPE_UNKNOWN"
                      | "SIGNED_MSG_TYPE_PREVOTE"
                      | "SIGNED_MSG_TYPE_PRECOMMIT"
                      | "SIGNED_MSG_TYPE_PROPOSAL";
                    height?: string;
                    round?: number;
                    block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                    timestamp?: string;
                    validator_address?: string;
                    validator_index?: number;
                    signature?: string;
                  };
                  vote_b?: {
                    type?:
                      | "SIGNED_MSG_TYPE_UNKNOWN"
                      | "SIGNED_MSG_TYPE_PREVOTE"
                      | "SIGNED_MSG_TYPE_PRECOMMIT"
                      | "SIGNED_MSG_TYPE_PROPOSAL";
                    height?: string;
                    round?: number;
                    block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                    timestamp?: string;
                    validator_address?: string;
                    validator_index?: number;
                    signature?: string;
                  };
                  total_voting_power?: string;
                  validator_power?: string;
                  timestamp?: string;
                };
                light_client_attack_evidence?: {
                  conflicting_block?: {
                    signed_header?: {
                      header?: {
                        version?: { block?: string; app?: string };
                        chain_id?: string;
                        height?: string;
                        time?: string;
                        last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                        last_commit_hash?: string;
                        data_hash?: string;
                        validators_hash?: string;
                        next_validators_hash?: string;
                        consensus_hash?: string;
                        app_hash?: string;
                        last_results_hash?: string;
                        evidence_hash?: string;
                        proposer_address?: string;
                      };
                      commit?: {
                        height?: string;
                        round?: number;
                        block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                        signatures?: {
                          block_id_flag?:
                            | "BLOCK_ID_FLAG_UNKNOWN"
                            | "BLOCK_ID_FLAG_ABSENT"
                            | "BLOCK_ID_FLAG_COMMIT"
                            | "BLOCK_ID_FLAG_NIL";
                          validator_address?: string;
                          timestamp?: string;
                          signature?: string;
                        }[];
                      };
                    };
                    validator_set?: {
                      validators?: {
                        address?: string;
                        pub_key?: { ed25519?: string; secp256k1?: string };
                        voting_power?: string;
                        proposer_priority?: string;
                      }[];
                      proposer?: {
                        address?: string;
                        pub_key?: { ed25519?: string; secp256k1?: string };
                        voting_power?: string;
                        proposer_priority?: string;
                      };
                      total_voting_power?: string;
                    };
                  };
                  common_height?: string;
                  byzantine_validators?: {
                    address?: string;
                    pub_key?: { ed25519?: string; secp256k1?: string };
                    voting_power?: string;
                    proposer_priority?: string;
                  }[];
                  total_voting_power?: string;
                  timestamp?: string;
                };
              }[];
            };
            last_commit?: {
              height?: string;
              round?: number;
              block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
              signatures?: {
                block_id_flag?:
                  | "BLOCK_ID_FLAG_UNKNOWN"
                  | "BLOCK_ID_FLAG_ABSENT"
                  | "BLOCK_ID_FLAG_COMMIT"
                  | "BLOCK_ID_FLAG_NIL";
                validator_address?: string;
                timestamp?: string;
                signature?: string;
              }[];
            };
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/base/tendermint/v1beta1/blocks/latest`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service
     * @name CosmosBaseTendermintV1Beta1GetBlockByHeight
     * @summary GetBlockByHeight queries block for given height.
     * @request GET:/cosmos/base/tendermint/v1beta1/blocks/{height}
     */
    cosmosBaseTendermintV1Beta1GetBlockByHeight: (height: string, params: RequestParams = {}) =>
      this.request<
        {
          block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
          block?: {
            header?: {
              version?: { block?: string; app?: string };
              chain_id?: string;
              height?: string;
              time?: string;
              last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
              last_commit_hash?: string;
              data_hash?: string;
              validators_hash?: string;
              next_validators_hash?: string;
              consensus_hash?: string;
              app_hash?: string;
              last_results_hash?: string;
              evidence_hash?: string;
              proposer_address?: string;
            };
            data?: { txs?: string[] };
            evidence?: {
              evidence?: {
                duplicate_vote_evidence?: {
                  vote_a?: {
                    type?:
                      | "SIGNED_MSG_TYPE_UNKNOWN"
                      | "SIGNED_MSG_TYPE_PREVOTE"
                      | "SIGNED_MSG_TYPE_PRECOMMIT"
                      | "SIGNED_MSG_TYPE_PROPOSAL";
                    height?: string;
                    round?: number;
                    block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                    timestamp?: string;
                    validator_address?: string;
                    validator_index?: number;
                    signature?: string;
                  };
                  vote_b?: {
                    type?:
                      | "SIGNED_MSG_TYPE_UNKNOWN"
                      | "SIGNED_MSG_TYPE_PREVOTE"
                      | "SIGNED_MSG_TYPE_PRECOMMIT"
                      | "SIGNED_MSG_TYPE_PROPOSAL";
                    height?: string;
                    round?: number;
                    block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                    timestamp?: string;
                    validator_address?: string;
                    validator_index?: number;
                    signature?: string;
                  };
                  total_voting_power?: string;
                  validator_power?: string;
                  timestamp?: string;
                };
                light_client_attack_evidence?: {
                  conflicting_block?: {
                    signed_header?: {
                      header?: {
                        version?: { block?: string; app?: string };
                        chain_id?: string;
                        height?: string;
                        time?: string;
                        last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                        last_commit_hash?: string;
                        data_hash?: string;
                        validators_hash?: string;
                        next_validators_hash?: string;
                        consensus_hash?: string;
                        app_hash?: string;
                        last_results_hash?: string;
                        evidence_hash?: string;
                        proposer_address?: string;
                      };
                      commit?: {
                        height?: string;
                        round?: number;
                        block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
                        signatures?: {
                          block_id_flag?:
                            | "BLOCK_ID_FLAG_UNKNOWN"
                            | "BLOCK_ID_FLAG_ABSENT"
                            | "BLOCK_ID_FLAG_COMMIT"
                            | "BLOCK_ID_FLAG_NIL";
                          validator_address?: string;
                          timestamp?: string;
                          signature?: string;
                        }[];
                      };
                    };
                    validator_set?: {
                      validators?: {
                        address?: string;
                        pub_key?: { ed25519?: string; secp256k1?: string };
                        voting_power?: string;
                        proposer_priority?: string;
                      }[];
                      proposer?: {
                        address?: string;
                        pub_key?: { ed25519?: string; secp256k1?: string };
                        voting_power?: string;
                        proposer_priority?: string;
                      };
                      total_voting_power?: string;
                    };
                  };
                  common_height?: string;
                  byzantine_validators?: {
                    address?: string;
                    pub_key?: { ed25519?: string; secp256k1?: string };
                    voting_power?: string;
                    proposer_priority?: string;
                  }[];
                  total_voting_power?: string;
                  timestamp?: string;
                };
              }[];
            };
            last_commit?: {
              height?: string;
              round?: number;
              block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
              signatures?: {
                block_id_flag?:
                  | "BLOCK_ID_FLAG_UNKNOWN"
                  | "BLOCK_ID_FLAG_ABSENT"
                  | "BLOCK_ID_FLAG_COMMIT"
                  | "BLOCK_ID_FLAG_NIL";
                validator_address?: string;
                timestamp?: string;
                signature?: string;
              }[];
            };
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/base/tendermint/v1beta1/blocks/${height}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service
     * @name CosmosBaseTendermintV1Beta1GetNodeInfo
     * @summary GetNodeInfo queries the current node info.
     * @request GET:/cosmos/base/tendermint/v1beta1/node_info
     */
    cosmosBaseTendermintV1Beta1GetNodeInfo: (params: RequestParams = {}) =>
      this.request<
        {
          default_node_info?: {
            protocol_version?: { p2p?: string; block?: string; app?: string };
            default_node_id?: string;
            listen_addr?: string;
            network?: string;
            version?: string;
            channels?: string;
            moniker?: string;
            other?: { tx_index?: string; rpc_address?: string };
          };
          application_version?: {
            name?: string;
            app_name?: string;
            version?: string;
            git_commit?: string;
            build_tags?: string;
            go_version?: string;
            build_deps?: { path?: string; version?: string; sum?: string }[];
            cosmos_sdk_version?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/base/tendermint/v1beta1/node_info`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service
     * @name CosmosBaseTendermintV1Beta1GetSyncing
     * @summary GetSyncing queries node syncing.
     * @request GET:/cosmos/base/tendermint/v1beta1/syncing
     */
    cosmosBaseTendermintV1Beta1GetSyncing: (params: RequestParams = {}) =>
      this.request<{ syncing?: boolean }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
        path: `/cosmos/base/tendermint/v1beta1/syncing`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service
     * @name CosmosBaseTendermintV1Beta1GetLatestValidatorSet
     * @summary GetLatestValidatorSet queries latest validator-set.
     * @request GET:/cosmos/base/tendermint/v1beta1/validatorsets/latest
     */
    cosmosBaseTendermintV1Beta1GetLatestValidatorSet: (
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          block_height?: string;
          validators?: {
            address?: string;
            pub_key?: { "@type"?: string };
            voting_power?: string;
            proposer_priority?: string;
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/base/tendermint/v1beta1/validatorsets/latest`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service
     * @name CosmosBaseTendermintV1Beta1GetValidatorSetByHeight
     * @summary GetValidatorSetByHeight queries validator-set at a given height.
     * @request GET:/cosmos/base/tendermint/v1beta1/validatorsets/{height}
     */
    cosmosBaseTendermintV1Beta1GetValidatorSetByHeight: (
      height: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          block_height?: string;
          validators?: {
            address?: string;
            pub_key?: { "@type"?: string };
            voting_power?: string;
            proposer_priority?: string;
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/base/tendermint/v1beta1/validatorsets/${height}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosDistributionV1Beta1CommunityPool
     * @summary CommunityPool queries the community pool coins.
     * @request GET:/cosmos/distribution/v1beta1/community_pool
     */
    cosmosDistributionV1Beta1CommunityPool: (params: RequestParams = {}) =>
      this.request<
        { pool?: { denom?: string; amount?: string }[] },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/distribution/v1beta1/community_pool`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name CosmosDistributionV1Beta1DelegationTotalRewards
 * @summary DelegationTotalRewards queries the total rewards accrued by a each
validator.
 * @request GET:/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards
 */
    cosmosDistributionV1Beta1DelegationTotalRewards: (delegatorAddress: string, params: RequestParams = {}) =>
      this.request<
        {
          rewards?: { validator_address?: string; reward?: { denom?: string; amount?: string }[] }[];
          total?: { denom?: string; amount?: string }[];
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/rewards`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosDistributionV1Beta1DelegationRewards
     * @summary DelegationRewards queries the total rewards accrued by a delegation.
     * @request GET:/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}
     */
    cosmosDistributionV1Beta1DelegationRewards: (
      delegatorAddress: string,
      validatorAddress: string,
      params: RequestParams = {},
    ) =>
      this.request<
        { rewards?: { denom?: string; amount?: string }[] },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/rewards/${validatorAddress}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosDistributionV1Beta1DelegatorValidators
     * @summary DelegatorValidators queries the validators of a delegator.
     * @request GET:/cosmos/distribution/v1beta1/delegators/{delegator_address}/validators
     */
    cosmosDistributionV1Beta1DelegatorValidators: (delegatorAddress: string, params: RequestParams = {}) =>
      this.request<{ validators?: string[] }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
        path: `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/validators`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosDistributionV1Beta1DelegatorWithdrawAddress
     * @summary DelegatorWithdrawAddress queries withdraw address of a delegator.
     * @request GET:/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address
     */
    cosmosDistributionV1Beta1DelegatorWithdrawAddress: (delegatorAddress: string, params: RequestParams = {}) =>
      this.request<
        { withdraw_address?: string },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/distribution/v1beta1/delegators/${delegatorAddress}/withdraw_address`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosDistributionV1Beta1Params
     * @summary Params queries params of the distribution module.
     * @request GET:/cosmos/distribution/v1beta1/params
     */
    cosmosDistributionV1Beta1Params: (params: RequestParams = {}) =>
      this.request<
        {
          params?: {
            community_tax?: string;
            base_proposer_reward?: string;
            bonus_proposer_reward?: string;
            withdraw_addr_enabled?: boolean;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/distribution/v1beta1/params`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosDistributionV1Beta1ValidatorCommission
     * @summary ValidatorCommission queries accumulated commission for a validator.
     * @request GET:/cosmos/distribution/v1beta1/validators/{validator_address}/commission
     */
    cosmosDistributionV1Beta1ValidatorCommission: (validatorAddress: string, params: RequestParams = {}) =>
      this.request<
        { commission?: { commission?: { denom?: string; amount?: string }[] } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/distribution/v1beta1/validators/${validatorAddress}/commission`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosDistributionV1Beta1ValidatorOutstandingRewards
     * @summary ValidatorOutstandingRewards queries rewards of a validator address.
     * @request GET:/cosmos/distribution/v1beta1/validators/{validator_address}/outstanding_rewards
     */
    cosmosDistributionV1Beta1ValidatorOutstandingRewards: (validatorAddress: string, params: RequestParams = {}) =>
      this.request<
        { rewards?: { rewards?: { denom?: string; amount?: string }[] } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/distribution/v1beta1/validators/${validatorAddress}/outstanding_rewards`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosDistributionV1Beta1ValidatorSlashes
     * @summary ValidatorSlashes queries slash events of a validator.
     * @request GET:/cosmos/distribution/v1beta1/validators/{validator_address}/slashes
     */
    cosmosDistributionV1Beta1ValidatorSlashes: (
      validatorAddress: string,
      query?: {
        starting_height?: string;
        ending_height?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          slashes?: { validator_period?: string; fraction?: string }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/distribution/v1beta1/validators/${validatorAddress}/slashes`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosEvidenceV1Beta1AllEvidence
     * @summary AllEvidence queries all evidence.
     * @request GET:/cosmos/evidence/v1beta1/evidence
     */
    cosmosEvidenceV1Beta1AllEvidence: (
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { evidence?: { "@type"?: string }[]; pagination?: { next_key?: string; total?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/evidence/v1beta1/evidence`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosEvidenceV1Beta1Evidence
     * @summary Evidence queries evidence based on evidence hash.
     * @request GET:/cosmos/evidence/v1beta1/evidence/{evidence_hash}
     */
    cosmosEvidenceV1Beta1Evidence: (evidenceHash: string, params: RequestParams = {}) =>
      this.request<
        { evidence?: { "@type"?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/evidence/v1beta1/evidence/${evidenceHash}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosFeegrantV1Beta1Allowance
     * @summary Allowance returns fee granted to the grantee by the granter.
     * @request GET:/cosmos/feegrant/v1beta1/allowance/{granter}/{grantee}
     */
    cosmosFeegrantV1Beta1Allowance: (granter: string, grantee: string, params: RequestParams = {}) =>
      this.request<
        { allowance?: { granter?: string; grantee?: string; allowance?: { "@type"?: string } } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/feegrant/v1beta1/allowance/${granter}/${grantee}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosFeegrantV1Beta1Allowances
     * @summary Allowances returns all the grants for address.
     * @request GET:/cosmos/feegrant/v1beta1/allowances/{grantee}
     */
    cosmosFeegrantV1Beta1Allowances: (
      grantee: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          allowances?: { granter?: string; grantee?: string; allowance?: { "@type"?: string } }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/feegrant/v1beta1/allowances/${grantee}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosGovV1Beta1Params
     * @summary Params queries all parameters of the gov module.
     * @request GET:/cosmos/gov/v1beta1/params/{params_type}
     */
    cosmosGovV1Beta1Params: (paramsType: string, params: RequestParams = {}) =>
      this.request<
        {
          voting_params?: { voting_period?: string };
          deposit_params?: { min_deposit?: { denom?: string; amount?: string }[]; max_deposit_period?: string };
          tally_params?: { quorum?: string; threshold?: string; veto_threshold?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/gov/v1beta1/params/${paramsType}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosGovV1Beta1Proposals
     * @summary Proposals queries all proposals based on given status.
     * @request GET:/cosmos/gov/v1beta1/proposals
     */
    cosmosGovV1Beta1Proposals: (
      query?: {
        proposal_status?:
          | "PROPOSAL_STATUS_UNSPECIFIED"
          | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
          | "PROPOSAL_STATUS_VOTING_PERIOD"
          | "PROPOSAL_STATUS_PASSED"
          | "PROPOSAL_STATUS_REJECTED"
          | "PROPOSAL_STATUS_FAILED";
        voter?: string;
        depositor?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          proposals?: {
            proposal_id?: string;
            content?: { "@type"?: string };
            status?:
              | "PROPOSAL_STATUS_UNSPECIFIED"
              | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
              | "PROPOSAL_STATUS_VOTING_PERIOD"
              | "PROPOSAL_STATUS_PASSED"
              | "PROPOSAL_STATUS_REJECTED"
              | "PROPOSAL_STATUS_FAILED";
            final_tally_result?: { yes?: string; abstain?: string; no?: string; no_with_veto?: string };
            submit_time?: string;
            deposit_end_time?: string;
            total_deposit?: { denom?: string; amount?: string }[];
            voting_start_time?: string;
            voting_end_time?: string;
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/gov/v1beta1/proposals`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosGovV1Beta1Proposal
     * @summary Proposal queries proposal details based on ProposalID.
     * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}
     */
    cosmosGovV1Beta1Proposal: (proposalId: string, params: RequestParams = {}) =>
      this.request<
        {
          proposal?: {
            proposal_id?: string;
            content?: { "@type"?: string };
            status?:
              | "PROPOSAL_STATUS_UNSPECIFIED"
              | "PROPOSAL_STATUS_DEPOSIT_PERIOD"
              | "PROPOSAL_STATUS_VOTING_PERIOD"
              | "PROPOSAL_STATUS_PASSED"
              | "PROPOSAL_STATUS_REJECTED"
              | "PROPOSAL_STATUS_FAILED";
            final_tally_result?: { yes?: string; abstain?: string; no?: string; no_with_veto?: string };
            submit_time?: string;
            deposit_end_time?: string;
            total_deposit?: { denom?: string; amount?: string }[];
            voting_start_time?: string;
            voting_end_time?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/gov/v1beta1/proposals/${proposalId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosGovV1Beta1Deposits
     * @summary Deposits queries all deposits of a single proposal.
     * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits
     */
    cosmosGovV1Beta1Deposits: (
      proposalId: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          deposits?: { proposal_id?: string; depositor?: string; amount?: { denom?: string; amount?: string }[] }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/gov/v1beta1/proposals/${proposalId}/deposits`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosGovV1Beta1Deposit
     * @summary Deposit queries single deposit information based proposalID, depositAddr.
     * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}/deposits/{depositor}
     */
    cosmosGovV1Beta1Deposit: (proposalId: string, depositor: string, params: RequestParams = {}) =>
      this.request<
        { deposit?: { proposal_id?: string; depositor?: string; amount?: { denom?: string; amount?: string }[] } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/gov/v1beta1/proposals/${proposalId}/deposits/${depositor}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosGovV1Beta1TallyResult
     * @summary TallyResult queries the tally of a proposal vote.
     * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}/tally
     */
    cosmosGovV1Beta1TallyResult: (proposalId: string, params: RequestParams = {}) =>
      this.request<
        { tally?: { yes?: string; abstain?: string; no?: string; no_with_veto?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/gov/v1beta1/proposals/${proposalId}/tally`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosGovV1Beta1Votes
     * @summary Votes queries votes of a given proposal.
     * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}/votes
     */
    cosmosGovV1Beta1Votes: (
      proposalId: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          votes?: {
            proposal_id?: string;
            voter?: string;
            option?:
              | "VOTE_OPTION_UNSPECIFIED"
              | "VOTE_OPTION_YES"
              | "VOTE_OPTION_ABSTAIN"
              | "VOTE_OPTION_NO"
              | "VOTE_OPTION_NO_WITH_VETO";
            options?: {
              option?:
                | "VOTE_OPTION_UNSPECIFIED"
                | "VOTE_OPTION_YES"
                | "VOTE_OPTION_ABSTAIN"
                | "VOTE_OPTION_NO"
                | "VOTE_OPTION_NO_WITH_VETO";
              weight?: string;
            }[];
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/gov/v1beta1/proposals/${proposalId}/votes`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosGovV1Beta1Vote
     * @summary Vote queries voted information based on proposalID, voterAddr.
     * @request GET:/cosmos/gov/v1beta1/proposals/{proposal_id}/votes/{voter}
     */
    cosmosGovV1Beta1Vote: (proposalId: string, voter: string, params: RequestParams = {}) =>
      this.request<
        {
          vote?: {
            proposal_id?: string;
            voter?: string;
            option?:
              | "VOTE_OPTION_UNSPECIFIED"
              | "VOTE_OPTION_YES"
              | "VOTE_OPTION_ABSTAIN"
              | "VOTE_OPTION_NO"
              | "VOTE_OPTION_NO_WITH_VETO";
            options?: {
              option?:
                | "VOTE_OPTION_UNSPECIFIED"
                | "VOTE_OPTION_YES"
                | "VOTE_OPTION_ABSTAIN"
                | "VOTE_OPTION_NO"
                | "VOTE_OPTION_NO_WITH_VETO";
              weight?: string;
            }[];
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/gov/v1beta1/proposals/${proposalId}/votes/${voter}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosMintV1Beta1AnnualProvisions
     * @summary AnnualProvisions current minting annual provisions value.
     * @request GET:/cosmos/mint/v1beta1/annual_provisions
     */
    cosmosMintV1Beta1AnnualProvisions: (params: RequestParams = {}) =>
      this.request<
        { annual_provisions?: string },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/mint/v1beta1/annual_provisions`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosMintV1Beta1Inflation
     * @summary Inflation returns the current minting inflation value.
     * @request GET:/cosmos/mint/v1beta1/inflation
     */
    cosmosMintV1Beta1Inflation: (params: RequestParams = {}) =>
      this.request<{ inflation?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
        path: `/cosmos/mint/v1beta1/inflation`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosMintV1Beta1Params
     * @summary Params returns the total set of minting parameters.
     * @request GET:/cosmos/mint/v1beta1/params
     */
    cosmosMintV1Beta1Params: (params: RequestParams = {}) =>
      this.request<
        {
          params?: {
            mint_denom?: string;
            inflation_rate_change?: string;
            inflation_max?: string;
            inflation_min?: string;
            goal_bonded?: string;
            blocks_per_year?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/mint/v1beta1/params`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name CosmosParamsV1Beta1Params
 * @summary Params queries a specific parameter of a module, given its subspace and
key.
 * @request GET:/cosmos/params/v1beta1/params
 */
    cosmosParamsV1Beta1Params: (query?: { subspace?: string; key?: string }, params: RequestParams = {}) =>
      this.request<
        { param?: { subspace?: string; key?: string; value?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/params/v1beta1/params`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosSlashingV1Beta1Params
     * @summary Params queries the parameters of slashing module
     * @request GET:/cosmos/slashing/v1beta1/params
     */
    cosmosSlashingV1Beta1Params: (params: RequestParams = {}) =>
      this.request<
        {
          params?: {
            signed_blocks_window?: string;
            min_signed_per_window?: string;
            downtime_jail_duration?: string;
            slash_fraction_double_sign?: string;
            slash_fraction_downtime?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/slashing/v1beta1/params`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosSlashingV1Beta1SigningInfos
     * @summary SigningInfos queries signing info of all validators
     * @request GET:/cosmos/slashing/v1beta1/signing_infos
     */
    cosmosSlashingV1Beta1SigningInfos: (
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          info?: {
            address?: string;
            start_height?: string;
            index_offset?: string;
            jailed_until?: string;
            tombstoned?: boolean;
            missed_blocks_counter?: string;
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/slashing/v1beta1/signing_infos`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosSlashingV1Beta1SigningInfo
     * @summary SigningInfo queries the signing info of given cons address
     * @request GET:/cosmos/slashing/v1beta1/signing_infos/{cons_address}
     */
    cosmosSlashingV1Beta1SigningInfo: (consAddress: string, params: RequestParams = {}) =>
      this.request<
        {
          val_signing_info?: {
            address?: string;
            start_height?: string;
            index_offset?: string;
            jailed_until?: string;
            tombstoned?: boolean;
            missed_blocks_counter?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/slashing/v1beta1/signing_infos/${consAddress}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosStakingV1Beta1DelegatorDelegations
     * @summary DelegatorDelegations queries all delegations of a given delegator address.
     * @request GET:/cosmos/staking/v1beta1/delegations/{delegator_addr}
     */
    cosmosStakingV1Beta1DelegatorDelegations: (
      delegatorAddr: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          delegation_responses?: {
            delegation?: { delegator_address?: string; validator_address?: string; shares?: string };
            balance?: { denom?: string; amount?: string };
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/delegations/${delegatorAddr}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosStakingV1Beta1Redelegations
     * @summary Redelegations queries redelegations of given address.
     * @request GET:/cosmos/staking/v1beta1/delegators/{delegator_addr}/redelegations
     */
    cosmosStakingV1Beta1Redelegations: (
      delegatorAddr: string,
      query?: {
        src_validator_addr?: string;
        dst_validator_addr?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          redelegation_responses?: {
            redelegation?: {
              delegator_address?: string;
              validator_src_address?: string;
              validator_dst_address?: string;
              entries?: {
                creation_height?: string;
                completion_time?: string;
                initial_balance?: string;
                shares_dst?: string;
              }[];
            };
            entries?: {
              redelegation_entry?: {
                creation_height?: string;
                completion_time?: string;
                initial_balance?: string;
                shares_dst?: string;
              };
              balance?: string;
            }[];
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/delegators/${delegatorAddr}/redelegations`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name CosmosStakingV1Beta1DelegatorUnbondingDelegations
 * @summary DelegatorUnbondingDelegations queries all unbonding delegations of a given
delegator address.
 * @request GET:/cosmos/staking/v1beta1/delegators/{delegator_addr}/unbonding_delegations
 */
    cosmosStakingV1Beta1DelegatorUnbondingDelegations: (
      delegatorAddr: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          unbonding_responses?: {
            delegator_address?: string;
            validator_address?: string;
            entries?: {
              creation_height?: string;
              completion_time?: string;
              initial_balance?: string;
              balance?: string;
            }[];
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/delegators/${delegatorAddr}/unbonding_delegations`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name CosmosStakingV1Beta1DelegatorValidators
 * @summary DelegatorValidators queries all validators info for given delegator
address.
 * @request GET:/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators
 */
    cosmosStakingV1Beta1DelegatorValidators: (
      delegatorAddr: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          validators?: {
            operator_address?: string;
            consensus_pubkey?: { "@type"?: string };
            jailed?: boolean;
            status?:
              | "BOND_STATUS_UNSPECIFIED"
              | "BOND_STATUS_UNBONDED"
              | "BOND_STATUS_UNBONDING"
              | "BOND_STATUS_BONDED";
            tokens?: string;
            delegator_shares?: string;
            description?: {
              moniker?: string;
              identity?: string;
              website?: string;
              security_contact?: string;
              details?: string;
            };
            unbonding_height?: string;
            unbonding_time?: string;
            commission?: {
              commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
              update_time?: string;
            };
            min_self_delegation?: string;
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/delegators/${delegatorAddr}/validators`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name CosmosStakingV1Beta1DelegatorValidator
 * @summary DelegatorValidator queries validator info for given delegator validator
pair.
 * @request GET:/cosmos/staking/v1beta1/delegators/{delegator_addr}/validators/{validator_addr}
 */
    cosmosStakingV1Beta1DelegatorValidator: (
      delegatorAddr: string,
      validatorAddr: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          validator?: {
            operator_address?: string;
            consensus_pubkey?: { "@type"?: string };
            jailed?: boolean;
            status?:
              | "BOND_STATUS_UNSPECIFIED"
              | "BOND_STATUS_UNBONDED"
              | "BOND_STATUS_UNBONDING"
              | "BOND_STATUS_BONDED";
            tokens?: string;
            delegator_shares?: string;
            description?: {
              moniker?: string;
              identity?: string;
              website?: string;
              security_contact?: string;
              details?: string;
            };
            unbonding_height?: string;
            unbonding_time?: string;
            commission?: {
              commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
              update_time?: string;
            };
            min_self_delegation?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/delegators/${delegatorAddr}/validators/${validatorAddr}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosStakingV1Beta1HistoricalInfo
     * @summary HistoricalInfo queries the historical info for given height.
     * @request GET:/cosmos/staking/v1beta1/historical_info/{height}
     */
    cosmosStakingV1Beta1HistoricalInfo: (height: string, params: RequestParams = {}) =>
      this.request<
        {
          hist?: {
            header?: {
              version?: { block?: string; app?: string };
              chain_id?: string;
              height?: string;
              time?: string;
              last_block_id?: { hash?: string; part_set_header?: { total?: number; hash?: string } };
              last_commit_hash?: string;
              data_hash?: string;
              validators_hash?: string;
              next_validators_hash?: string;
              consensus_hash?: string;
              app_hash?: string;
              last_results_hash?: string;
              evidence_hash?: string;
              proposer_address?: string;
            };
            valset?: {
              operator_address?: string;
              consensus_pubkey?: { "@type"?: string };
              jailed?: boolean;
              status?:
                | "BOND_STATUS_UNSPECIFIED"
                | "BOND_STATUS_UNBONDED"
                | "BOND_STATUS_UNBONDING"
                | "BOND_STATUS_BONDED";
              tokens?: string;
              delegator_shares?: string;
              description?: {
                moniker?: string;
                identity?: string;
                website?: string;
                security_contact?: string;
                details?: string;
              };
              unbonding_height?: string;
              unbonding_time?: string;
              commission?: {
                commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
                update_time?: string;
              };
              min_self_delegation?: string;
            }[];
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/historical_info/${height}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosStakingV1Beta1Params
     * @summary Parameters queries the staking parameters.
     * @request GET:/cosmos/staking/v1beta1/params
     */
    cosmosStakingV1Beta1Params: (params: RequestParams = {}) =>
      this.request<
        {
          params?: {
            unbonding_time?: string;
            max_validators?: number;
            max_entries?: number;
            historical_entries?: number;
            bond_denom?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/params`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosStakingV1Beta1Pool
     * @summary Pool queries the pool info.
     * @request GET:/cosmos/staking/v1beta1/pool
     */
    cosmosStakingV1Beta1Pool: (params: RequestParams = {}) =>
      this.request<
        { pool?: { not_bonded_tokens?: string; bonded_tokens?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/pool`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosStakingV1Beta1Validators
     * @summary Validators queries all validators that match the given status.
     * @request GET:/cosmos/staking/v1beta1/validators
     */
    cosmosStakingV1Beta1Validators: (
      query?: {
        status?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          validators?: {
            operator_address?: string;
            consensus_pubkey?: { "@type"?: string };
            jailed?: boolean;
            status?:
              | "BOND_STATUS_UNSPECIFIED"
              | "BOND_STATUS_UNBONDED"
              | "BOND_STATUS_UNBONDING"
              | "BOND_STATUS_BONDED";
            tokens?: string;
            delegator_shares?: string;
            description?: {
              moniker?: string;
              identity?: string;
              website?: string;
              security_contact?: string;
              details?: string;
            };
            unbonding_height?: string;
            unbonding_time?: string;
            commission?: {
              commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
              update_time?: string;
            };
            min_self_delegation?: string;
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/validators`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosStakingV1Beta1Validator
     * @summary Validator queries validator info for given validator address.
     * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}
     */
    cosmosStakingV1Beta1Validator: (validatorAddr: string, params: RequestParams = {}) =>
      this.request<
        {
          validator?: {
            operator_address?: string;
            consensus_pubkey?: { "@type"?: string };
            jailed?: boolean;
            status?:
              | "BOND_STATUS_UNSPECIFIED"
              | "BOND_STATUS_UNBONDED"
              | "BOND_STATUS_UNBONDING"
              | "BOND_STATUS_BONDED";
            tokens?: string;
            delegator_shares?: string;
            description?: {
              moniker?: string;
              identity?: string;
              website?: string;
              security_contact?: string;
              details?: string;
            };
            unbonding_height?: string;
            unbonding_time?: string;
            commission?: {
              commission_rates?: { rate?: string; max_rate?: string; max_change_rate?: string };
              update_time?: string;
            };
            min_self_delegation?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/validators/${validatorAddr}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosStakingV1Beta1ValidatorDelegations
     * @summary ValidatorDelegations queries delegate info for given validator.
     * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}/delegations
     */
    cosmosStakingV1Beta1ValidatorDelegations: (
      validatorAddr: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          delegation_responses?: {
            delegation?: { delegator_address?: string; validator_address?: string; shares?: string };
            balance?: { denom?: string; amount?: string };
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/validators/${validatorAddr}/delegations`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosStakingV1Beta1Delegation
     * @summary Delegation queries delegate info for given validator delegator pair.
     * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}
     */
    cosmosStakingV1Beta1Delegation: (validatorAddr: string, delegatorAddr: string, params: RequestParams = {}) =>
      this.request<
        {
          delegation_response?: {
            delegation?: { delegator_address?: string; validator_address?: string; shares?: string };
            balance?: { denom?: string; amount?: string };
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/validators/${validatorAddr}/delegations/${delegatorAddr}`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name CosmosStakingV1Beta1UnbondingDelegation
 * @summary UnbondingDelegation queries unbonding info for given validator delegator
pair.
 * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}/delegations/{delegator_addr}/unbonding_delegation
 */
    cosmosStakingV1Beta1UnbondingDelegation: (
      validatorAddr: string,
      delegatorAddr: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          unbond?: {
            delegator_address?: string;
            validator_address?: string;
            entries?: {
              creation_height?: string;
              completion_time?: string;
              initial_balance?: string;
              balance?: string;
            }[];
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/validators/${validatorAddr}/delegations/${delegatorAddr}/unbonding_delegation`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosStakingV1Beta1ValidatorUnbondingDelegations
     * @summary ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     * @request GET:/cosmos/staking/v1beta1/validators/{validator_addr}/unbonding_delegations
     */
    cosmosStakingV1Beta1ValidatorUnbondingDelegations: (
      validatorAddr: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          unbonding_responses?: {
            delegator_address?: string;
            validator_address?: string;
            entries?: {
              creation_height?: string;
              completion_time?: string;
              initial_balance?: string;
              balance?: string;
            }[];
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/staking/v1beta1/validators/${validatorAddr}/unbonding_delegations`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service
     * @name CosmosTxV1Beta1Simulate
     * @summary Simulate simulates executing a transaction for estimating gas usage.
     * @request POST:/cosmos/tx/v1beta1/simulate
     */
    cosmosTxV1Beta1Simulate: (body: CosmosTxV1Beta1SimulateRequest, params: RequestParams = {}) =>
      this.request<
        {
          gas_info?: { gas_wanted?: string; gas_used?: string };
          result?: {
            data?: string;
            log?: string;
            events?: { type?: string; attributes?: { key?: string; value?: string; index?: boolean }[] }[];
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/tx/v1beta1/simulate`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service
     * @name CosmosTxV1Beta1GetTxsEvent
     * @summary GetTxsEvent fetches txs by event.
     * @request GET:/cosmos/tx/v1beta1/txs
     */
    cosmosTxV1Beta1GetTxsEvent: (
      query?: {
        events?: string[];
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        "pagination.reverse"?: boolean;
        order_by?: "ORDER_BY_UNSPECIFIED" | "ORDER_BY_ASC" | "ORDER_BY_DESC";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosTxV1Beta1GetTxsEventResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/tx/v1beta1/txs`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service
     * @name CosmosTxV1Beta1BroadcastTx
     * @summary BroadcastTx broadcast transaction.
     * @request POST:/cosmos/tx/v1beta1/txs
     */
    cosmosTxV1Beta1BroadcastTx: (
      body: {
        tx_bytes?: string;
        mode?: "BROADCAST_MODE_UNSPECIFIED" | "BROADCAST_MODE_BLOCK" | "BROADCAST_MODE_SYNC" | "BROADCAST_MODE_ASYNC";
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          tx_response?: {
            height?: string;
            txhash?: string;
            codespace?: string;
            code?: number;
            data?: string;
            raw_log?: string;
            logs?: {
              msg_index?: number;
              log?: string;
              events?: { type?: string; attributes?: { key?: string; value?: string }[] }[];
            }[];
            info?: string;
            gas_wanted?: string;
            gas_used?: string;
            tx?: { "@type"?: string };
            timestamp?: string;
            events?: { type?: string; attributes?: { key?: string; value?: string; index?: boolean }[] }[];
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/tx/v1beta1/txs`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Service
     * @name CosmosTxV1Beta1GetTx
     * @summary GetTx fetches a tx by hash.
     * @request GET:/cosmos/tx/v1beta1/txs/{hash}
     */
    cosmosTxV1Beta1GetTx: (hash: string, params: RequestParams = {}) =>
      this.request<CosmosTxV1Beta1GetTxResponse, { code?: number; message?: string; details?: { "@type"?: string }[] }>(
        {
          path: `/cosmos/tx/v1beta1/txs/${hash}`,
          method: "GET",
          ...params,
        },
      ),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosUpgradeV1Beta1AppliedPlan
     * @summary AppliedPlan queries a previously applied upgrade plan by its name.
     * @request GET:/cosmos/upgrade/v1beta1/applied_plan/{name}
     */
    cosmosUpgradeV1Beta1AppliedPlan: (name: string, params: RequestParams = {}) =>
      this.request<{ height?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
        path: `/cosmos/upgrade/v1beta1/applied_plan/${name}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name CosmosUpgradeV1Beta1CurrentPlan
     * @summary CurrentPlan queries the current upgrade plan.
     * @request GET:/cosmos/upgrade/v1beta1/current_plan
     */
    cosmosUpgradeV1Beta1CurrentPlan: (params: RequestParams = {}) =>
      this.request<
        {
          plan?: {
            name?: string;
            time?: string;
            height?: string;
            info?: string;
            upgraded_client_state?: { "@type"?: string };
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/upgrade/v1beta1/current_plan`,
        method: "GET",
        ...params,
      }),

    /**
     * @description Since: cosmos-sdk 0.43
     *
     * @tags Query
     * @name CosmosUpgradeV1Beta1ModuleVersions
     * @summary ModuleVersions queries the list of module versions from state.
     * @request GET:/cosmos/upgrade/v1beta1/module_versions
     */
    cosmosUpgradeV1Beta1ModuleVersions: (query?: { module_name?: string }, params: RequestParams = {}) =>
      this.request<
        { module_versions?: { name?: string; version?: string }[] },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/upgrade/v1beta1/module_versions`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name CosmosUpgradeV1Beta1UpgradedConsensusState
 * @summary UpgradedConsensusState queries the consensus state that will serve
as a trusted kernel for the next version of this chain. It will only be
stored at the last height of this chain.
UpgradedConsensusState RPC not supported with legacy querier
This rpc is deprecated now that IBC has its own replacement
(https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
 * @request GET:/cosmos/upgrade/v1beta1/upgraded_consensus_state/{last_height}
 */
    cosmosUpgradeV1Beta1UpgradedConsensusState: (lastHeight: string, params: RequestParams = {}) =>
      this.request<
        { upgraded_consensus_state?: string },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/cosmos/upgrade/v1beta1/upgraded_consensus_state/${lastHeight}`,
        method: "GET",
        ...params,
      }),
  };
  gravity = {
    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1BatchSendToEthClaim
     * @request POST:/gravity/v1/batch_send_to_eth_claim
     */
    gravityV1BatchSendToEthClaim: (
      query?: {
        event_nonce?: string;
        block_height?: string;
        batch_nonce?: string;
        token_contract?: string;
        orchestrator?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/batch_send_to_eth_claim`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1CancelSendToEth
     * @request POST:/gravity/v1/cancel_send_to_eth
     */
    gravityV1CancelSendToEth: (query?: { transaction_id?: string; sender?: string }, params: RequestParams = {}) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/cancel_send_to_eth`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1ConfirmLogicCall
     * @request POST:/gravity/v1/confim_logic
     */
    gravityV1ConfirmLogicCall: (
      query?: {
        invalidation_id?: string;
        invalidation_nonce?: string;
        eth_signer?: string;
        orchestrator?: string;
        signature?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/confim_logic`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1ConfirmBatch
     * @request POST:/gravity/v1/confirm_batch
     */
    gravityV1ConfirmBatch: (
      query?: {
        nonce?: string;
        token_contract?: string;
        eth_signer?: string;
        orchestrator?: string;
        signature?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/confirm_batch`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1Erc20DeployedClaim
     * @request POST:/gravity/v1/erc20_deployed_claim
     */
    gravityV1Erc20DeployedClaim: (
      query?: {
        event_nonce?: string;
        block_height?: string;
        cosmos_denom?: string;
        token_contract?: string;
        name?: string;
        symbol?: string;
        decimals?: string;
        orchestrator?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/erc20_deployed_claim`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1LogicCallExecutedClaim
     * @request POST:/gravity/v1/logic_call_executed_claim
     */
    gravityV1LogicCallExecutedClaim: (
      query?: {
        event_nonce?: string;
        block_height?: string;
        invalidation_id?: string;
        invalidation_nonce?: string;
        orchestrator?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/logic_call_executed_claim`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1RequestBatch
     * @request POST:/gravity/v1/request_batch
     */
    gravityV1RequestBatch: (query?: { sender?: string; denom?: string }, params: RequestParams = {}) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/request_batch`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1SendToCosmosClaim
     * @request POST:/gravity/v1/send_to_cosmos_claim
     */
    gravityV1SendToCosmosClaim: (
      query?: {
        event_nonce?: string;
        block_height?: string;
        token_contract?: string;
        amount?: string;
        ethereum_sender?: string;
        cosmos_receiver?: string;
        orchestrator?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/send_to_cosmos_claim`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1SendToEth
     * @request POST:/gravity/v1/send_to_eth
     */
    gravityV1SendToEth: (
      query?: {
        sender?: string;
        eth_dest?: string;
        "amount.denom"?: string;
        "amount.amount"?: string;
        "bridge_fee.denom"?: string;
        "bridge_fee.amount"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/send_to_eth`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1SetOrchestratorAddress
     * @request POST:/gravity/v1/set_orchestrator_address
     */
    gravityV1SetOrchestratorAddress: (
      query?: { validator?: string; orchestrator?: string; eth_address?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/set_orchestrator_address`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1SubmitBadSignatureEvidence
     * @request POST:/gravity/v1/submit_bad_signature_evidence
     */
    gravityV1SubmitBadSignatureEvidence: (
      query?: { "subject.type_url"?: string; "subject.value"?: string; signature?: string; sender?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/submit_bad_signature_evidence`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1ValsetConfirm
     * @request POST:/gravity/v1/valset_confirm
     */
    gravityV1ValsetConfirm: (
      query?: { nonce?: string; orchestrator?: string; eth_address?: string; signature?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/valset_confirm`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Msg
     * @name GravityV1ValsetUpdateClaim
     * @request POST:/gravity/v1/valset_updated_claim
     */
    gravityV1ValsetUpdateClaim: (
      query?: {
        event_nonce?: string;
        valset_nonce?: string;
        block_height?: string;
        reward_amount?: string;
        reward_token?: string;
        orchestrator?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        CosmosBankV1Beta1MsgMultiSendResponse,
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1/valset_updated_claim`,
        method: "POST",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1BatchConfirms
     * @request GET:/gravity/v1beta/batch/confirms
     */
    gravityV1BatchConfirms: (query?: { nonce?: string; contract_address?: string }, params: RequestParams = {}) =>
      this.request<
        {
          confirms?: {
            nonce?: string;
            token_contract?: string;
            eth_signer?: string;
            orchestrator?: string;
            signature?: string;
          }[];
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/batch/confirms`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1OutgoingLogicCalls
     * @request GET:/gravity/v1beta/batch/outgoinglogic
     */
    gravityV1OutgoingLogicCalls: (params: RequestParams = {}) =>
      this.request<
        {
          calls?: {
            transfers?: { contract?: string; amount?: string }[];
            fees?: { contract?: string; amount?: string }[];
            logic_contract_address?: string;
            payload?: string;
            timeout?: string;
            invalidation_id?: string;
            invalidation_nonce?: string;
            block?: string;
          }[];
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/batch/outgoinglogic`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1OutgoingTxBatches
     * @request GET:/gravity/v1beta/batch/outgoingtx
     */
    gravityV1OutgoingTxBatches: (params: RequestParams = {}) =>
      this.request<
        {
          batches?: {
            batch_nonce?: string;
            batch_timeout?: string;
            transactions?: {
              id?: string;
              sender?: string;
              dest_address?: string;
              erc20_token?: { contract?: string; amount?: string };
              erc20_fee?: { contract?: string; amount?: string };
            }[];
            token_contract?: string;
            block?: string;
          }[];
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/batch/outgoingtx`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1LastPendingBatchRequestByAddr
     * @request GET:/gravity/v1beta/batch/{address}
     */
    gravityV1LastPendingBatchRequestByAddr: (address: string, params: RequestParams = {}) =>
      this.request<
        {
          batch?: {
            batch_nonce?: string;
            batch_timeout?: string;
            transactions?: {
              id?: string;
              sender?: string;
              dest_address?: string;
              erc20_token?: { contract?: string; amount?: string };
              erc20_fee?: { contract?: string; amount?: string };
            }[];
            token_contract?: string;
            block?: string;
          }[];
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/batch/${address}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1BatchRequestByNonce
     * @request GET:/gravity/v1beta/batch/{nonce}
     */
    gravityV1BatchRequestByNonce: (nonce: string, query?: { contract_address?: string }, params: RequestParams = {}) =>
      this.request<
        {
          batch?: {
            batch_nonce?: string;
            batch_timeout?: string;
            transactions?: {
              id?: string;
              sender?: string;
              dest_address?: string;
              erc20_token?: { contract?: string; amount?: string };
              erc20_fee?: { contract?: string; amount?: string };
            }[];
            token_contract?: string;
            block?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/batch/${nonce}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1BatchFees
     * @request GET:/gravity/v1beta/batchfees
     */
    gravityV1BatchFees: (params: RequestParams = {}) =>
      this.request<
        { batch_fees?: { token?: string; total_fees?: string; tx_count?: string }[] },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/batchfees`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1ValsetConfirmsByNonce
     * @request GET:/gravity/v1beta/confirms/{nonce}
     */
    gravityV1ValsetConfirmsByNonce: (nonce: string, params: RequestParams = {}) =>
      this.request<
        { confirms?: { nonce?: string; orchestrator?: string; eth_address?: string; signature?: string }[] },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/confirms/${nonce}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1DenomToErc20
     * @request GET:/gravity/v1beta/cosmos_originated/denom_to_erc20
     */
    gravityV1DenomToErc20: (query?: { denom?: string }, params: RequestParams = {}) =>
      this.request<
        { erc20?: string; cosmos_originated?: boolean },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/cosmos_originated/denom_to_erc20`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1Erc20ToDenom
     * @request GET:/gravity/v1beta/cosmos_originated/erc20_to_denom
     */
    gravityV1Erc20ToDenom: (query?: { erc20?: string }, params: RequestParams = {}) =>
      this.request<
        { denom?: string; cosmos_originated?: boolean },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/cosmos_originated/erc20_to_denom`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1LogicConfirms
     * @request GET:/gravity/v1beta/logic/confirms
     */
    gravityV1LogicConfirms: (
      query?: { invalidation_id?: string; invalidation_nonce?: string },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          confirms?: {
            invalidation_id?: string;
            invalidation_nonce?: string;
            eth_signer?: string;
            orchestrator?: string;
            signature?: string;
          }[];
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/logic/confirms`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1LastPendingLogicCallByAddr
     * @request GET:/gravity/v1beta/logic/{address}
     */
    gravityV1LastPendingLogicCallByAddr: (address: string, params: RequestParams = {}) =>
      this.request<
        {
          call?: {
            transfers?: { contract?: string; amount?: string }[];
            fees?: { contract?: string; amount?: string }[];
            logic_contract_address?: string;
            payload?: string;
            timeout?: string;
            invalidation_id?: string;
            invalidation_nonce?: string;
            block?: string;
          }[];
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/logic/${address}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1LastEventNonceByAddr
     * @request GET:/gravity/v1beta/oracle/eventnonce/{address}
     */
    gravityV1LastEventNonceByAddr: (address: string, params: RequestParams = {}) =>
      this.request<{ event_nonce?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
        path: `/gravity/v1beta/oracle/eventnonce/${address}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1Params
     * @summary Deployments queries deployments
     * @request GET:/gravity/v1beta/params
     */
    gravityV1Params: (params: RequestParams = {}) =>
      this.request<
        {
          params?: {
            gravity_id?: string;
            contract_source_hash?: string;
            bridge_ethereum_address?: string;
            bridge_chain_id?: string;
            signed_valsets_window?: string;
            signed_batches_window?: string;
            signed_logic_calls_window?: string;
            target_batch_timeout?: string;
            average_block_time?: string;
            average_ethereum_block_time?: string;
            slash_fraction_valset?: string;
            slash_fraction_batch?: string;
            slash_fraction_logic_call?: string;
            unbond_slashing_valsets_window?: string;
            slash_fraction_bad_eth_signature?: string;
            valset_reward?: { denom?: string; amount?: string };
            bridge_active?: boolean;
            ethereum_blacklist?: string[];
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/params`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1GetAttestations
     * @request GET:/gravity/v1beta/query_attestations
     */
    gravityV1GetAttestations: (query?: { limit?: string }, params: RequestParams = {}) =>
      this.request<
        { attestations?: { observed?: boolean; votes?: string[]; height?: string; claim?: { "@type"?: string } }[] },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/query_attestations`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1GetDelegateKeyByEth
     * @request GET:/gravity/v1beta/query_delegate_keys_by_eth
     */
    gravityV1GetDelegateKeyByEth: (query?: { eth_address?: string }, params: RequestParams = {}) =>
      this.request<
        { validator_address?: string; orchestrator_address?: string },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/query_delegate_keys_by_eth`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1GetDelegateKeyByOrchestrator
     * @request GET:/gravity/v1beta/query_delegate_keys_by_orchestrator
     */
    gravityV1GetDelegateKeyByOrchestrator: (query?: { orchestrator_address?: string }, params: RequestParams = {}) =>
      this.request<
        { validator_address?: string; eth_address?: string },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/query_delegate_keys_by_orchestrator`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1GetDelegateKeyByValidator
     * @request GET:/gravity/v1beta/query_delegate_keys_by_validator
     */
    gravityV1GetDelegateKeyByValidator: (query?: { validator_address?: string }, params: RequestParams = {}) =>
      this.request<
        { eth_address?: string; orchestrator_address?: string },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/query_delegate_keys_by_validator`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1GetPendingSendToEth
     * @request GET:/gravity/v1beta/query_pending_send_to_eth
     */
    gravityV1GetPendingSendToEth: (query?: { sender_address?: string }, params: RequestParams = {}) =>
      this.request<
        {
          transfers_in_batches?: {
            id?: string;
            sender?: string;
            dest_address?: string;
            erc20_token?: { contract?: string; amount?: string };
            erc20_fee?: { contract?: string; amount?: string };
          }[];
          unbatched_transfers?: {
            id?: string;
            sender?: string;
            dest_address?: string;
            erc20_token?: { contract?: string; amount?: string };
            erc20_fee?: { contract?: string; amount?: string };
          }[];
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/query_pending_send_to_eth`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1ValsetRequest
     * @request GET:/gravity/v1beta/valset
     */
    gravityV1ValsetRequest: (query?: { nonce?: string }, params: RequestParams = {}) =>
      this.request<
        {
          valset?: {
            nonce?: string;
            members?: { power?: string; ethereum_address?: string }[];
            height?: string;
            reward_amount?: string;
            reward_token?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/valset`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1ValsetConfirm2
     * @request GET:/gravity/v1beta/valset/confirm
     * @originalName gravityV1ValsetConfirm
     * @duplicate
     */
    gravityV1ValsetConfirm2: (query?: { nonce?: string; address?: string }, params: RequestParams = {}) =>
      this.request<
        { confirm?: { nonce?: string; orchestrator?: string; eth_address?: string; signature?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/valset/confirm`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1CurrentValset
     * @request GET:/gravity/v1beta/valset/current
     */
    gravityV1CurrentValset: (params: RequestParams = {}) =>
      this.request<
        {
          valset?: {
            nonce?: string;
            members?: { power?: string; ethereum_address?: string }[];
            height?: string;
            reward_amount?: string;
            reward_token?: string;
          };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/valset/current`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1LastPendingValsetRequestByAddr
     * @request GET:/gravity/v1beta/valset/last
     */
    gravityV1LastPendingValsetRequestByAddr: (query?: { address?: string }, params: RequestParams = {}) =>
      this.request<
        {
          valsets?: {
            nonce?: string;
            members?: { power?: string; ethereum_address?: string }[];
            height?: string;
            reward_amount?: string;
            reward_token?: string;
          }[];
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/valset/last`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name GravityV1LastValsetRequests
     * @request GET:/gravity/v1beta/valset/requests
     */
    gravityV1LastValsetRequests: (params: RequestParams = {}) =>
      this.request<
        {
          valsets?: {
            nonce?: string;
            members?: { power?: string; ethereum_address?: string }[];
            height?: string;
            reward_amount?: string;
            reward_token?: string;
          }[];
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/gravity/v1beta/valset/requests`,
        method: "GET",
        ...params,
      }),
  };
  ibc = {
    /**
     * No description
     *
     * @tags Query
     * @name IbcApplicationsTransferV1DenomTraces
     * @summary DenomTraces queries all denomination traces.
     * @request GET:/ibc/apps/transfer/v1/denom_traces
     */
    ibcApplicationsTransferV1DenomTraces: (
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        { denom_traces?: { path?: string; base_denom?: string }[]; pagination?: { next_key?: string; total?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/apps/transfer/v1/denom_traces`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcApplicationsTransferV1DenomTrace
     * @summary DenomTrace queries a denomination trace information.
     * @request GET:/ibc/apps/transfer/v1/denom_traces/{hash}
     */
    ibcApplicationsTransferV1DenomTrace: (hash: string, params: RequestParams = {}) =>
      this.request<
        { denom_trace?: { path?: string; base_denom?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/apps/transfer/v1/denom_traces/${hash}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcApplicationsTransferV1Params
     * @summary Params queries all parameters of the ibc-transfer module.
     * @request GET:/ibc/apps/transfer/v1/params
     */
    ibcApplicationsTransferV1Params: (params: RequestParams = {}) =>
      this.request<
        { params?: { send_enabled?: boolean; receive_enabled?: boolean } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/apps/transfer/v1/params`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreChannelV1Channels
     * @summary Channels queries all the IBC channels of a chain.
     * @request GET:/ibc/core/channel/v1/channels
     */
    ibcCoreChannelV1Channels: (
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          channels?: {
            state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN" | "STATE_CLOSED";
            ordering?: "ORDER_NONE_UNSPECIFIED" | "ORDER_UNORDERED" | "ORDER_ORDERED";
            counterparty?: { port_id?: string; channel_id?: string };
            connection_hops?: string[];
            version?: string;
            port_id?: string;
            channel_id?: string;
          }[];
          pagination?: { next_key?: string; total?: string };
          height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreChannelV1Channel
     * @summary Channel queries an IBC Channel.
     * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}
     */
    ibcCoreChannelV1Channel: (channelId: string, portId: string, params: RequestParams = {}) =>
      this.request<
        {
          channel?: {
            state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN" | "STATE_CLOSED";
            ordering?: "ORDER_NONE_UNSPECIFIED" | "ORDER_UNORDERED" | "ORDER_ORDERED";
            counterparty?: { port_id?: string; channel_id?: string };
            connection_hops?: string[];
            version?: string;
          };
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreChannelV1ChannelClientState
 * @summary ChannelClientState queries for the client state for the channel associated
with the provided channel identifiers.
 * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/client_state
 */
    ibcCoreChannelV1ChannelClientState: (channelId: string, portId: string, params: RequestParams = {}) =>
      this.request<
        {
          identified_client_state?: { client_id?: string; client_state?: { "@type"?: string } };
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/client_state`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreChannelV1ChannelConsensusState
 * @summary ChannelConsensusState queries for the consensus state for the channel
associated with the provided channel identifiers.
 * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/consensus_state/revision/{revision_number}/height/{revision_height}
 */
    ibcCoreChannelV1ChannelConsensusState: (
      channelId: string,
      portId: string,
      revisionNumber: string,
      revisionHeight: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          consensus_state?: { "@type"?: string };
          client_id?: string;
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/consensus_state/revision/${revisionNumber}/height/${revisionHeight}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreChannelV1NextSequenceReceive
     * @summary NextSequenceReceive returns the next receive sequence for a given channel.
     * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/next_sequence
     */
    ibcCoreChannelV1NextSequenceReceive: (channelId: string, portId: string, params: RequestParams = {}) =>
      this.request<
        {
          next_sequence_receive?: string;
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/next_sequence`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreChannelV1PacketAcknowledgements
 * @summary PacketAcknowledgements returns all the packet acknowledgements associated
with a channel.
 * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_acknowledgements
 */
    ibcCoreChannelV1PacketAcknowledgements: (
      channelId: string,
      portId: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
        packet_commitment_sequences?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          acknowledgements?: { port_id?: string; channel_id?: string; sequence?: string; data?: string }[];
          pagination?: { next_key?: string; total?: string };
          height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_acknowledgements`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreChannelV1PacketAcknowledgement
     * @summary PacketAcknowledgement queries a stored packet acknowledgement hash.
     * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_acks/{sequence}
     */
    ibcCoreChannelV1PacketAcknowledgement: (
      channelId: string,
      portId: string,
      sequence: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          acknowledgement?: string;
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_acks/${sequence}`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreChannelV1PacketCommitments
 * @summary PacketCommitments returns all the packet commitments hashes associated
with a channel.
 * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments
 */
    ibcCoreChannelV1PacketCommitments: (
      channelId: string,
      portId: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          commitments?: { port_id?: string; channel_id?: string; sequence?: string; data?: string }[];
          pagination?: { next_key?: string; total?: string };
          height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_commitments`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreChannelV1UnreceivedAcks
 * @summary UnreceivedAcks returns all the unreceived IBC acknowledgements associated
with a channel and sequences.
 * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_ack_sequences}/unreceived_acks
 */
    ibcCoreChannelV1UnreceivedAcks: (
      channelId: string,
      portId: string,
      packetAckSequences: string[],
      params: RequestParams = {},
    ) =>
      this.request<
        { sequences?: string[]; height?: { revision_number?: string; revision_height?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_commitments/${packetAckSequences}/unreceived_acks`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreChannelV1UnreceivedPackets
 * @summary UnreceivedPackets returns all the unreceived IBC packets associated with a
channel and sequences.
 * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{packet_commitment_sequences}/unreceived_packets
 */
    ibcCoreChannelV1UnreceivedPackets: (
      channelId: string,
      portId: string,
      packetCommitmentSequences: string[],
      params: RequestParams = {},
    ) =>
      this.request<
        { sequences?: string[]; height?: { revision_number?: string; revision_height?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_commitments/${packetCommitmentSequences}/unreceived_packets`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreChannelV1PacketCommitment
     * @summary PacketCommitment queries a stored packet commitment hash.
     * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_commitments/{sequence}
     */
    ibcCoreChannelV1PacketCommitment: (
      channelId: string,
      portId: string,
      sequence: string,
      params: RequestParams = {},
    ) =>
      this.request<
        { commitment?: string; proof?: string; proof_height?: { revision_number?: string; revision_height?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_commitments/${sequence}`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreChannelV1PacketReceipt
 * @summary PacketReceipt queries if a given packet sequence has been received on the
queried chain
 * @request GET:/ibc/core/channel/v1/channels/{channel_id}/ports/{port_id}/packet_receipts/{sequence}
 */
    ibcCoreChannelV1PacketReceipt: (channelId: string, portId: string, sequence: string, params: RequestParams = {}) =>
      this.request<
        { received?: boolean; proof?: string; proof_height?: { revision_number?: string; revision_height?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/channels/${channelId}/ports/${portId}/packet_receipts/${sequence}`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreChannelV1ConnectionChannels
 * @summary ConnectionChannels queries all the channels associated with a connection
end.
 * @request GET:/ibc/core/channel/v1/connections/{connection}/channels
 */
    ibcCoreChannelV1ConnectionChannels: (
      connection: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          channels?: {
            state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN" | "STATE_CLOSED";
            ordering?: "ORDER_NONE_UNSPECIFIED" | "ORDER_UNORDERED" | "ORDER_ORDERED";
            counterparty?: { port_id?: string; channel_id?: string };
            connection_hops?: string[];
            version?: string;
            port_id?: string;
            channel_id?: string;
          }[];
          pagination?: { next_key?: string; total?: string };
          height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/channel/v1/connections/${connection}/channels`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreClientV1ClientParams
     * @summary ClientParams queries all parameters of the ibc client.
     * @request GET:/ibc/client/v1/params
     */
    ibcCoreClientV1ClientParams: (params: RequestParams = {}) =>
      this.request<
        { params?: { allowed_clients?: string[] } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/client/v1/params`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreClientV1ClientStates
     * @summary ClientStates queries all the IBC light clients of a chain.
     * @request GET:/ibc/core/client/v1/client_states
     */
    ibcCoreClientV1ClientStates: (
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          client_states?: { client_id?: string; client_state?: { "@type"?: string } }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/client/v1/client_states`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreClientV1ClientState
     * @summary ClientState queries an IBC light client.
     * @request GET:/ibc/core/client/v1/client_states/{client_id}
     */
    ibcCoreClientV1ClientState: (clientId: string, params: RequestParams = {}) =>
      this.request<
        {
          client_state?: { "@type"?: string };
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/client/v1/client_states/${clientId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreClientV1ClientStatus
     * @summary Status queries the status of an IBC client.
     * @request GET:/ibc/core/client/v1/client_status/{client_id}
     */
    ibcCoreClientV1ClientStatus: (clientId: string, params: RequestParams = {}) =>
      this.request<{ status?: string }, { code?: number; message?: string; details?: { "@type"?: string }[] }>({
        path: `/ibc/core/client/v1/client_status/${clientId}`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreClientV1ConsensusStates
 * @summary ConsensusStates queries all the consensus state associated with a given
client.
 * @request GET:/ibc/core/client/v1/consensus_states/{client_id}
 */
    ibcCoreClientV1ConsensusStates: (
      clientId: string,
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          consensus_states?: {
            height?: { revision_number?: string; revision_height?: string };
            consensus_state?: { "@type"?: string };
          }[];
          pagination?: { next_key?: string; total?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/client/v1/consensus_states/${clientId}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreClientV1ConsensusState
 * @summary ConsensusState queries a consensus state associated with a client state at
a given height.
 * @request GET:/ibc/core/client/v1/consensus_states/{client_id}/revision/{revision_number}/height/{revision_height}
 */
    ibcCoreClientV1ConsensusState: (
      clientId: string,
      revisionNumber: string,
      revisionHeight: string,
      query?: { latest_height?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          consensus_state?: { "@type"?: string };
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/client/v1/consensus_states/${clientId}/revision/${revisionNumber}/height/${revisionHeight}`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreClientV1UpgradedClientState
     * @summary UpgradedClientState queries an Upgraded IBC light client.
     * @request GET:/ibc/core/client/v1/upgraded_client_states
     */
    ibcCoreClientV1UpgradedClientState: (params: RequestParams = {}) =>
      this.request<
        { upgraded_client_state?: { "@type"?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/client/v1/upgraded_client_states`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreClientV1UpgradedConsensusState
     * @summary UpgradedConsensusState queries an Upgraded IBC consensus state.
     * @request GET:/ibc/core/client/v1/upgraded_consensus_states
     */
    ibcCoreClientV1UpgradedConsensusState: (params: RequestParams = {}) =>
      this.request<
        { upgraded_consensus_state?: { "@type"?: string } },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/client/v1/upgraded_consensus_states`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreConnectionV1ClientConnections
 * @summary ClientConnections queries the connection paths associated with a client
state.
 * @request GET:/ibc/core/connection/v1/client_connections/{client_id}
 */
    ibcCoreConnectionV1ClientConnections: (clientId: string, params: RequestParams = {}) =>
      this.request<
        {
          connection_paths?: string[];
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/connection/v1/client_connections/${clientId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreConnectionV1Connections
     * @summary Connections queries all the IBC connections of a chain.
     * @request GET:/ibc/core/connection/v1/connections
     */
    ibcCoreConnectionV1Connections: (
      query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.count_total"?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        {
          connections?: {
            id?: string;
            client_id?: string;
            versions?: { identifier?: string; features?: string[] }[];
            state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN";
            counterparty?: { client_id?: string; connection_id?: string; prefix?: { key_prefix?: string } };
            delay_period?: string;
          }[];
          pagination?: { next_key?: string; total?: string };
          height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/connection/v1/connections`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Query
     * @name IbcCoreConnectionV1Connection
     * @summary Connection queries an IBC connection end.
     * @request GET:/ibc/core/connection/v1/connections/{connection_id}
     */
    ibcCoreConnectionV1Connection: (connectionId: string, params: RequestParams = {}) =>
      this.request<
        {
          connection?: {
            client_id?: string;
            versions?: { identifier?: string; features?: string[] }[];
            state?: "STATE_UNINITIALIZED_UNSPECIFIED" | "STATE_INIT" | "STATE_TRYOPEN" | "STATE_OPEN";
            counterparty?: { client_id?: string; connection_id?: string; prefix?: { key_prefix?: string } };
            delay_period?: string;
          };
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/connection/v1/connections/${connectionId}`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreConnectionV1ConnectionClientState
 * @summary ConnectionClientState queries the client state associated with the
connection.
 * @request GET:/ibc/core/connection/v1/connections/{connection_id}/client_state
 */
    ibcCoreConnectionV1ConnectionClientState: (connectionId: string, params: RequestParams = {}) =>
      this.request<
        {
          identified_client_state?: { client_id?: string; client_state?: { "@type"?: string } };
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/connection/v1/connections/${connectionId}/client_state`,
        method: "GET",
        ...params,
      }),

    /**
 * No description
 * 
 * @tags Query
 * @name IbcCoreConnectionV1ConnectionConsensusState
 * @summary ConnectionConsensusState queries the consensus state associated with the
connection.
 * @request GET:/ibc/core/connection/v1/connections/{connection_id}/consensus_state/revision/{revision_number}/height/{revision_height}
 */
    ibcCoreConnectionV1ConnectionConsensusState: (
      connectionId: string,
      revisionNumber: string,
      revisionHeight: string,
      params: RequestParams = {},
    ) =>
      this.request<
        {
          consensus_state?: { "@type"?: string };
          client_id?: string;
          proof?: string;
          proof_height?: { revision_number?: string; revision_height?: string };
        },
        { code?: number; message?: string; details?: { "@type"?: string }[] }
      >({
        path: `/ibc/core/connection/v1/connections/${connectionId}/consensus_state/revision/${revisionNumber}/height/${revisionHeight}`,
        method: "GET",
        ...params,
      }),
  };
}
