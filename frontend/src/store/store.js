import { configureStore } from "@reduxjs/toolkit"
import UserAuthReducer from "./User.AuthSlice.js"
import jobReducer from "./jobstoreSlice.js"


export const store = configureStore({
    reducer: {
        userAuth: UserAuthReducer,
        jobInterest: jobReducer
    }
})