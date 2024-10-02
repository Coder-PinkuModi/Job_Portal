import { configureStore } from "@reduxjs/toolkit"
import UserAuthSlice from "./User.AuthSlice.js"
import jobSlice from "./jobstoreSlice.js"


export const store = configureStore({
    reducer: {
        userAuth: UserAuthSlice,
        jobInterest: jobSlice
    }
})