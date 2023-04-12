import store from "@/hooks/redux/store";
import {logInUser, logOutUser} from "@/hooks/redux/slices/UserSlice";

describe('UserSlice should works', function () {
    //https://bionicjulia.com/blog/writing-jest-tests-redux-toolkit-slice
    test('UserSlice should switches between logIn and logOut', () => {
        const underTestStoreDefaultState = store.getState().userSlice
        const expectedValueForUnderTestStore_1 = {
            isAuthenticated: false,
            fullName: "",
            profile: ""
        }
        expect(underTestStoreDefaultState).toEqual(expectedValueForUnderTestStore_1)

        store.dispatch(logInUser({
            fullName: "testUser",
            profile: "testProfile"
        }))
        const underTestStateAction_1 = store.getState().userSlice
        const expectedValueForUnderTestStore_2 = {
            isAuthenticated: true,
            fullName: "testUser",
            profile: "testProfile"
        }
        expect(underTestStateAction_1).toEqual(expectedValueForUnderTestStore_2)

        store.dispatch(logOutUser())
        const underTestStateAction_2 = store.getState().userSlice
        expect(underTestStateAction_2).toEqual(expectedValueForUnderTestStore_1)
    })

});