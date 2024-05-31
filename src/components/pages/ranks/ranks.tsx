import { initializeBackButton } from "@/utils/back";
import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../boosts/components";
import { FaChevronRight } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MOCK_DAYS_DATA, MOCK_WEEKS_DATA } from "./mock";

export const RanksPage = () => {
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

  const daysContent = (): ReactNode => {
    return (
      <div className="flex flex-col gap-2">
        {MOCK_DAYS_DATA.map(({ coin, id, name }, idx) => (
          <div className="flex items-center gap-2" key={id}>
            <div className="text-[20px] font-bold mr-2">{idx + 1}</div>
            <img src="/images/avatar.svg" alt="Avatar" className="w-12 h-12" />
            <div className="">
              <div>{name}</div>
              <div className="flex items-center gap-1">
                <img
                  src="/images/bitcoin.svg"
                  alt="Bitcoin Icon"
                  className="w-4 h-4"
                />{" "}
                {coin}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const weeksContent = (): ReactNode => {
    return (
      <div className="flex flex-col gap-2">
        {MOCK_WEEKS_DATA.map(({ coin, id, name }, idx) => (
          <div className="flex items-center gap-2" key={id}>
            <div className="text-[20px] font-bold mr-2">{idx + 1}</div>
            <img src="/images/avatar.svg" alt="Avatar" className="w-12 h-12" />
            <div className="">
              <div>{name}</div>
              <div className="flex items-center gap-1">
                <img
                  src="/images/bitcoin.svg"
                  alt="Bitcoin Icon"
                  className="w-4 h-4"
                />{" "}
                {coin}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="mx-auto p-5 flex flex-col justify-between">
      <Card className="text-[#fff000] flex items-center justify-between font-semibold">
        <div className="">2,787,924 game players</div>
        <div className="flex items-center gap-1.5">
          <img
            src="/images/bitcoin.svg"
            alt="Bitcoin Icon"
            className="w-4 h-4"
          />
          Stats <FaChevronRight />
        </div>
      </Card>
      <div className="text-center text-[32px] font-semibold mt-3">
        Platinum league
      </div>
      <div className="text-center font-normal mt-0.5">from 2M Notcoin</div>
      <Tabs defaultValue="days" className="w-[400px] mx-auto bg-[#000111] my-5">
        <TabsList className="bg-[#000111] border border-[#fff000] w-full grid grid-cols-2">
          <TabsTrigger
            value="days"
            className="data-[state=active]:bg-[#fff000]"
          >
            Days
          </TabsTrigger>
          <TabsTrigger
            value="weeks"
            className="data-[state=active]:bg-[#fff000]"
          >
            Weeks
          </TabsTrigger>
        </TabsList>
        <TabsContent value="days">{daysContent()}</TabsContent>
        <TabsContent value="weeks">{weeksContent()}</TabsContent>
      </Tabs>
    </div>
  );
};
