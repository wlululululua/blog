import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import HeaderStyled from "./Header.styled";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Device } from "../../styles/Theme";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
    const isDesktop = useMediaQuery(Device.Desktop);

    return (
        <HeaderStyled>
            <Logo />
            {isDesktop ? <Navbar /> : <AiOutlineMenu />}
        </HeaderStyled>
    );
};

export default Header;
