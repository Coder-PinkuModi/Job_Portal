import { createSlice } from "@reduxjs/toolkit";

const jobInterestSlice = createSlice({
    
  name: "jobInterest",
  initialState: {
    job: ["Web Developer", "App Developer","DevOps"],
  },
  reducer: {
    setJobInterest: (state, action) => {
      state.job = action.payload;
    },
  },
});

export const { setJobInterest } = jobInterestSlice.actions
export default jobInterestSlice.reducer