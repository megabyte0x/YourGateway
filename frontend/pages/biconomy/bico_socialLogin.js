import SocialLogin from "@biconomy/web3-auth";
import { ethers } from "ethers";

import "@biconomy/web3-auth/dist/src/style.css"

// create an instance of SocialLogin 
const socialLogin = new SocialLogin();

// initialize the social login instance and open the UI widget
export async function openWallet() {
    await socialLogin.init(
        {
            chainId: ethers.utils.hexValue(80001),
            network: 'testnet',
        }
    );
    // pops up the UI widget
    socialLogin.showWallet();
}

// get the provider from the social login instance
export async function getProvider() {
    if (!socialLogin?.provider) return;
    // create a provider from the social login provider that 
    // will be used by the smart account package of the Biconomy SDK
    const provider = new ethers.providers.Web3Provider(
        socialLogin.provider,
    );
    return provider;
}

