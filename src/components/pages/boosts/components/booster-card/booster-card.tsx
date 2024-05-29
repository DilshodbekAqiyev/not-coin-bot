import { useState } from "react";
import { Card } from "../card";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { Props } from "./types";

export const BoosterCard = ({ title, coin }: Props) => {
  const [check, setCheck] = useState(false);

  return (
    <div
      role="button"
      onClick={() => setCheck(true)}
      className="flex items-center justify-between my-4"
    >
      <div className="flex items-center gap-2">
        <Card className="bg-opacity-20 p-2 flex items-center justify-center w-20 h-20">
          Icon
        </Card>
        <div className="flex flex-col gap-2">
          <div className="text-[22px] mt-2">{title}</div>
          <div className="flex items-center gap-2">
            +{coin}
            <img
              src="/images/bitcoin.svg"
              alt="Bitcoin Icon"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
      <div>
        {check ? (
          <>
            <FaCheck />
          </>
        ) : (
          <>
            <FaChevronRight />
          </>
        )}
      </div>
    </div>
  );
};
