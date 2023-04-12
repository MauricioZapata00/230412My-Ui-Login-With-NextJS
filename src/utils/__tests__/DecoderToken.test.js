import DecoderToken from "@/utils/DecoderToken";

describe('DecoderToken should works', function () {

    test('DecoderToken decodes properly', () => {
        const underTestMockedValue = {
            fullName: "ALVARO MONSALVE",
            profile: "EMBEBIDO"
        }
        // const tokenForUnderTest = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        const tokenForUnderTest = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDk5OTU1NSIsImZ1bGxOYW1lIjoiQUxWQVJPIE1PTlNBTFZFIiwiaWF0IjoxNjc1ODcyMDM4LCJleHAiOjE3MzUyNzIwMzgsImdyb3VwcyI6WyJFTUJFQklETyJdLCJqdGkiOiJhMzI3N2EyMy03MGIyLTRjNmMtYTJjZi04Y2VlYTEyMDMzODIifQ.MKe_lZYYh4uqMso5khQbzvxMvht-or0392qBQjEkZmF0829-Lcf7moElsPX2toAmrY9okinxcioht7flbgyJDZo0jzzPp_6kGAkOHIO7VCgmdqHV9Fuk74desH0hMrT-wr3PqFqc_TRzvIQVkyEUny-oKGa64phin5a0eeSG-mw4YTgLrg1zVXECx3UmA9CHzTdK5a1Z-XozANXvigS4GIiQR6VBDtbi-W_vcr6nTOBrF7G9HU3t1pMtgk6Kks99NiNgbCIhYQRvNbZnqDh1C5U_z-OUwTB1SAUCPbFN-CcJdLsSvRRylUFCXVPrr1C9BxygpfKi_eSwed5iA1KnEQ"

        const underTestResult = DecoderToken(tokenForUnderTest)

        expect(underTestResult).toEqual(underTestMockedValue)
    })

});