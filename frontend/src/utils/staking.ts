import { Api, CosmosStakingV1Beta1Pool } from "@/rest/cosmos";



async function pool(
    cosmos_rest: string
): Promise<CosmosStakingV1Beta1Pool> {
    const queryClient = new Api({ baseUrl: cosmos_rest });
    const response = await queryClient.cosmos.cosmosStakingV1Beta1Pool({ format: "json" });
    return response.data as CosmosStakingV1Beta1Pool;
}

export {
    pool
}