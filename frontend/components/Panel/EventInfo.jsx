import React from "react";
import Wrapper from "@/components/Wrapper";
const EventInfo = () => {
  return (
    <div>
      <Wrapper>
        <h1 className="text-2xl font-bold">Music Event</h1>
        <h3 className="text-base my-2">
          lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor
          ipsum dolor ipsum dolor ipsum dolor.
        </h3>
        <label className="text-base font-semibold">Ticket Cost</label>
        <h3 className="text-base my-2">$ 5.99</h3>
        <label className="text-base font-semibold">Event Date</label>
        <h3 className="text-base my-2">12/12/2021</h3>
        <label className="text-base font-semibold">Event Time</label>
        <h3 className="text-base my-2">12:00 PM</h3>
        <label className="text-base font-semibold">Event Location</label>
        <h3 className="text-base my-2">Online</h3>
        <label className="text-base font-semibold">Tickets Redeemed</label>
        <h3 className="text-base my-2">150/300</h3>
        <button className="my-4 bg-black text-white px-3 py-2 rounded-2xl w-[120px] hover:scale-95 duration-200">
          Buy Now
        </button>
      </Wrapper>
    </div>
  );
};

export default EventInfo;
