import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import { ethers } from "ethers";
import MenuMobile from "./MenuMobile";
import SocialLogin from "@biconomy/web3-auth";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState("");
  const [socialLoginSDK, setSocialLoginSDK] = useState(null);

  const connectWeb3 = useCallback(async () => {
    if (typeof window === "undefined") return;
    console.log("socialLoginSDK", socialLoginSDK);
    if (socialLoginSDK?.provider) {
      const web3Provider = new ethers.providers.Web3Provider(
        socialLoginSDK.provider
      );
      setProvider(web3Provider);
      const accounts = await web3Provider.listAccounts();
      setAccount(accounts[0]);
      return;
    }
    if (socialLoginSDK) {
      socialLoginSDK.showWallet();
      return socialLoginSDK;
    }
    const sdk = new SocialLogin();
    await sdk.init({
      chainId: ethers.utils.hexValue(80001),
    });
    setSocialLoginSDK(sdk);
    sdk.showWallet();
    return socialLoginSDK;
  }, [socialLoginSDK]);

  const disconnectWeb3 = async () => {
    if (!socialLoginSDK || !socialLoginSDK.web3auth) {
      console.error("Web3Modal not initialized.");
      return;
    }
    await socialLoginSDK.logout();
    socialLoginSDK.hideWallet();
    setProvider(undefined);
    setAccount("");
  };
  useEffect(() => {
    const interval = setInterval(async () => {
      if (account) {
        clearInterval(interval);
      }
      if (socialLoginSDK?.provider && !account) {
        connectWeb3();
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [account, connectWeb3, socialLoginSDK]);

  useEffect(() => {
    console.log("hidelwallet");
    if (socialLoginSDK && socialLoginSDK.provider) {
      socialLoginSDK.hideWallet();
    }
  }, [account, socialLoginSDK]);

  return (
    <header
      className={`w-full h-[60px] md:h-[80px] border-b flex items-center justify-between z-20  top-0 transition-transform duration-300 font-monument_reg `}
    >
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto h-[60px] flex justify-between items-center">
        <Link href="/">
          <h2 className="text-base">FunTix</h2>
        </Link>
        <Menu />
        {mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}
        <div className="flex font-monument_reg">
          <button
            className="bg-white rounded-3xl text-black px-5 md:px-8 py-2 hover:scale-95 text-sm gap-10 shadow-[5px_5px_0px_#7843E8] duration-200 hover:shadow-[2px_2px_0px_#7843E8] "
            onClick={account ? disconnectWeb3 : connectWeb3}
          >
            {!account ? "Sign In" : "Sign Out"}
          </button>
          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
