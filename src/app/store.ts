import { configureStore } from "@reduxjs/toolkit";
import { pinCodeReducer } from "../PinCode/PinCodeSlice.ts";

export const store = configureStore({
  reducer: {
    "pinCode": pinCodeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;