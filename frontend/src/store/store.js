import { configureStore } from "@reduxjs/toolkit"
import UserAuthReducer from "./User.AuthSlice.js"
// import jobReducer from "./jobs.InterestSlice.js"
import userJobReducer from "./user.jobs.slice.js"
import companyReducer from "./company.slice.js"
import adminJobReducer from "./admin.jobs.slice.js"

export const store = configureStore({
    reducer: {
        userAuth: UserAuthReducer,
        // jobInterest: jobReducer,
        jobUser: userJobReducer,
        company: companyReducer,
        adminJob: adminJobReducer,
    }
})