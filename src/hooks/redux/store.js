import {configureStore} from "@reduxjs/toolkit";
import ApplicationReducer from "@/hooks/redux/reducers/ApplicationReducer";


const store = configureStore({
    reducer: ApplicationReducer,
    devTools: true
})

export default store