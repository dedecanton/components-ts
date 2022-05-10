import React from "react";
import {
  HomeLink,
  HomeSubtitle,
  Section,
} from "./Home.style";

const Home = () => {
  return (
    <Section id='home' image='/barber.jpg' title="Tochetto's Barbearia">
        <HomeSubtitle>
          Aqui é barba, cabelo e bigode! Venha dar aquele tapa no visual e tomar
          aquela cervejinha gelada conversando com os amigos.{" "}
        </HomeSubtitle>
        <HomeLink href='#about'>Ver mais!</HomeLink>
    </Section>
  );
};

export default Home;
