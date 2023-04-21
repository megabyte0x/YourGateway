import React from "react";
import Wrapper from "../Wrapper";

const CreateBrand = () => {
  return (
    <div className="w-full">
      <Wrapper className="bg-white rounded-xl py-5">
        <h1 className="text-2xl font-bold my-5 mb-8">Create an account</h1>
        {/* Create Brand Form  */}
        <form className="w-[70%]">
          <label>
            <h3 className="text-sm font-semibold my-1">Brand Name</h3>
          </label>
          <input
            type="text"
            name="brand_name"
            className="border border-[#CFCFCF] my-2 mb-7 p-3 rounded-lg w-full outline-none text-base"
            placeholder="Brand Name"
          />

          <label>
            <h3 className="text-sm font-semibold my-1">UserName</h3>
          </label>
          <input
            type="text"
            className="border border-[#CFCFCF] my-2 mb-7 p-3 rounded-lg w-full outline-none text-base"
            name="brand_slug_name"
            placeholder="Username"
          />

          <label for="inputProfile">
            <h3 className="text-sm font-semibold my-1">Profile Image</h3>
            <img
              src="/profile-input-default.svg"
              className="my-3 cursor-pointer mb-7"
            />
          </label>

          <input
            type="file"
            id="inputProfile"
            accept="image/*"
            name="profile_img"
            className="hidden"
          />

          <label className="mb-7" for="inputCover">
            <h3 className="text-sm font-semibold my-1">Cover Image</h3>
            <img
              src="/cover-input-default.svg"
              className="my-3 cursor-pointer"
            />
          </label>
          <input
            type="file"
            id="inputCover"
            accept="image/*"
            name="cover_img"
            className="hidden"
          />

          <button
            type="submit"
            className="bg-[#000000] my-5 rounded-xl text-white px-5 py-2 duration-300 hover:scale-95 min-w-fit w-[120px] font-normal"
          >
            Create
          </button>
        </form>
        {/* Create Brand Form End */}
      </Wrapper>
    </div>
  );
};

export default CreateBrand;
