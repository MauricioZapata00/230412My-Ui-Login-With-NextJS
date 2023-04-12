import Identifiers from "../Identifiers";

describe('Identifiers should have properties', function () {
    test('Identifiers', () => {
        const underTest = Identifiers

        expect(underTest.LOGIN_INPUT_PASSWORD_IDENTIFIER).toBe('873ffc7f-aaf0-47e3-a198-69d3764d8385')

        expect(underTest.LOGIN_LABEL_INPUT_PASSWORD_IDENTIFIER).toBe('c56836e9-dbc7-48cd-af42-7ebfb9205329')

        expect(underTest.LOGIN_INPUT_TEXT_IDENTIFIER).toBe('329a9320-38c4-4993-b642-d6b099d112b1')
    })
});