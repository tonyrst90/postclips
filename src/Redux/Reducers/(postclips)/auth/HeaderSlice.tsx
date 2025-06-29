import { createSlice } from "@reduxjs/toolkit";

type HeaderState = {
  currentPage: string;
  currentStep: number;
  totalSteps: number;
  steps: string[];
};

const initialState: HeaderState = {
  currentPage: "",
  currentStep: 1,
  totalSteps: 5, // Updated to 5 steps
  steps: ["Campaign Details", "Upload Media", "Design Accounts", "Customize Clips", "Payment & Submit"],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderState(state, action) {
      state.currentPage = action.payload;
    },
    setStep(state, action) {
      state.currentStep = action.payload;
    },
    setSteps(state, action) {
      state.steps = action.payload;
      state.totalSteps = action.payload.length;
    },
  },
});

export const { setHeaderState, setStep, setSteps } = headerSlice.actions;
export default headerSlice.reducer;
