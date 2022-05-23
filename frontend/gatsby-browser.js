//fonts
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";

import React from "react";
import Layout from "./src/components/Layout";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
