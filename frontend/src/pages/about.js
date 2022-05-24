import React from "react";
import Hero from "../components/Hero/Hero";
import styled from "styled-components";
import Seo from "../components/SEO";

const Profile = styled.div``;

const AboutPage = () => {
    return (
        <>
            <Seo title="About" />
            <Hero />
            <Profile>About Me</Profile>
        </>
    );
};

export default AboutPage;
