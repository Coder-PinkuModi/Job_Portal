import { createSlice } from "@reduxjs/toolkit";

const application = createSlice({
    name: "application",
    initialState: {
        jobId: null,
        applications: [],
        // loading: false,
        // error: null,
    },
    reducers: {
        // getApplicationsRequest: (state) => {
        //     state.loading = true;
        // },
        getApplicationsSuccess: (state, action) => {
            state.jobId = action.payload.jobId;
            state.applications = action.payload;
            // state.loading = false;
            // state.error = null;
        },
        // getApplicationsFail: (state, { payload }) => {
        //     state.loading = false;
        //     state.error = payload;
        // },
    },
});

export const { getApplicationsRequest, getApplicationsSuccess, getApplicationsFail } = application.actions;
export default application.reducer;