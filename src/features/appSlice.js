import { createSlice } from "@reduxjs/toolkit";
//create slice accepts the initial state and state after a action is performed.
//exports reducer to store
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    user: null,
  },
  reducers: {
    enterCart: (state, action) => {
      state.id = action.payload.id;
    },
  },
});

export const getbasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

export const { enterCart } = cartSlice.actions;

export const selectRoomId = (state) => state.app.roomId;

export default cartSlice.reducer;
