import React from "react";
import Seo from "../components/SEO";
import styled from "styled-components";
import ErrorImg from "../images/404-error.png";

const PageSpace = styled.div`
    height: 80vh;
    font-size: 5rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--purple-a100);
    background-image: url(${ErrorImg});
    background-repeat: space;
`;

const NotfoundPage = () => {
    return (
        <>
            <Seo title="404" />
            <PageSpace>Not Found</PageSpace>
        </>
    );
};

export default NotfoundPage;
