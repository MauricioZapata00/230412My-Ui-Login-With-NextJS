import ApplicationQueryKeys from "@/data/ApplicationQueryKeys";


describe('ApplicationQueryKeys should have properties', function () {
    test('ApplicationQueryKeys', () => {
        const underTest = ApplicationQueryKeys

        expect(underTest.logIn).toBe("logIn_query")
    })
});