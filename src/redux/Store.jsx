import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../redux/Slice";
export const Store = configureStore({
  reducer: { users: usersReducer },
});
