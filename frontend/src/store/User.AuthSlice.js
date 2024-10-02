import { createSlice } from "@reduxjs/toolkit";

const UserAuthSlice = createSlice({
    name: "userAuth",
    initialState: {
        id: "",
        name: "",
        // email: "",
        // profilePic: "",
        role: "",
    },

    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.userId
            state.name = action.payload.userName
            // state.email = action.payload.email
            // state.profilePic = action.payload.profilePic
            state.role = action.payload.role
        }
    }
})

export const { setUser } = UserAuthSlice.actions;
export default UserAuthSlice.reducer;