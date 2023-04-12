import React from "react";
import {act, fireEvent, render, screen} from "@testing-library/react";
import SideNavbar from "@/components/sideNavbar/SideNavbar";

describe('SideNavbar should works', function () {
    test('SideNavbar should renders', () =>{
        render(<SideNavbar />)

        expect(screen.getByText('Despliegue de aplicaciones')).toBeInTheDocument()
    })

    test('SideNavbar should opens and closes the div container', () => {
        render(<SideNavbar />)

        act(() => fireEvent.click(screen.getByTestId('button-display-div-test')))

        expect(screen.getByTestId('div-container-test')).toHaveStyle({width: "25%"})

        act(() => fireEvent.click(screen.getByTestId('button-close-div-test')))

        expect(screen.getByTestId('div-container-test')).toHaveStyle({width: "0%"})
    })

    test('SideNavbar should toggles panels of the div container', () => {
        render(<SideNavbar />)

        act(() => fireEvent.click(screen.getByTestId('button-display-div-test')))

        act(() => fireEvent.click(screen.getByTestId('button-toggle-templates-test')))

        expect(screen.getByTestId('ref-compilation-test')).toHaveStyle({display: "block"})
        expect(screen.getByTestId('ref-configuration-test')).toHaveStyle({display: "block"})
        expect(screen.getByTestId('ref-operation-test')).toHaveStyle({display: "block"})

        act(() => fireEvent.click(screen.getByTestId('button-toggle-templates-test')))

        expect(screen.getByTestId('ref-compilation-test')).toHaveStyle({display: "none"})
        expect(screen.getByTestId('ref-configuration-test')).toHaveStyle({display: "none"})
        expect(screen.getByTestId('ref-operation-test')).toHaveStyle({display: "none"})
    })
});