import React from "react";
import Wrapper from "@/components/Wrapper";
import { useRouter } from "next/router";
import BrandEventDetailPage from "@/components/Panel/BrandEventDetailPage";
import BrandEventPanel from "@/components/Panel/BrandEventPanel";

const EventDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [showSummary, setShowSummary] = React.useState(true);
  const [showAnalytics, setShowAnalytics] = React.useState(false);
  const [showVerifyTicket, setShowVerifyTicket] = React.useState(false);
  const [showUsers, setShowUsers] = React.useState(false);

  return (
    <div className="w-full">
      <div className="w-full">
        <img
          src="/demo-cover-3.png"
          alt="brand-cover"
          className="w-[100vw] min-h-[40vh] h-[300px] object-cover shadow-xl "
        />
      </div>
      <Wrapper className="flex ">
        <BrandEventPanel
          showSummary={showSummary}
          showAnalytics={showAnalytics}
          showUsers={showUsers}
          showVerifyTicket={showVerifyTicket}
          setShowSummary={setShowSummary}
          setShowAnalytics={setShowAnalytics}
          setShowVerifyTicket={setShowVerifyTicket}
          setShowUsers={setShowUsers}
        />
        <BrandEventDetailPage
          showSummary={showSummary}
          showAnalytics={showAnalytics}
          showUsers={showUsers}
          showVerifyTicket={showVerifyTicket}
        />
      </Wrapper>
    </div>
  );
};

export default EventDetailPage;
