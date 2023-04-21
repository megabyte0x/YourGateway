import React, { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { useAccount, useConnect } from "wagmi";

const Header = () => {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  return (
    <header
      className={`w-full h-[50px] md:h-[60px] flex items-center justify-between font-inter border-b-1`}
    >
      <Wrapper className="h-[40px] flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h2 className="font-monalt text-2xl font-bold">Funtix</h2>
        </Link>
        {/* Logo End */}

        {/* Wallet Connect */}
        {connectors.map((connector) => (
          <button
            disabled={!connector.ready}
            key={connector.id}
            className="bg-black rounded-3xl text-white px-5 py-2 duration-300 hover:scale-95 min-w-fit w-[100px] "
            onClick={() => connect({ connector })}
          >
            {isConnected ? "Connected" : "Sign In"}
          </button>
        ))}
        {/*  Wallet Connect End  */}
      </Wrapper>
    </header>
  );
};

export default Header;
