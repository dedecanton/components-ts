import React from "react";
import { Section } from "./Services.style";
import {
  Card,
  Column,
  ThreeColumn,
  Image,
  Title,
  Details,
} from "./Services.style";

type Service = {
  title: string;
  price: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Corte a tesoura",
    price: "R$25,00",
    image: "/tesoura.jpg",
  },
  {
    title: "Corte a máquina",
    price: "R$20,00",
    image: "/maquina.jpg",
  },
  {
    title: "Corte com riscos",
    price: "R$30,00",
    image: "/risco.jpg",
  },
  {
    title: "Corte infantil",
    price: "R$25,00",
    image: "/infantil.jpg",
  },
  {
    title: "Platinados",
    price: "R$100,00 - 150,00",
    image: "/platinado.jpg",
  },
];

const Services = () => {
  return (
    <Section id='services' title="Serviços" image="/services.jpg">
      <ThreeColumn>
        {services.map((service: Service) => (
          <Column key={service.title}>
            <Card>
              <Image srcImage={service.image} />
              <Title>{service.title}</Title>
              <Details>{service.price}</Details>
            </Card>
          </Column>
        ))}
      </ThreeColumn>
    </Section>
  );
};

export default Services;
