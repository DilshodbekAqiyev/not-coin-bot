import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/user";

const initialState: User = {
  coin: 0,
  max: 500,
  min: 50,
  friends: 0,
  boost: 1,
  isBoosted: false,
  lastEnergyLimitBoostUsed: 0,
  lastRechargingSpeedBoostUsed: 0,
  lastBoostUsed: 0,
  lastFullEnergyBoostUsed: 0,
  boosters: [
    { id: 1, type: "turbo", level: 1, duration: 3600, isActive: false },
    { id: 2, type: "energy", level: 1, duration: 43200, isActive: false },
  ],
  missions: [
    {
      id: 1,
      title: "Welcome to TON NFT",
      coinReward: 100000,
      isCompleted: false,
    },
    {
      id: 2,
      title: "Silver league bonus",
      coinReward: 2000,
      isCompleted: false,
    },
    { id: 3, title: "Gold league bonus", coinReward: 2000, isCompleted: false },
    {
      id: 4,
      title: "Diamond league bonus",
      coinReward: 10000,
      isCompleted: false,
    },
    {
      id: 5,
      title: "Invite 1 friend bonus",
      coinReward: 2000,
      isCompleted: false,
    },
    {
      id: 6,
      title: "Invite 5 friend bonus",
      coinReward: 5000,
      isCompleted: false,
    },
    {
      id: 7,
      title: "Invite 10 friend bonus",
      coinReward: 25000,
      isCompleted: false,
    },
    {
      id: 8,
      title: "Invite 100 friend bonus",
      coinReward: 100000,
      isCompleted: false,
    },
  ],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    incrementCoin: (state, action: PayloadAction<number>) => {
      state.coin += action.payload;
    },
    decrementCoin: (state, action: PayloadAction<number>) => {
      state.coin -= action.payload;
    },
    incrementMinCount: (state, action: PayloadAction<number>) => {
      state.min += action.payload;
    },
    decrementMinCount: (state, action: PayloadAction<number>) => {
      state.min -= action.payload;
    },
    incrementFullEnergy: (state) => {
      const now = Date.now();
      if (now - state.lastFullEnergyBoostUsed >= 43200000) {
        state.min = state.max;
        state.lastFullEnergyBoostUsed = now;
      }
    },
    completeMission: (state, action: PayloadAction<number>) => {
      const mission = state.missions.find((m) => m.id === action.payload);
      if (mission && !mission.isCompleted) {
        mission.isCompleted = true;
        state.coin += mission.coinReward;
      }
    },
    activateTemporaryBoost: (state) => {
      const now = Date.now();
      if (now - state.lastBoostUsed >= 3600000) {
        state.isBoosted = true;
        state.boost = 3;
        state.lastBoostUsed = now;
      }
    },
    deactivateTemporaryBoost: (state) => {
      state.isBoosted = false;
      state.boost = 1;
    },
    boostRechargingSpeed: (state) => {
      const now = Date.now();
      if (now - state.lastRechargingSpeedBoostUsed >= 120000) {
        state.coin -= state.boost * 100;
        state.boost += 1;
        state.lastRechargingSpeedBoostUsed = now;
      }
    },
    boostEnergyLimit: (state) => {
      const now = Date.now();
      if (now - state.lastEnergyLimitBoostUsed >= 120000) {
        state.coin -= (state.max / 500) * 100;
        state.max += 500;
        state.lastEnergyLimitBoostUsed = now;
      }
    },
  },
});

export const {
  incrementCoin,
  decrementCoin,
  incrementMinCount,
  decrementMinCount,
  completeMission,
  incrementFullEnergy,
  activateTemporaryBoost,
  deactivateTemporaryBoost,
  boostEnergyLimit,
  boostRechargingSpeed,
} = userSlice.actions;
export default userSlice.reducer;
