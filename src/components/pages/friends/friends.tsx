import { FaChevronRight } from "react-icons/fa";
import { Card } from "../boosts/components";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { initializeBackButton } from "@/utils/back";

export const FriendsPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBackClick = () => {
      navigate("/");
    };

    const cleanup = initializeBackButton(handleBackClick);

    return () => {
      cleanup();
    };
  }, [navigate]);

  return (
    <div className="p-5 flex flex-col justify-between">
      <div className="text-[32px] mb-5 text-center font-semibold">
        Friends Zone
      </div>
      <Card className="flex items-center justify-between">
        <div className="text-[#fff000] text-[18px] flex items-center justify-between">
          +0&nbsp;
          <img
            src="/images/bitcoin.svg"
            alt="Bitcoin Icon"
            className="w-4 h-4"
          />
          &nbsp; | &nbsp;Top 300 leaders
        </div>
        <div>
          <FaChevronRight />
        </div>
      </Card>

      <div className="my-5">
        <div className="text-[22px] text-[#fff000] mb-2">
          Invite frens to get bonuses
        </div>
        <Card>
          <div className="flex items-center gap-3">
            <img
              src="/images/bitcoin.svg"
              alt="Bitcoin Icon"
              className="w-10 h-10"
            />
            <div className="flex flex-col justify-start">
              <div>Invite friends</div>
              <div className="flex items-center justify-start">
                <img
                  src="/images/bitcoin.svg"
                  alt="Bitcoin Icon"
                  className="w-4 h-4"
                />
                &nbsp;
                <span className="text-[#fff000]">2,500</span>&nbsp; for you and
                friends
              </div>
            </div>
          </div>
          <div className="text-[18px] text-center my-2">Open details</div>
        </Card>
        <Button className="bg-[#fff000]  bg-opacity-80 rounded-[18px] text-center w-full mt-2">
          Invite Friends
        </Button>
      </div>

      <div className="my-5">
        <div className="text-[22px] mb-2">Friends list</div>
        <Card>
          <div className="text-[22px] text-[#fff000] text-center my-5">
            You have not invited friends
          </div>
        </Card>
      </div>
    </div>
  );
};
