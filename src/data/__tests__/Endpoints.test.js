import Endpoints, {APPLICATION_DOMAIN_NAME} from "@/data/Endpoints";

describe('Endpoints should have properties', function () {
    test('Endpoints', () => {
        const underTest = Endpoints

        expect(underTest.logIn).toBe("/ms-deployment-app-usos/auth/login")
    })

    test('Endpoints should also export APPLICATION_DOMAIN_NAME', () => {
        const underTestApplicationDomainName = APPLICATION_DOMAIN_NAME

        expect(underTestApplicationDomainName).toBe("http://localhost:8087")
    })
});