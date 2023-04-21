import { ChainId } from "@biconomy/core-types";

import SmartAccount from "@biconomy/smart-account";

//TODO: Import the provider from the social login.

export let activeChainId = ChainId.POLYGON_MUMBAI;
export const supportedChains = [
    ChainId.POLYGON_MUMBAI,
];

let options = {
    activeNetworkId: activeChainId,
    supportedNetworksIds: supportedChains,
    networkConfig: [
        {
            chainId: ChainId.GOERLI,
            dappAPIKey: '<DAPP_API_KEY>',
        }
    ]
}

let smartAccount = new SmartAccount(provider, options);
smartAccount = await smartAccount.init();

export default smartAccount;