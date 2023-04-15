import React from "react";
import Image from "next/image";
const create = () => {
  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto min-h-[500px]">
      <form className="bg-[#FFF253] rounded-lg border-2 border-[#7843E8] border-dashed my-5 md:my-10 px-5 w-[80%] mx-auto text-black flex flex-col py-5 font-monument_reg ">
        <h2 className="text-2xl my-2 text-[#7843E8] font-otf ">Create Event</h2>
        <label className="text-sm font-thin my-2">Name</label>
        <input
          type="text"
          placeholder="Enter event name"
          className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[60%]  "
        />
        <label className="text-sm font-thin my-2">Sub Name</label>
        <input
          type="text"
          placeholder="Enter event sub name"
          className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[60%] "
        />
        <label className="text-sm font-thin my-2">Description</label>
        <input
          type="text"
          placeholder="Enter event description"
          className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[60%]"
        />
        <label className="text-sm font-thin my-2">Price</label>
        <input
          type="number"
          placeholder="Enter ticket price"
          className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[60%] "
        />
        <label className="text-sm font-thin my-2">Start Date</label>
        <input
          type="date"
          className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[40%]"
        />
        <label className="text-sm font-thin my-2">End Date</label>
        <input
          type="date"
          className=" border border-black mb-2  bg-[#FFF89F] p-2 rounded-lg text-sm outline-none w-[40%]"
        />
        <label className="text-sm font-thin my-2">Image</label>
        <Image
          src={"/Image-placeholder.png"}
          width="100"
          height="100"
          alt="ticket-img"
        />
        <input type="file" />
        <button className="bg-[#7843E8] rounded-3xl text-white p-3 my-7 hover:scale-95 text-xs gap-10 shadow-[5px_5px_0px_#000000] duration-200 font-monument_reg border border-black  w-[30%] ">
          Create
        </button>
      </form>
    </div>
  );
};

export default create;
