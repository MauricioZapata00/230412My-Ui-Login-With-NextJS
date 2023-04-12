import {createSlice} from "@reduxjs/toolkit";
import ActionTypes from "@/hooks/redux/constants/ActionTypes";

const initialState = {
    isAuthenticated: false,
    fullName: "",
    profile: ""
}

const UserSlice = createSlice({
    name: ActionTypes.USER_LOGIN_ACTION,
    initialState,
    reducers: {
        logInUser(state, action){
            state.isAuthenticated = true
            state.fullName = action.payload.fullName
            state.profile = action.payload.profile
        },
        logOutUser(state){
            state.isAuthenticated = false
            state.fullName = ""
            state.profile = ""
        },
    }
})

export const { logInUser, logOutUser } = UserSlice.actions
export default UserSlice.reducer