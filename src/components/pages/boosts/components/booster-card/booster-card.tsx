import { Card } from "../card";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { Props } from "./types";
import { useDispatch } from "react-redux";
import { completeMission } from "@/store/reducers/user-reducer";
import { useState } from "react";
import { FlyNumber } from "@/components/pages/home/types";

export const BoosterCard = ({ id, title, coinReward, isCompleted }: Props) => {
  const dispatch = useDispatch();
  const [flyNumbers, setFlyNumbers] = useState<FlyNumber[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isCompleted) {
      dispatch(completeMission(id));

      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const newFlyNumber: FlyNumber = { id: Date.now(), x, y };
      setFlyNumbers((prevFlyNumbers: FlyNumber[]) => [
        ...prevFlyNumbers,
        newFlyNumber,
      ]);

      setTimeout(() => {
        setFlyNumbers((prevFlyNumbers) =>
          prevFlyNumbers.filter((number) => number.id !== newFlyNumber.id)
        );
      }, 500);
    }
  };

  return (
    <div
      role="button"
      onClick={handleClick}
      className="flex items-center justify-between my-4 relative"
    >
      <div className="flex items-center gap-2">
        <Card className="bg-opacity-20 p-2 flex items-center justify-center w-20 h-20">
          Icon
        </Card>
        <div className="flex flex-col gap-2">
          <div className="text-[22px] mt-2">{title}</div>
          <div className="flex items-center gap-2">
            +{coinReward}
            <img
              src="/images/bitcoin.svg"
              alt="Bitcoin Icon"
              className="w-4 h-4"
            />
          </div>
        </div>
      </div>
      <div>
        {isCompleted ? (
          <>
            <FaCheck />
          </>
        ) : (
          <>
            <FaChevronRight />
          </>
        )}
      </div>
      {flyNumbers.map((number: FlyNumber) => (
        <span
          key={number.id}
          className="font-bold text-4xl absolute opacity-100 fly-up pointer-events-none"
          style={{ left: number.x, top: number.y }}
        >
          +{coinReward}
        </span>
      ))}
    </div>
  );
};
