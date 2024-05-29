import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types/user";

const initialState: User = {
  coin: 0,
  max: 500,
  min: 50,
  friends: 0,
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
  },
});

export const {
  incrementCoin,
  decrementCoin,
  incrementMinCount,
  decrementMinCount,
} = userSlice.actions;
export default userSlice.reducer;
