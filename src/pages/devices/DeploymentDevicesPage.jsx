import Header from "@/components/headerApplication/Header";
import SideNavbar from "@/components/sideNavbar/SideNavbar";
import Identifiers from "@/data/Identifiers";

const DeploymentDevicesPage = () => {
    return(
        <div>
            <Header />
            <SideNavbar />
            <table id={Identifiers.DEPLOYMENT_DEVICE_PAGE_TABLE_CONTAINER}>
                 <tr id={Identifiers.DEPLOYMENT_DEVICE_PAGE_TABLE_HEADER}>
                     <th>
                         <input type="checkbox"/>
                     </th>
                     <th>
                         Serial
                     </th>
                     <th>
                         Estación
                     </th>
                     <th>
                         Ruta
                     </th>
                     <th>
                         Nombre
                     </th>
                     <th>
                         Versión
                     </th>
                     <th>
                         IP del equipo
                     </th>
                     <th>
                         Fecha última actualización
                     </th>
                     <th>
                         Plantilla de compilación
                     </th>
                     <th>
                         Plantilla de configuración
                     </th>
                     <th>
                         Plantilla de operación
                     </th>
                     <th>
                         Editar dispositivo
                     </th>
                 </tr>
             </table>
        </div>
    )
}

export default DeploymentDevicesPage