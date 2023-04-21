import React from "react";
import Head from "next/head";
import Wrapper from "@/components/Wrapper";

export default function Home() {
  return (
    <main>
      <Head>
        <title>FunTix</title>
      </Head>
      <div className="w-full my-5">
        <Wrapper className="flex justify-around font-inter py-10">
          <div className="basis-[40%] my-auto">
            <h1 className="text-4xl font-semibold my-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              non quiss
            </h1>
            <button className="bg-[#000000] my-5 rounded-xl text-white px-5 py-2 duration-300 hover:scale-95 min-w-fit w-[100px] ">
              Get Early Access
            </button>
          </div>
          <div className="basis-[40%]">
            <img src="/demo-hero.jpg" alt="hero" className="rounded-lg" />
          </div>
        </Wrapper>
      </div>
    </main>
  );
}
