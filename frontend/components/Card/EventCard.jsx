import React from "react";
import Wrapper from "@/components/Wrapper";

const EventCard = ({ img }) => {
  return (
    <div className="rounded-xl flex flex-col hover:scale-95 duration-200 bg-white font-inter shadow-xl">
      <img src={img} className="basis-[50%] rounded-t-xl" />
      <Wrapper className="py-2">
        <h2 className="text-xl font-bold">Music Show </h2>
        <ul className="list-disc my-1 px-5">
          <li>Offline Event</li>
          <li>Free food</li>
        </ul>
        <button className="bg-[#FBBF24] text-white rounded-xl py-2 my-1 w-full">
          View Event
        </button>
      </Wrapper>
    </div>
  );
};

export default EventCard;
