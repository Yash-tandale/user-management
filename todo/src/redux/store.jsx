import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.jsx";

const store = configureStore({
  reducer: { userReducer },
});

export default store;
