import {render, screen} from "@testing-library/react";
import DeploymentDevicesPage from "@/pages/devices/DeploymentDevicesPage";
import {Provider} from "react-redux";
import store from "@/hooks/redux/store";

describe('DeploymentDevicesPage should works', function () {
    test('DeploymentDevicesPage should renders', () => {
        render(
            <Provider store={store}>
                <DeploymentDevicesPage/>
            </Provider>
        )

        expect(screen.getByText('Despliegue de dispositivos')).toBeInTheDocument()
    })
});