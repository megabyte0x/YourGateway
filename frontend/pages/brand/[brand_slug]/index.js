import React from "react";
import { useRouter } from "next/router";
import BrandInfo from "@/components/Panel/BrandInfo";
import BrandCampaign from "@/components/Panel/BrandCampaign";

const BrandHomePage = () => {
  const router = useRouter();
  const { brand_slug } = router.query;

  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src="/demo-cover.jpg"
          alt="brand-cover"
          className="w-[100vw] min-h-[40vh] h-[200px] object-cover "
        />
      </div>
      <div className="flex justify-between">
        <BrandInfo name={brand_slug} />
        <BrandCampaign brand_slug={brand_slug} />
      </div>
    </div>
  );
};

export default BrandHomePage;
