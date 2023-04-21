import React from "react";
import Wrapper from "@/components/Wrapper";
import CreateEvent from "@/components/Form/CreateEvent";

const EventCreate = () => {
  return (
    <div className="w-full bg-[#F5F5F5] font-inter py-5 md:py-10">
      <Wrapper>
        <div className="w-[80%] mx-auto my-5">
          <CreateEvent />
        </div>
      </Wrapper>
    </div>
  );
};

export default EventCreate;
