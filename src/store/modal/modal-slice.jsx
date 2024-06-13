import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  content: null,
  category: "button",
  typeCSS: "css",
  elementID: null,
};
export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, { payload }) => {
      state.isOpen = true;
      state.content = payload;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } =
  ModalSlice.actions;
export default ModalSlice.reducer;
