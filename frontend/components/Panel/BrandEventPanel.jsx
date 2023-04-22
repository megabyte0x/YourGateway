import React from "react";
import Wrapper from "@/components/Wrapper";

const BrandEventPanel = ({
  showSummary,
  setShowSummary,
  showAnalytics,
  setShowAnalytics,
  showVerifyTicket,
  setShowVerifyTicket,
  showUsers,
  setShowUsers,
}) => {
  return (
    <div className="basis-[20%] w-full h-screen  border-r-2">
      <Wrapper className=" flex flex-col justify-start text-start py-10 ">
        <button
          className={`${
            showSummary ? "text-black font-bold" : "text-[#4B5563]"
          } text-right text-base my-2 hover:scale-95 duration-200`}
          onClick={() => {
            setShowAnalytics(false);
            setShowSummary(true);
            setShowUsers(false);
            setShowVerifyTicket(false);
          }}
        >
          Summary
        </button>
        <button
          className={`${
            showAnalytics ? "text-black font-bold" : "text-[#4B5563]"
          } text-right text-base my-2 hover:scale-95 duration-200`}
          onClick={() => {
            setShowAnalytics(true);
            setShowSummary(false);
            setShowUsers(false);
            setShowVerifyTicket(false);
          }}
        >
          Analytics
        </button>
        <button
          className={`${
            showVerifyTicket ? "text-black font-bold " : "text-[#4B5563]"
          } text-right text-base my-2 hover:scale-95 duration-200`}
          onClick={() => {
            setShowAnalytics(false);
            setShowSummary(false);
            setShowUsers(false);
            setShowVerifyTicket(true);
          }}
        >
          Verify a Ticket
        </button>
        <button
          className={`${
            showUsers ? "text-black font-bold" : "text-[#4B5563]"
          } text-right text-base my-2 hover:scale-95 duration-200`}
          onClick={() => {
            setShowAnalytics(false);
            setShowSummary(false);
            setShowUsers(true);
            setShowVerifyTicket(false);
          }}
        >
          Registered User
        </button>
      </Wrapper>
    </div>
  );
};

export default BrandEventPanel;
