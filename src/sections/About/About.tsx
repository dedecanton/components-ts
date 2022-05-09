import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutDescription,
  AboutImage,
  AboutTitle,
} from "./About.style";

const About = () => {
  return (
    <AboutContainer id='about'>
      <AboutImage>
        <img src="/bar.jpg" alt="" />
      </AboutImage>
      <AboutContent>
        <AboutTitle>Sobre</AboutTitle>
        <AboutDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolorem similique, corrupti incidunt qui praesentium facilis sed suscipit unde excepturi id! Cum odit quae animi facilis temporibus quod officia velit? </AboutDescription>
      </AboutContent>
      <AboutImage>
        <img src="/corte.jpg" alt="" />
      </AboutImage>
    </AboutContainer>
  );
};

export default About;
