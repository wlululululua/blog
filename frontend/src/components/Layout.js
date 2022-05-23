import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
