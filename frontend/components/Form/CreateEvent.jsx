import React from "react";
import Wrapper from "../Wrapper";

const CreateEvent = () => {
  /**
   * TODO:
   * 1. Fix all ids
   * 2. Add on change event to all inputs
   */
  return (
    <div className="w-full">
      <Wrapper className="bg-white rounded-xl py-5">
        <h1 className="text-2xl font-bold my-5 mb-8">Create an event</h1>
        {/* Create Brand Form  */}
        <form className="w-[70%]">
          <label>
            <h3 className="text-sm font-semibold my-1">Event Name</h3>
          </label>
          <input
            type="text"
            name="event_name"
            className="border border-[#CFCFCF] my-2 mb-7 p-3 rounded-lg w-full outline-none text-base"
            placeholder="Event Name"
          />
          <label>
            <h3 className="text-sm font-semibold my-1">Event Type</h3>
          </label>

          <div className="flex my-3 mb-7">
            <button className="border bg-black border-[#CFCFCF] text-white p-3 rounded-lg w-[20%]  outline-none text-base">
              Online
            </button>
            <button className="border border-[#CFCFCF] text-[#6C757D] p-3 rounded-lg w-[20%] mx-5 outline-none text-base">
              Offline
            </button>
          </div>
          <label>
            <h3 className="text-sm font-semibold my-1">Event Location</h3>
          </label>
          <input
            type="text"
            name="event_name"
            className="border border-[#CFCFCF] my-2 mb-7 p-3 rounded-lg w-full outline-none text-base"
            placeholder="ABC Street, 123"
          />

          <label for="inputCollectableImage">
            <h3 className="text-sm font-semibold my-1">Collectable Image</h3>
            <img
              src="/profile-input-default.svg"
              className="my-3 cursor-pointer mb-7"
            />
          </label>

          <input
            type="file"
            id="inputCollectableImage"
            accept="image/*"
            name="profile_img"
            className="hidden"
          />

          <label for="inputCover">
            <h3 className="text-sm font-semibold my-1">Cover Image</h3>
            <img
              src="/cover-input-default.svg"
              className="my-3 mb-7 cursor-pointer"
            />
          </label>
          <input
            type="file"
            id="inputCover"
            accept="image/*"
            name="cover_img"
            className="hidden"
          />

          <label>
            <h3 className="text-sm font-semibold my-1">Collectible Type</h3>
          </label>

          <div className="flex my-3 mb-7">
            <button className="border bg-black border-[#CFCFCF] text-white p-3 rounded-lg w-[20%]  outline-none text-base">
              Free
            </button>
            <button className="border border-[#CFCFCF] text-[#6C757D] p-3 rounded-lg w-[20%] mx-5 outline-none text-base">
              Paid
            </button>
          </div>

          <label>
            <h3 className="text-sm font-semibold my-1">Collectible Price</h3>
          </label>
          <input
            type="number"
            name="event_name"
            className="border border-[#CFCFCF] my-2 mb-7 p-3 rounded-lg w-full outline-none text-base"
            placeholder="$ 100"
          />
          <label>
            <h3 className="text-sm font-semibold my-1">Collectible Amount</h3>
          </label>
          <input
            type="number"
            name="event_name"
            className="border border-[#CFCFCF] my-2 mb-7 p-3 rounded-lg w-full outline-none text-base"
            placeholder="3000"
          />
          <label>
            <h3 className="text-sm font-semibold my-1">Start Date</h3>
          </label>
          <div className="flex mb-7 justify-between">
            <input
              type="date"
              name="event_name"
              className="border border-[#CFCFCF] my-2 p-3 rounded-lg w-[47%] outline-none text-base"
            />
            <input
              type="time"
              name="event_name"
              className="border border-[#CFCFCF] my-2 p-3 rounded-lg w-[47%] outline-none text-base"
              placeholder="3000"
            />
          </div>
          <label>
            <h3 className="text-sm font-semibold my-1">End Date</h3>
          </label>
          <div className="flex mb-7 justify-between">
            <input
              type="date"
              name="event_name"
              className="border border-[#CFCFCF] my-2 p-3 rounded-lg w-[47%] outline-none text-base"
            />
            <input
              type="time"
              name="event_name"
              className="border border-[#CFCFCF] my-2 p-3 rounded-lg w-[47%] outline-none text-base"
              placeholder="3000"
            />
          </div>

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

export default CreateEvent;
