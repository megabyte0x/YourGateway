import React from "react";
import Wrapper from "@/components/Wrapper";
import EventInfo from "@/components/Panel/EventInfo";

const BrandEventDetailPage = ({
  showSummary,
  showAnalytics,
  showUsers,
  showVerifyTicket,
}) => {
  return (
    <div className="basis-[80%] w-full py-10">
      <Wrapper className="px-4">
        {showSummary && (
          <div>
            <h1 className="text-2xl font-bold my-2">Music Event</h1>
            <img
              src="/event-1.jpg"
              className="w-[250px] h-[250px] rounded-lg my-7"
            />
            <h3 className="text-lg my-2">
              lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor
              ipsum dolor ipsum dolor ipsum dolor.
            </h3>
            <label className="text-lg font-semibold">Ticket Cost</label>
            <h3 className="text-lg my-2">$ 5.99</h3>
            <label className="text-lg font-semibold">Event Date</label>
            <h3 className="text-lg my-2">12/12/2021</h3>
            <label className="text-lg font-semibold">Event Time</label>
            <h3 className="text-lg my-2">12:00 PM</h3>
            <label className="text-lg font-semibold">Event Location</label>
            <h3 className="text-lg my-2">Online</h3>
            <label className="text-lg font-semibold">Tickets Redeemed</label>
            <h3 className="text-lg my-2">150/300</h3>
          </div>
        )}
        {showAnalytics && <div>showAnalytics</div>}
        {showUsers && <div>showUsers</div>}
        {showVerifyTicket && <div>showVerifyTicket</div>}
      </Wrapper>
    </div>
  );
};

export default BrandEventDetailPage;
