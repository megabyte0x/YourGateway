import React from "react";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import EventCard from "@/components/Card/EventCard";

const EventDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src="/demo-cover-3.png"
          alt="brand-cover"
          className="w-[100vw] min-h-[40vh] h-[300px] object-cover "
        />
      </div>
      <Wrapper className="py-5">
        <h2 className="text-lg font-bold my-2">Available Events for you</h2>
        <div className="grid grid-flow-row grid-cols-4 gap-4 my-2">
          <EventCard img="/event-1.jpg" />
          <EventCard img="/event-2.jpg" />
          <EventCard img="/event-3.jpg" />
          <EventCard img="/event-2.jpg" />
          <EventCard img="/event-1.jpg" />
        </div>
        <h2 className="text-lg font-bold mt-7">My Collectibles</h2>
        <div className="grid grid-flow-row grid-cols-4 gap-4 my-5">
          <EventCard img="/event-1.jpg" />
          <EventCard img="/event-3.jpg" />

          <EventCard img="/event-1.jpg" />
        </div>
      </Wrapper>
    </div>
  );
};

export default EventDetailPage;
