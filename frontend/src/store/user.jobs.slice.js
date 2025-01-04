// here we are handling the user's related job options interested jobs options, searched jobs and user jobs in the redux store

import { createSlice } from '@reduxjs/toolkit';

const jobUserSlice = createSlice({
    name: "jobUser",
    initialState: {
        userInterestedJobOptions:[],
        userSearchedJobs:[],
        userJobs: [],
    },
    reducers: {

        setInterestedJobOptions: (state, action) => {
            state.userInterestedJobOptions = action.payload;
        },

        setSearchedJobs: (state, action) => {
            state.userSearchedJobs = action.payload;
        },

        setUserJobs: (state, action) => {
            state.userJobs = action.payload;
        },
    },
});

export const { setInterestedJobOptions, setSearchedJobs, setUserJobs } = jobUserSlice.actions;
export default jobUserSlice.reducer;