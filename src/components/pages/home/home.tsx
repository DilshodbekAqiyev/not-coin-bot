import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ChevronRightIcon, DotIcon, ShieldHalfIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { GiDarkSquad } from "react-icons/gi";
import { GoZap } from "react-icons/go";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { FlyNumber } from "./types";
import { useDispatch } from "react-redux";
import {
  decrementMinCount,
  incrementCoin,
  incrementMinCount,
} from "@/store/reducers/user-reducer";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "@/store";

export const HomePage = () => {
  const user = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [joinSquad, setJoinSquad] = useState(false);
  const [flyNumbers, setFlyNumbers] = useState<FlyNumber[]>([]);
  const [coinStyle, setCoinStyle] = useState({
    transform: "rotateX(0) rotateY(0)",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (user.min < user.max) {
        dispatch(incrementMinCount(1));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, user.max, user.min]);

  const handleCoinClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (user.min <= user.max && user.min > 0) {
      dispatch(incrementCoin(1));
      dispatch(decrementMinCount(1));

      const coin = event.currentTarget;
      const rect = coin.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const newFlyNumber: FlyNumber = { id: Date.now(), x, y };
      setFlyNumbers((prevFlyNumbers: FlyNumber[]) => [
        ...prevFlyNumbers,
        newFlyNumber,
      ]);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const deltaX = x - centerX;
      const deltaY = y - centerY;

      const rotateX = (deltaY / centerY) * 20;
      const rotateY = (deltaX / centerX) * -20;

      setCoinStyle({
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.98)`,
      });

      setTimeout(() => {
        setFlyNumbers((prevFlyNumbers) =>
          prevFlyNumbers.filter((number) => number.id !== newFlyNumber.id)
        );
        setCoinStyle({ transform: "rotateX(0) rotateY(0) scale(1)" });
      }, 500);
    }
  };

  return (
    <div className="w-full h-screen bg-[#000111] text-white mx-auto p-5 flex flex-col justify-between">
      <div>
        {joinSquad ? (
          <>
            <Button className="w-full mx-auto flex items-center justify-between h-[60px]">
              <div className="flex items-center gap-2">
                <GiDarkSquad size={30} />
                <div className="flex items-center flex-col gap-1">
                  <span className="text-[18px]">Uzbekistan</span>
                  <span className="flex items-center gap-1">
                    <img
                      src="/images/bitcoin.svg"
                      alt="Bitcoin Icon"
                      className="w-4 h-4"
                    />{" "}
                    37,593,155
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col items-center justify-center">
                  <div className="text-[18px]">68th</div>
                  <div className="text-lg">Silver</div>
                </div>
              </div>
            </Button>
          </>
        ) : (
          <>
            <Button
              className="w-full mx-auto text-lg h-[60px]"
              onClick={() => setJoinSquad(true)}
            >
              Join Squad &nbsp;
              <FaChevronRight />
            </Button>
          </>
        )}

        <div className="flex items-center justify-center gap-3 text-[42px] font-bold my-2">
          <img
            src="/images/bitcoin.svg"
            alt="Bitcoin Icon"
            className="w-10 h-10"
          />
          {user.coin}
        </div>
        <div className="flex items-center justify-center text-base my-3 font-bol">
          <span>32,384th</span>
          <DotIcon className="mx-3" />
          <span className="flex items-center gap-1.5">
            <ShieldHalfIcon /> Bronze
            <ChevronRightIcon size={18} color="#ffffffff" />
          </span>
        </div>
      </div>

      <div
        className="flex items-center justify-center my-10 rounded-full cursor-pointer w-[300px] h-[300px] mx-auto shadow-yellow relative duration-200"
        style={coinStyle}
      >
        <img
          src="/images/bitcoin.png"
          className="w-[300px] h-[300px] rounded-full"
          onClick={handleCoinClick}
        />
        {flyNumbers.map((number: FlyNumber) => (
          <span
            key={number.id}
            className="font-bold text-4xl absolute opacity-100 fly-up pointer-events-none"
            style={{ left: number.x, top: number.y }}
          >
            +1
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GoZap size={42} color="#fff000" />
            <div className="flex flex-col justify-center">
              <div className="text-[24px]">{user.min}</div>
              <div className="text-[14px]">/{user.max}</div>
            </div>
          </div>
          <div className="bg-[#4f4f4f] p-2 px-5 rounded-xl text-2xl flex items-center gap-5 cursor-pointer shadow-sm">
            <span className="flex flex-col items-center justify-center">
              <span className="text-[24px]">0</span>
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
            <span role="button" onClick={() => navigate("/boosts")}>
              <span className="flex items-center justify-center">
                <MdOutlineRocketLaunch color="#fff000" />
              </span>
              <span className="text-[14px]">Boosts</span>
            </span>
          </div>
        </div>
        <Progress
          value={(user.min / user.max) * 100}
          className="bg-[#fff000]"
        />
      </div>
    </div>
  );
};
