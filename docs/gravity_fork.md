# Gravity fork

The gravity bridge by default contain cosmos-originating tokens and eth-originating tokens. The eth-originating tokens is seen in cosmos as `gravity<contract-address>`. The cosmos-originating tokens appear as normal tokens in cosmos (e.g. ATOM or TFT), and is mapped to the BSC token contract address at genesis or later by adding a new denom. The change in the fork makes it possible to add a normal eth-originated cosmos currency with the mapping to the BSC token contract address.

The other changes to the orchestrator are mainly to work with pancakeswap in BSC to determine the profitablity of a batch. It's not needed if the bridge fees is accepted above a fixed amount (i.e. 3TFTs).
