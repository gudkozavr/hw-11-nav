import { configureStore } from "@reduxjs/toolkit";
import facts from "./slices/factSlice";
const store = configureStore({
  reducer: { facts },
});
export default store;
