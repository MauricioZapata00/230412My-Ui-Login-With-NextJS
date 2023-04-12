import {combineReducers} from "redux";
import UserSlice from "@/hooks/redux/slices/UserSlice";


const reducers = combineReducers({
    userSlice: UserSlice
})

export default reducers