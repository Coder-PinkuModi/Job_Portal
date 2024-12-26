import { configureStore } from "@reduxjs/toolkit"
import UserAuthReducer from "./User.AuthSlice.js"
import jobReducer from "./jobs.InterestSlice.js"
import companyReducer from "./company.slice.js"
import adminJobReducer from "./admin.jobs.slice.js"

export const store = configureStore({
    reducer: {
        userAuth: UserAuthReducer,
        jobInterest: jobReducer,
        company: companyReducer,
        adminJob: adminJobReducer,
    }
})