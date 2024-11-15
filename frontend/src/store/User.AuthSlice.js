import { createSlice } from "@reduxjs/toolkit";

const UserAuthSlice = createSlice({
    name: "userAuth",
    initialState: {
        id: null,
        name: null,
        email: null,
        profilePic: null,
        title: null,
        bio: null,
        skills: null,
        role: null,
    },

    reducers: {
        setUserStore: (state, action) => {
            state.id = action.payload.userId
            state.name = action.payload.userName
            state.email = action.payload.email
            state.profilePic = action.payload.userProfilePic
            state.title = action.payload.title
            state.bio = action.payload.bio
            state.skills = action.payload.skills
            state.role = action.payload.role
        }
    }
})

export const { setUserStore } = UserAuthSlice.actions;
export default UserAuthSlice.reducer;