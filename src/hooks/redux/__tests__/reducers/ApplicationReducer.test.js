import {configureStore} from "@reduxjs/toolkit";
import ApplicationReducer from "@/hooks/redux/reducers/ApplicationReducer";

describe('ApplicationReducer should works', function () {
    //https://www.appsloveworld.com/reactjs/200/96/how-to-test-combinereducers-with-jest
    test('ApplicationReducer should have reducers', () => {
        const underTest = ApplicationReducer
        const underTestStore = configureStore({
            reducer: underTest
        })
        const expectedValueForUnderTest = {
            isAuthenticated: false,
            fullName: "",
            profile: ""
        }
        expect(underTestStore.getState().userSlice).toEqual(expectedValueForUnderTest)
    })
});