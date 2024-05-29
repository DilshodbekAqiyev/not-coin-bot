import { useTypedSelector } from "@/store";
import { Link } from "react-router-dom";
import { Card } from "./components";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BoosterCard } from "./components/booster-card";

export const BoostsPage = () => {
  const user = useTypedSelector((state) => state.user);

  return (
    <div className="p-5">
      <div className="text-center">Your balance</div>
      <div className="flex items-center justify-center gap-3 text-[42px] font-bold my-2">
        <img
          src="/images/bitcoin.svg"
          alt="Bitcoin Icon"
          className="w-10 h-10"
        />
        {user.coin}
      </div>
      <Link to="/" className="text-[14px] text-blue-600 block text-center">
        How it works
      </Link>
      <div className="my-8">
        <div className="font-semibold text-[24px] mb-3">
          Free daily boosters
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Card className="flex items-center justify-between py-3">
            <div>
              <div>3x Turbo</div>
              <div className="text-[14px] opacity-40">Ready</div>
            </div>
            <span className="flex items-center justify-center">
              <MdOutlineRocketLaunch color="#fff000" size={40} />
            </span>
          </Card>
          <Card className="flex items-center justify-between py-3">
            <div>
              <div>Full energy</div>
              <div className="text-[14px] opacity-40">12 hours left</div>
            </div>
            <span className="flex items-center justify-center">
              <MdOutlineRocketLaunch color="#fff000" size={40} />
            </span>
          </Card>
        </div>
      </div>
      <div className="my-8">
        <div className="font-semibold text-[24px] mb-3">Boosters</div>
        <div className="flex gap-3 overflow-x-auto w-full no-scrollbar">
          <Card className="py-0 !min-w-[400px]">
            <BoosterCard title="Welcome to TON NFT" coin={100000} />
            <BoosterCard title="Silver league bonus" coin={2000} />
            <BoosterCard title="Gold league bonus" coin={2000} />
            <BoosterCard title="Diamond league bonus" coin={10000} />
          </Card>
          <Card className="py-0 !min-w-[400px]">
            <BoosterCard title="Invite 1 friend bonus" coin={2000} />
            <BoosterCard title="Invite 5 friend bonus" coin={5000} />
            <BoosterCard title="Invite 10 friend bonus" coin={25000} />
            <BoosterCard title="Invite 100 friend bonus" coin={100000} />
          </Card>
        </div>
      </div>
    </div>
  );
};
