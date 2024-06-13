import { createSlice } from "@reduxjs/toolkit";
import { getStorage, removeStorage } from "../../utils/helper";

const initialState = {
  profiles: {},
  user: JSON.parse(getStorage("userLog")) || null,
};
export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    userProfile: (state, { payload }) => {
      state.user = payload;
    },
    actLogout: (state) => {
      removeStorage("userLog");
      state.user = null;
    },
  },
});

export const { userProfile, actLogout } = ProfileSlice.actions;
export default ProfileSlice.reducer;
