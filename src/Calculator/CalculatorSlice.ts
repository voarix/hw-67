import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalculatorSlice {
  number: string;
}

const initialState: CalculatorSlice = {
  number: "",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    calculatorOperation: (state, action: PayloadAction<string>) => {
      state.number += action.payload;
    },
    calculateResult: (state) => {
      state.number = eval(state.number);
    },
    resetCalculator: (state) => {
      state.number = "";
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const { calculatorOperation, calculateResult, resetCalculator } =
  calculatorSlice.actions;
