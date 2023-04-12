import ActionTypes from "../../constants/ActionTypes";


describe('ActionTypes should have properties', function () {
    test('ActionTypes', () => {
        const underTest = ActionTypes

        expect(underTest.USER_LOGIN_ACTION).toBe("USER_LOGIN_ACTION")

    })
});