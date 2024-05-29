export interface User {
  coin: number;
  max: number;
  min: number;
  friends?: number;
  squad?: string;
  boosts?: UserBoosts;
}

export interface UserBoosts {
  turbo: number;
  energy: number;
}
