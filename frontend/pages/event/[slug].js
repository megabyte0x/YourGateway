import React from "react";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import EventInfo from "@/components/Panel/EventInfo";

const EventDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src="/demo-cover-3.png"
          alt="brand-cover"
          className="w-[100vw] min-h-[40vh] h-[300px] object-cover shadow-xl "
        />
      </div>
      <Wrapper className="py-10 flex">
        <div className="basis-[47%] flex justify-center">
          <img src="/event-1.jpg" className="w-[350px] h-[350px] rounded-lg" />
        </div>
        <EventInfo />
      </Wrapper>
    </div>
  );
};

export default EventDetailPage;
