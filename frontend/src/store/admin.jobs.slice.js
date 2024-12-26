import { createSlice } from  "@reduxjs/toolkit";

const adminJobSlice = createSlice({
    name : "adminJob",
    initialState:{
        jobs:[],
    },
    reducers:{
        setJobs: (state,action) =>{
            state.jobs = action.payload
        }
    }
})

export const { setJobs } = adminJobSlice.actions;
export default adminJobSlice.reducer;