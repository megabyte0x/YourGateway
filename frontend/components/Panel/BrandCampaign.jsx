import React from "react";
import Wrapper from "../Wrapper";
import Link from "next/link";

const BrandCampaign = ({ brand_slug }) => {
  return (
    <div className="basis-[75%] w-full font-inter text-black py-5">
      <Wrapper>
        <nav className="w-full flex justify-between">
          <h2 className="text-xl font-bold my-auto">Your Campaign</h2>
          <Link
            href={`/brand/${brand_slug}/event/create`}
            className="bg-black text-white p-3 rounded-3xl hover:scale-95 duration-300"
          >
            Create Campaign
          </Link>
        </nav>
      </Wrapper>
    </div>
  );
};

export default BrandCampaign;
