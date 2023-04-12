import React from "react";
import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import InputPassword from "../InputPassword";

describe('InputPassword should works', function () {
    test('InputPassword should renders', () => {
        const underTestProps = {
            idLabelPassword: "AND1",
            labelPassword: "testLabel",
            idPassword: "lki-6",
            password: "passwordText",
            onChange: jest.fn(),
            placeHolder: "placeHolderTest"
        }

        render(<InputPassword {...underTestProps} />)

        expect(screen.getByPlaceholderText('placeHolderTest')).toBeInTheDocument()
    })
});