import React from "react";
import Wrapper from "../Wrapper";
import { HiOutlinePencil } from "react-icons/hi";

const BrandInfo = ({ name }) => {
  return (
    <div className="basis-[25%] w-full font-inter text-black border-r-2">
      <Wrapper className="relative flex flex-col py-10 content-center text-center ">
        <div className="rounded-full w-44 h-44 mx-auto mb-5 absolute -top-20 left-[4.5rem]  border-8 border-white">
          <img
            src="/demo-profile.jpeg"
            alt="brand-cover"
            className="rounded-full "
          />
        </div>
        <h2 className="text-2xl font-bold my-1 mt-16">Polygon</h2>
        <h2 className="text-base text-[#727272]">@{name}</h2>
        <h3 className="text-base my-2">
          lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quiss
        </h3>
        <button className="outline-none border rounded-3xl flex border-black p-2 w-[60%] py-auto mx-auto font-semibold hover:scale-95 duration-200 my-2">
          <HiOutlinePencil size={"1rem"} className="my-auto mx-1" />
          Edit Profile
        </button>
        <h2 className="text-[#6B6B6B] text-base mt-2 font-bold uppercase">
          Total Revenue
        </h2>
        <h2 className="text-2xl font-bold my-1">$ 20,000</h2>
        <h2 className="text-[#6B6B6B] text-base mt-2 font-bold uppercase">
          Withdrawable Revenue
        </h2>
        <h2 className="text-2xl font-bold my-1">$ 1,000</h2>
        <button className="outline-none border rounded-3xl  border-black p-2 w-[60%] py-auto mx-auto font-semibold hover:scale-95 duration-200 my-2">
          Withdraw
        </button>
      </Wrapper>
    </div>
  );
};

export default BrandInfo;
