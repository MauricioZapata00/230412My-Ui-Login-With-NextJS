import React from "react";
import identifiers from "@/data/Identifiers";
import {useSelector} from "react-redux";
import Image from "next/image";
import LogoWhite from '../../../public/LogoWhite.png'
const Header = () => {

    const currentUser = useSelector((state) => state.userSlice)

    return(
        <header id={identifiers.HEADER_APPLICATION_BAR_IDENTIFIER}>
            <Image id={identifiers.LOGO_WHITE_IDENTIFIER} width={86} height={24} alt="Cívica logo" src={LogoWhite} />
            <p id={identifiers.HEADER_APPLICATION_TITLE_IDENTIFIER}>CENTRO DE GESTIÓN CÍVICA OPERACIONES</p>
            <p id={identifiers.HEADER_APPLICATION_USER_INFO_IDENTIFIER}>{currentUser.fullName}{currentUser.profile}</p>
        </header>
    )
}

export default Header