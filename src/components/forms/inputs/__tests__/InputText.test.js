import React from "react";
import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import InputText from "../InputText";

describe('InputText should works', function () {
    test('InputText should renders', () => {
        const underTestProps = {
            idLabel: "AND1",
            labelText: "testLabel",
            idText: "lki-6",
            text: "testText",
            onChange: jest.fn(),
            placeHolder: "placeHolderTest"
        }

        render(<InputText {...underTestProps} />)

        expect(screen.getByPlaceholderText('placeHolderTest')).toBeInTheDocument()

    })

});