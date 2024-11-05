import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    
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

export const { setJobInterest } = jobSlice.actions
export default jobSlice.reducer