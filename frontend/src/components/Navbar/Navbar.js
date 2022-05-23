import React from "react";
import { menu } from "../../constants/menu";
import { Link } from "gatsby";
import NabarStyled from "./Nabar.styled";

const Navbar = () => {
    return (
        <NabarStyled>
            <ul>
                {menu.map((item) => {
                    return (
                        <li key={item.path}>
                            <Link to={item.path}>{item.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </NabarStyled>
    );
};

export default Navbar;
