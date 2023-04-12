import React, {useState} from "react";
import identifiers from "@/data/Identifiers";
import _JSXStyle from 'styled-jsx/style'

const SideNavbar = () => {

    const [navbarWidth, setNavbarWidth] = useState("0%")

    const [displayPanel, setDisplayPanel] = useState("none")

    const changeNavbarWidth = () => {
        setNavbarWidth(() => "25%")
    }

    const closeNavbar = () => {
        setNavbarWidth(() => "0%")
    }

    const toggleDisplayPanel = () => {
        const togglerDisplayOptions = {
            "none": "block",
            "block": "none"
        }
        setDisplayPanel((prevState) => togglerDisplayOptions[prevState])
    }

    return (
        <div>
            <button id={identifiers.SIDE_NAVBAR_BUTTON_IDENTIFIER}
                    onClick={changeNavbarWidth}
                    className="trigramForHeaven"
                    style={{
                        cursor: "pointer",
                        color: "#444444",
                        transition: "0.3s"
                    }}
                    data-testid="button-display-div-test">
                &#9776;
            </button>
            <div id={identifiers.SIDE_NAVBAR_DIV_CONTAINER_IDENTIFIER}
                 // style={{
                 //     height: "100%",
                 //     width: navbarWidth,
                 //     position: "fixed",
                 //     zIndex: 1,
                 //     top: 0,
                 //     left: 0,
                 //     backgroundColor: "#F3F3F3",
                 //     overflowX: "auto",
                 //     transition: "0.5s",
                 //     paddingTop: "2.5%",
                 // }}
                className="sideNavbarDiv"
                 data-testid="div-container-test">
                <button id={identifiers.SIDE_NAVBAR_CLOSE_BUTTON_IDENTIFIER} onClick={closeNavbar}
                        style={{
                            marginLeft: "95%",
                            cursor: "pointer"
                        }}
                        data-testid="button-close-div-test">&times;
                </button>
                <a id={identifiers.SIDE_NAVBAR_LINK_APPLICATION_DEPLOYMENT_IDENTIFIER} href="#"
                   className="sideNavbarLinks">Despliegue
                    de aplicaciones</a>
                <a id={identifiers.SIDE_NAVBAR_LINK_DEPLOY_TARIFF_POLICY_ROUTES_MAP_IDENTIFIER} href="#"
                   className="sideNavbarLinks">Desplegar PT-MR</a>
                <button id={identifiers.SIDE_NAVBAR_TEMPLATE_ACCORDION_CONTAINER_IDENTIFIER}
                        onClick={toggleDisplayPanel}
                        className="accordionContainerButton"
                        style={{
                            color: "#444444",
                            cursor: "pointer",
                            transition: "0.3s",
                            backgroundColor: "#F3F3F3",
                            border: "none",
                            padding: "8px 8px 8px 32px",
                            fontSize: "25px",

                        }}
                        data-testid="button-toggle-templates-test">
                    Plantillas
                </button>
                <a href="#" id={identifiers.SIDE_NAVBAR_LINK_COMPILATION_IDENTIFIER}
                   style={{
                       color: "#444444",
                       display: displayPanel,
                       overflow: "auto",
                       padding: "8px 8px 8px 32px",
                       fontSize: "25px",
                       transition: "0.3s"
                   }}
                   data-testid="ref-compilation-test">Compilación</a>
                <a href="#" id={identifiers.SIDE_NAVBAR_LINK_CONFIGURATION_IDENTIFIER}
                   style={{
                       color: "#444444",
                       display: displayPanel,
                       overflow: "auto",
                       padding: "8px 8px 8px 32px",
                       fontSize: "25px",
                       transition: "0.3s"
                   }}
                   data-testid="ref-configuration-test">Configuración</a>
                <a href="#" id={identifiers.SIDE_NAVBAR_LINK_OPERATION_IDENTIFIER}
                   style={{
                       color: "#444444",
                       display: displayPanel,
                       overflow: "auto",
                       padding: "8px 8px 8px 32px",
                       fontSize: "25px",
                       transition: "0.3s"
                   }}
                   data-testid="ref-operation-test">Operación</a>
                <a href="#" id={identifiers.SIDE_NAVBAR_LINK_IMPORT_DEVICES_IDENTIFIER} className="sideNavbarLinks">Importar
                    equipos</a>
            </div>
            <_JSXStyle id={identifiers.SIDE_NAVBAR_DIV_STYLE_IDENTIFIER}>
                {
                    `
                .sideNavbarLinks {
                  padding: 8px 8px 8px 32px;
                  text-decoration: none;
                  font-size: 25px;
                  color: #444444;
                  display: block;
                  transition: 0.3s;
                }
                .sideNavbarLinks:hover {
                  color: #646464;
                }
            `
                }
            </_JSXStyle>
        </div>
        //https://www.w3schools.com/howto/howto_js_sidenav.asp
        // https://www.w3schools.com/howto/howto_js_accordion.asp
    )
}

export default SideNavbar