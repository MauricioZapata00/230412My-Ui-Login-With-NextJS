import React, {useState} from "react";
import InputText from "@/components/forms/inputs/InputText";
import Identifiers from "@/data/Identifiers";
import InputPassword from "@/components/forms/inputs/InputPassword";
import {useQuery} from "@tanstack/react-query";
import ApplicationQueryKeys from "@/data/ApplicationQueryKeys";
import axios from "axios";
import Endpoints, {APPLICATION_DOMAIN_NAME} from "@/data/Endpoints";
import MessagesToUser from "@/data/MessagesToUser";
import {useRouter} from "next/router";
import DecoderToken from "@/utils/DecoderToken";
import {useDispatch} from "react-redux";
import {logInUser} from "@/hooks/redux/slices/UserSlice";
import identifiers from "@/data/Identifiers";


const LogInPage = () => {

    const [user, setUser] = useState("")

    const [password, setPassword] = useState("")

    const [errorWhileAuthenticating, setErrorWhileAuthenticating] = useState(false)

    const router = useRouter()

    const dispatch = useDispatch()

    const authenticateEnteredUser = () => {
        return axios.post(APPLICATION_DOMAIN_NAME + Endpoints.logIn,
            {
                username: user.toString(),
                password: password.toString()
            })
    }

    const { refetch } = useQuery({
        queryKey: [ApplicationQueryKeys.logIn],
        queryFn: authenticateEnteredUser,
        enabled: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false
    })

    const changeUserState = (event) => {
        setUser(() => event.target.value)
    }

    const changePasswordState = (event) => {
        setPassword(() => event.target.value)
    }

    const logInSessionHandlerClick = (event) => {
        event.preventDefault()
        refetch().then(response => {
            if (response?.data?.data?.content === MessagesToUser.FAILED_AUTHENTICATION){
                setErrorWhileAuthenticating(true)
                return
            }
            sessionStorage.setItem('jwtToken', response.data.data.token)
            const decoded = DecoderToken(response.data.data.token)
            dispatch(logInUser(decoded))
            router.push('/devices/DeploymentDevicesPage').then(() => {})
        }).catch(() => {})
    }

    const hideDialogMessage = (event) => {
        event.preventDefault()
        setUser("")
        setErrorWhileAuthenticating(false)
        setPassword("")
    }

    const propsToInputText = {
        idLabel: Identifiers.LOGIN_LABEL_INPUT_TEXT_IDENTIFIER,
        labelText: "Usuario",
        idText: Identifiers.LOGIN_INPUT_TEXT_IDENTIFIER,
        text: user,
        onChange: changeUserState,
        placeHolder: "Ingrese un usuario"
    }

    const propsToInputPassword = {
        idLabelPassword: Identifiers.LOGIN_LABEL_INPUT_PASSWORD_IDENTIFIER,
        labelPassword: "Contraseña",
        idPassword: Identifiers.LOGIN_INPUT_PASSWORD_IDENTIFIER,
        password: password,
        onChange: changePasswordState,
        placeHolder: "Ingrese su contraseña"
    }

    return (
        <form action="" method="post">
            <InputText {...propsToInputText} />
            <InputPassword {...propsToInputPassword} />
            <button onClick={(event) =>logInSessionHandlerClick(event)}>Iniciar sesión</button>
            <dialog open={errorWhileAuthenticating} id={identifiers.LOGIN_DIALOG_MESSAGE_ERROR_IDENTIFIER}>
                {MessagesToUser.FAILED_AUTHENTICATION}
                <button id={identifiers.LOGIN_BUTTON_DIALOG_MESSAGE_ERROR_IDENTIFIER} onClick={(event) =>hideDialogMessage(event)}>Ok</button>
            </dialog>
        </form>
    )
}
export default LogInPage