import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listCart: [],
};
export const CartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    getCart: (state, { payload }) => {
      state.listCart = payload;
    },
  },
});

export const { getCart } = CartSlice.actions;
export default CartSlice.reducer;
