import MessagesToUser from "@/data/MessagesToUser";

describe('MessagesToUser should have properties', function () {
    test('MessagesToUser', () => {
        const underTest = MessagesToUser

        expect(underTest.FAILED_AUTHENTICATION).toBe("Autenticación fallida por favor verifique sus credenciales en cívica web e intentelo más tarde.")
    })
});