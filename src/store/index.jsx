import {
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";
import profileReducer from "./profile/profile-slice"; 
import modalReducer from "./modal/modal-slice"; 
const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: {},
  reducers: {
    init: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      return {
        ...state,
        page: action.payload.page,
        results: [...state.results, ...action.payload.results],
      };
    },
  },
});

const store = configureStore({
  reducer: {
    userDetail: userDetailSlice.reducer,
    profile: profileReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const {
  actions: { add, init },
} = userDetailSlice;
export { add as addDetail, init as initUserDetail };
export default store;
