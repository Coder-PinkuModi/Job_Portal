import { createSlice } from  "@reduxjs/toolkit";

const adminJobSlice = createSlice({
    name : "adminJob",
    initialState:{
        singleJob: null,
        jobs:[],
    },
    reducers:{
        setSingleJob: (state,action) =>{
            state.singleJob = action.payload
        },

        setJobs: (state,action) =>{
            state.jobs = action.payload
        }
    }
})

export const { setJobs } = adminJobSlice.actions;
export default adminJobSlice.reducer;