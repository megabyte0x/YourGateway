import HeroText from "@/components/HeroText";
import HeroImg from "@/components/HeroImg";
import Headline from "@/components/Headline";
import TopProducts from "@/components/TopProducts";
import MarketPlace from "@/components/MarketPlace";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-[1280px] px-3 md:px-7 flex h-[600px] max-md:h-[500px]">
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
