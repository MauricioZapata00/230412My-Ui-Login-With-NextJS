import React from "react";
import {act, fireEvent, render, screen, waitFor} from "@testing-library/react";
import LogInPage from "@/pages/auth/LogInPage";
import mockRouter from 'next-router-mock'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import axios from "axios";
import MessagesToUser from "@/data/MessagesToUser";
import {Provider} from "react-redux";
import store from "@/hooks/redux/store";
import jwtDecode from "jwt-decode";

// jest.mock("axios");

jest.mock("next/router", () => ({
    useRouter: () => ({
        push: jest.fn()
    })
}));
describe('LogInPage should works', function () {

    afterEach(() => {
        jest.resetAllMocks()
        jest.clearAllMocks()
    })

    test('LogInPage should renders', () => {
        mockRouter.push('/auth/LogInPage')
        const underTestQueryClient = new QueryClient()

        render(
            <Provider store={store}>
                <QueryClientProvider client={underTestQueryClient}>
                    <LogInPage/>
                </QueryClientProvider>
            </Provider>
        )

        expect(screen.getByText('Iniciar sesión')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ingrese un usuario')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Ingrese su contraseña')).toBeInTheDocument()
    })

    test('LogInPage should change value on inputs', () => {
        mockRouter.push('/auth/LogInPage')
        const underTestQueryClient = new QueryClient()
        render(
            <Provider store={store}>
                <QueryClientProvider client={underTestQueryClient}>
                    <LogInPage/>
                </QueryClientProvider>
            </Provider>
        )

        const underTestInputUser = screen.getByLabelText('Usuario')
        const underTestInputPassword = screen.getByLabelText('Contraseña')

        fireEvent.change(underTestInputUser, {target: {value: "Something to test"}})
        expect(underTestInputUser.value).toBe("Something to test")

        fireEvent.change(underTestInputPassword, {target: {value: "Password to test"}})
        expect(underTestInputPassword.value).toBe("Password to test")
    })

    test('LogInPage button should works', async () => {
        await mockRouter.push('/auth/LogInPage')
        const mockedResponse = {
            data: {
                data: {
                    isSuccess: true,
                    token: "Bearer eyJhbGciOiJIUzI.eyJpZCI6IjVjN.1Tn8FLJEGGE8"
                }
            }
        }

        jest.mock('axios', () => ({
            post: jest.fn(() => Promise.resolve(mockedResponse))
        }))
        const expectedStateForUnderTestReduxState = {
            isAuthenticated: false,
            fullName: "",
            profile: ""
        }

        const underTestQueryClient = new QueryClient()

        render(
            <Provider store={store}>
                <QueryClientProvider client={underTestQueryClient}>
                    <LogInPage/>
                </QueryClientProvider>
            </Provider>
        )

        const underTestButton = screen.getByText('Iniciar sesión')

        await act(() => fireEvent.click(underTestButton))

        const underTestReduxState = store.getState().userSlice

        expect(underTestReduxState).toEqual(expectedStateForUnderTestReduxState)

    })

    test('LogInPage button should works with a failed authentication', async () => {
        await mockRouter.push('/auth/LogInPage')
        const mockedResponseWhenAuthenticationFailed = {
            data: {
                data: {
                    content: MessagesToUser.FAILED_AUTHENTICATION,
                    // token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMDk5OTU1NSIsImZ1bGxOYW1lIjoiQUxWQVJPIE1PTlNBTFZFIiwiaWF0IjoxNjc1ODcyMDM4LCJleHAiOjE3MzUyNzIwMzgsImdyb3VwcyI6WyJFTUJFQklETyJdLCJqdGkiOiJhMzI3N2EyMy03MGIyLTRjNmMtYTJjZi04Y2VlYTEyMDMzODIifQ.MKe_lZYYh4uqMso5khQbzvxMvht-or0392qBQjEkZmF0829-Lcf7moElsPX2toAmrY9okinxcioht7flbgyJDZo0jzzPp_6kGAkOHIO7VCgmdqHV9Fuk74desH0hMrT-wr3PqFqc_TRzvIQVkyEUny-oKGa64phin5a0eeSG-mw4YTgLrg1zVXECx3UmA9CHzTdK5a1Z-XozANXvigS4GIiQR6VBDtbi-W_vcr6nTOBrF7G9HU3t1pMtgk6Kks99NiNgbCIhYQRvNbZnqDh1C5U_z-OUwTB1SAUCPbFN-CcJdLsSvRRylUFCXVPrr1C9BxygpfKi_eSwed5iA1KnEQ"
                }
            }
        }
        jest.mock('axios', () => ({
            post: jest.fn(() => Promise.resolve(mockedResponseWhenAuthenticationFailed))
        }))
        // jest.spyOn(axios, 'post').mockImplementation(() => {
        //     return Promise.resolve(mockedResponseWhenAuthenticationFailed)
        // })
        jest.spyOn(jwtDecode, 'default')
        jwtDecode.default.mockImplementation(() => ({
            isAuthenticated: false,
            fullName: "",
            profile: [""]
        }))
        const underTestQueryClient = new QueryClient()

        render(
            <Provider store={store}>
                <QueryClientProvider client={underTestQueryClient}>
                    <LogInPage/>
                </QueryClientProvider>
            </Provider>
        )

        const underTestButton = screen.getByText('Iniciar sesión')

        // await act(() => fireEvent.click(underTestButton))
        //
        // const underTestButtonOfFailureAuthentication = screen.getByText('Ok')
        //
        // expect(underTestButtonOfFailureAuthentication).toBeInTheDocument()
        //
        // await act(() => fireEvent.click(underTestButtonOfFailureAuthentication))
        //
        // expect(underTestButtonOfFailureAuthentication).not.toBeVisible()
    })
});

describe("LogInPage", () => {
    afterEach(() => {
        jest.resetAllMocks()
    })
    test("Should show error dialog when authentication failed", async () => {
        const mockedResponseWhenAuthenticationFailed = {
            data: {
                data: {
                    content: MessagesToUser.FAILED_AUTHENTICATION
                }
            }
        };
        jest.spyOn(axios, "post").mockImplementation(() => {
            return Promise.resolve(mockedResponseWhenAuthenticationFailed).catch((response) => response.reject("test error"));
        });
        const underTestQueryClient = new QueryClient()

        const {getByText, getByPlaceholderText} = render(
            <Provider store={store}>
                <QueryClientProvider client={underTestQueryClient}>
                    <LogInPage/>
                </QueryClientProvider>
            </Provider>
        );

        const usernameInput = getByPlaceholderText("Ingrese un usuario");
        const passwordInput = getByPlaceholderText("Ingrese su contraseña");
        const submitButton = getByText("Iniciar sesión");

        fireEvent.change(usernameInput, {target: {value: "test"}});
        fireEvent.change(passwordInput, {target: {value: "test"}});
        fireEvent.click(submitButton)
        // await act(() => fireEvent.click(submitButton))

        await waitFor(() => {
            expect(getByText(MessagesToUser.FAILED_AUTHENTICATION)).toBeInTheDocument();

            const underTestButtonOfFailureAuthentication = screen.getByText('Ok')

            expect(underTestButtonOfFailureAuthentication).toBeInTheDocument()

            fireEvent.click(underTestButtonOfFailureAuthentication)
        });

        // const underTestButtonOfFailureAuthentication = screen.getByText('Ok')
        //
        // expect(underTestButtonOfFailureAuthentication).toBeInTheDocument()

        // await act(() => fireEvent.click(underTestButtonOfFailureAuthentication))

        await waitFor(() => {
            expect(screen.getByText('Ok')).not.toBeVisible()
        })
    });
});