import React from "react";
import {
  BackgroundOverlay,
  Container,
  HomeContent,
  HomeLink,
  HomeSubtitle,
  HomeTitle,
} from "./Home.style";

const Home = () => {
  return (
    <Container>
      <BackgroundOverlay />
      <HomeContent>
        <HomeTitle>Tochetto's Barbearia</HomeTitle>
        <HomeSubtitle>
          Aqui é barba, cabelo e bigode! Venha dar aquele tapa no visual e tomar
          aquela cervejinha gelada conversando com os amigos.{" "}
        </HomeSubtitle>
        <HomeLink href='#about'>Ver mais!</HomeLink>
      </HomeContent>
    </Container>
  );
};

export default Home;
