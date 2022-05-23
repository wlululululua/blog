import React from "react";
import HeroStyled from "./Hero.styled";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
    return (
        <HeroStyled>
            <section className="image">
                <StaticImage src="../../images/person.jpg" />
            </section>
            <section className="words">
                <p>🎉🎉🎉欢迎来到wlulu的blog~~~~~~</p>
                <p>keep learning🐌🐌🐌</p>
                <p>知其然，知其所以然💪💪💪</p>
            </section>
        </HeroStyled>
    );
};

export default Hero;
