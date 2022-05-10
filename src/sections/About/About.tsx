import React from "react";
import {
  AboutContent,
  AboutDescription,
  AboutImage,
  Section,
} from "./About.style";

const About = () => {
  return (
    <Section id='about' title='Sobre'>
      <AboutContent>
      <AboutImage>
        <img src="/bar.jpg" alt="" />
      </AboutImage>
      <AboutContent>
        <AboutDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora dolorem similique, corrupti incidunt qui praesentium facilis sed suscipit unde excepturi id! Cum odit quae animi facilis temporibus quod officia velit? </AboutDescription>
      </AboutContent>
      <AboutImage>
        <img src="/corte.jpg" alt="" />
      </AboutImage>
      </AboutContent>
    </Section>
  );
};

export default About;
