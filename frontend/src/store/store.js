import { configureStore } from "@reduxjs/toolkit"
import UserAuthReducer from "./User.AuthSlice.js"
import jobReducer from "./jobs.InterestSlice.js"


export const store = configureStore({
    reducer: {
        userAuth: UserAuthReducer,
        jobInterest: jobReducer
    }
})