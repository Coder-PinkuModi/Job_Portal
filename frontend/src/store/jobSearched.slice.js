import { createSlice } from "@reduxjs/toolkit";

const jobSearchedSlice = createSlice({
    name: "jobSearched",
    initialState: {
        job: [],
    },
    reducers: {
        setJobSearched: (state, action) => {
            state.job = action.payload;
        },
    },
});

export const { setJobSearched } = jobSearchedSlice.actions;
export default jobSearchedSlice.reducer;