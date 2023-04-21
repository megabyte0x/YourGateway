import React from "react";
import Wrapper from "@/components/Wrapper";
import CreateBrand from "@/components/Form/CreateBrand";

const BrandCreate = () => {
  return (
    <div className="w-full bg-[#F5F5F5] font-inter py-5 md:py-10">
      <Wrapper>
        <div className="w-[80%] mx-auto my-5">
          <CreateBrand />
        </div>
      </Wrapper>
    </div>
  );
};

export default BrandCreate;
