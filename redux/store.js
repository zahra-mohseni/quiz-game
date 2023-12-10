import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { isLogedIn: false };
const loginSlise = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn(state) {
      state.isLogedIn === true;
    },
    logOut(state) {
      state.isLogedIn === false;
    },
  },
});
const store = configureStore({ reducer: { logState: loginSlise.reducer } });
export const logActions = loginSlise.actions;
export default store;
