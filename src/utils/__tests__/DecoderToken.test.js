import DecoderToken from "@/utils/DecoderToken";

describe('DecoderToken should works', function () {

    test('DecoderToken decodes properly', () => {
        const underTestMockedValue = {
            fullName: "John Doe",
            profile: "ProfileTest"
        }
        
        const tokenForUnderTest = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

        const underTestResult = DecoderToken(tokenForUnderTest)

        expect(underTestResult).toEqual(underTestMockedValue)
    })

});