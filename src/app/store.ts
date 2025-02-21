import { configureStore } from "@reduxjs/toolkit";
import { pinCodeReducer } from "../PinCode/PinCodeSlice.ts";
import { calculatorReducer } from "../Calculator/CalculatorSlice.ts";

export const store = configureStore({
  reducer: {
    pinCode: pinCodeReducer,
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
