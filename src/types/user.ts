export interface User {
  coin: number;
  max: number;
  min: number;
  friends?: number;
  squad?: string;
  boost: number;
  isBoosted: boolean;
  boosters: Booster[];
  missions: {
    id: number;
    missions: Mission[];
  }[];
  lastEnergyLimitBoostUsed: number;
  lastRechargingSpeedBoostUsed: number;
  lastBoostUsed: number;
  lastFullEnergyBoostUsed: number;
}

export interface Booster {
  id: number;
  type: string;
  level: number;
  duration: number;
  isActive: boolean;
}

export interface Mission {
  id: number;
  title: string;
  coinReward: number;
  isCompleted: boolean;
}
