import { useTypedSelector } from "@/store";
import { Link, useNavigate } from "react-router-dom";
import { Card } from "./components";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { BoosterCard } from "./components/booster-card";
import { initializeBackButton } from "@/utils/back";
import { useEffect } from "react";
import { GoZap } from "react-icons/go";
import { DotIcon } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  activateTemporaryBoost,
  boostEnergyLimit,
  boostRechargingSpeed,
  deactivateTemporaryBoost,
  incrementFullEnergy,
} from "@/store/reducers/user-reducer";

export const BoostsPage = () => {
  const user = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const now = Date.now();

  const isBoosted = {
    turbo: now - user.lastBoostUsed >= 3600000,
    fullEnergy: now - user.lastFullEnergyBoostUsed >= 43200000,
    reChargingSpeed: now - user.lastRechargingSpeedBoostUsed >= 120000,
    energyLimit: now - user.lastEnergyLimitBoostUsed >= 120000,
  };

  useEffect(() => {
    const handleBackClick = () => {
      navigate("/");
    };

    const cleanup = initializeBackButton(handleBackClick);

    return () => {
      cleanup();
    };
  }, [navigate]);

  const handleBoost = () => {
    if (isBoosted.turbo) {
      dispatch(activateTemporaryBoost());
      navigate("/");

      setTimeout(() => {
        dispatch(deactivateTemporaryBoost());
      }, 15000);
    } else {
      alert("Boost is on cooldown. Please wait before using it again.");
    }
  };

  const handleFullEnergy = () => {
    if (isBoosted.fullEnergy) {
      dispatch(incrementFullEnergy());
      navigate("/");
    } else {
      alert(
        "Full energy boost is on cooldown. Please wait before using it again."
      );
    }
  };

  const handleRechargingSpeed = () => {
    if (user.coin < user.boost * 100) {
      return alert("Your coin not enought");
    }

    if (isBoosted.reChargingSpeed) {
      dispatch(boostRechargingSpeed());
    } else {
      alert(
        "Recharging speed boost is on cooldown. Please wait before using it again."
      );
    }
  };

  const handleBoostEnergyLimit = () => {
    if (user.coin < (user.max / 500) * 100) {
      return alert("Your coin not enought");
    }

    if (isBoosted.energyLimit) {
      dispatch(boostEnergyLimit());
    } else {
      alert(
        "Energy limit boost is on cooldown. Please wait before using it again."
      );
    }
  };

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
          <Card
            className="flex items-center justify-between py-3"
            onClick={handleBoost}
          >
            <div>
              <div>3x Turbo</div>
              <div className="text-[14px] opacity-40">
                {isBoosted.turbo ? "Ready" : "Cooldown"}
              </div>
            </div>
            <span className="flex items-center justify-center">
              <MdOutlineRocketLaunch color="#fff000" size={40} />
            </span>
          </Card>
          <Card
            className="flex items-center justify-between py-3"
            onClick={handleFullEnergy}
          >
            <div>
              <div>Full energy</div>
              <div className="text-[14px] opacity-40">
                {isBoosted.fullEnergy ? "Ready" : "Cooldown"}
              </div>
            </div>
            <span className="flex items-center justify-center">
              <GoZap size={40} color="#fff000" />
            </span>
          </Card>
        </div>
      </div>
      <div className="my-8">
        <div className="font-semibold text-[24px] mb-3">Boosters</div>
        <div className="grid grid-cols-2 gap-3">
          <Card
            className="flex items-center justify-between py-3"
            onClick={handleRechargingSpeed}
          >
            <div>
              <div>Recharging speed</div>
              <div className="text-[14px] opacity-40 flex items-center">
                <img
                  src="/images/bitcoin.svg"
                  alt="Bitcoin Icon"
                  className="w-4 h-4"
                />
                &nbsp; {user.boost * 100} <DotIcon /> {user.boost} lvl
              </div>
            </div>
            <span className="flex items-center justify-center">
              <GoZap size={40} color="#fff000" />
            </span>
          </Card>
          <Card
            className="flex items-center justify-between py-3"
            onClick={handleBoostEnergyLimit}
          >
            <div>
              <div>Energy Limit</div>
              <div className="text-[14px] opacity-40 flex items-center">
                <img
                  src="/images/bitcoin.svg"
                  alt="Bitcoin Icon"
                  className="w-4 h-4"
                />
                &nbsp; {(user.max / 500) * 100} <DotIcon /> {user.max / 500} lvl
              </div>
            </div>
            <span className="flex items-center justify-center">
              <GoZap size={40} color="#fff000" />
            </span>
          </Card>
        </div>
      </div>
      <div className="my-8">
        <div className="font-semibold text-[24px] mb-3">Missions</div>
        <div className="flex gap-3 overflow-x-auto w-full no-scrollbar">
          {user.missions.map(({ id, missions }) => (
            <>
              <Card className="py-0 !min-w-[380px]" key={id}>
                {missions.map((mission) => (
                  <BoosterCard {...mission} key={mission.id} />
                ))}
              </Card>
            </>
          ))}
          {/* <Card className="py-0 !min-w-[400px]">
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
          </Card> */}
        </div>
      </div>
    </div>
  );
};
