import { ChainId } from '@biconomy/core-types';
import SmartAccount from '@biconomy/smart-account';
import { useSigner } from 'wagmi';

import { getProvider } from './bico_socialLogin';

// Get the Smart Account instance
async function getSmartAccount() {
    const { data: signer } = useSigner();
    const provider = signer.provider;
    // const provider = await getProvider();

    const activeChainId = ChainId.POLYGON_MUMBAI;
    const supportedChains = [
        ChainId.POLYGON_MUMBAI,
    ];



    let options = {
        activeNetworkId: activeChainId,
        supportedNetworksIds: supportedChains,
        networkConfig: [
            {
                chainId: ChainId.POLYGON_MUMBAI,
                dappAPIKey: '<DAPP_API_KEY>',
            }
        ]
    }

    let smartAccount = new SmartAccount(provider, options);
    smartAccount = await smartAccount.init();

    return smartAccount;
}

export const smartAccount = getSmartAccount();