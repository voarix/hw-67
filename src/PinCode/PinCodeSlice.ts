import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

interface PinCodeSlice {
  code: string;
  correctCode: string;
  status: string;
}

const initialState: PinCodeSlice = {
  code: "",
  correctCode: "9999",
  status: "waiting",
};

export const pinCodeSlice = createSlice({
  name: "pinCode",
  initialState,
  reducers: {
    addIPinCode: (state, action: PayloadAction<string>) => {
      if (state.code.length < 4) {
        state.code += action.payload;
      }
    },
    removeIPinCode: (state) => {
      state.code = state.code.slice(0, -1);
    },
    checkPinCode: (state) => {
      if (state.code === state.correctCode) {
        state.status = "success";
        state.code = "Access Granted";
        toast.success("PinCode was successfully entered");
      } else {
        state.status = "warning";
        state.code = "Access Denied";
        toast.error("PinCode was unsuccessfully entered");
      }
    },
    resetPinCode: (state) => {
      state.code = "";
    },
  },
});

export const pinCodeReducer = pinCodeSlice.reducer;
export const { addIPinCode, removeIPinCode, checkPinCode, resetPinCode } =
  pinCodeSlice.actions;
