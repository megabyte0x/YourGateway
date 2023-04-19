import HeroText from "@/components/HeroText";
import HeroImg from "@/components/HeroImg";
import Headline from "@/components/Headline";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import TopProducts from "@/components/TopProducts";
import MarketPlace from "@/components/MarketPlace";

export default function Home() {
  const SocialLoginDynamic = dynamic(() => import("../components/Header"), {
    ssr: false,
  });
  // const SocialLoginDynamic = dynamic(
  //   () => import("../components/Header").then((res) => res.default),
  //   {
  //     ssr: false,
  //   }
  // );

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <SocialLoginDynamic />
      </Suspense>
      <div className="w-full max-w-[1280px] mx-auto px-3 md:px-7 flex h-[600px] max-md:h-[500px]">
        <HeroText />
        <HeroImg />
      </div>
      <Headline text="Must Attend" />
      <TopProducts />
      <Headline text="Event MarketPlace" />
      <MarketPlace />
      <Headline text="Top Events" />
    </main>
  );
}
