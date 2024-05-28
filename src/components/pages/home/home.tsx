import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ChevronRightIcon,
  DotIcon,
  RocketIcon,
  ShieldHalfIcon,
  ZapIcon,
} from "lucide-react";

export const HomePage = () => {
  return (
    <div className="w-full h-screen bg-[#000111] text-white mx-auto p-5 flex flex-col justify-between">
      <div>
        <Button className="w-full mx-auto">
          Join Squad &nbsp;
          <ChevronRightIcon size={18} color="#ffffffff" />
        </Button>

        <div className="flex items-center justify-center gap-3 text-[42px] font-bold">
          <img
            src="/images/bitcoin.svg"
            alt="Bitcoin Icon"
            className="w-10 h-10"
          />
          2,879
        </div>
        <div className="flex items-center justify-center text-base my-3">
          <span>32,384th</span>
          <DotIcon className="mx-3" />
          <span className="flex items-center gap-1.5">
            <ShieldHalfIcon /> Bronze
            <ChevronRightIcon size={18} color="#ffffffff" />
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center my-10 rounded-full cursor-pointer w-[300px] h-[300px] mx-auto">
        <img src="/images/bitcoin.png" className="w-[300px] h-[300px]" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ZapIcon size={35} />{" "}
            <div className="flex flex-col justify-center">
              <div className="text-[24px]">5,000</div>
              <div className="text-[14px]">/10,000</div>
            </div>
          </div>
          <div className="bg-[#4f4f4f] p-2 rounded-xl text-2xl flex items-center gap-5 cursor-pointer">
            <span className="flex flex-col">
              <span className="text-[24px]">99+</span>
              <span className="text-[14px]">Frens</span>
            </span>
            <span className="text-center border border-x-2 px-5 border-y-0">
              <img
                src="/images/bitcoin.svg"
                alt="Bitcoin Icon"
                className="w-7 h-7"
              />
              <span className="text-[14px]">Earn</span>
            </span>
            <span>
              <span className="flex items-center justify-center">
                <RocketIcon size={27} />
              </span>
              <span className="text-[14px]">Boosts</span>
            </span>
          </div>
        </div>
        <Progress value={50} />
      </div>
    </div>
  );
};
