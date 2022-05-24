import React from "react";
import Hero from "../components/Hero/Hero";
import Posts from "../components/Post/Posts";
import Seo from "../components/SEO";

const IndexPage = () => {
    return (
        <>
            <Seo title="Home" />
            <Hero />
            <Posts />
        </>
    );
};

export default IndexPage;
