import React from "react";
import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import Header from "@/components/headerApplication/Header";
import {Provider} from "react-redux";
import store from "@/hooks/redux/store";

describe('Header should works', function () {
    test('Header should renders', () => {

        render(
            <Provider store={store}>
                <Header/>
            </Provider>
        )

        expect(screen.getByText("CENTRO DE GESTIÓN CÍVICA OPERACIONES")).toBeInTheDocument()
    })
});