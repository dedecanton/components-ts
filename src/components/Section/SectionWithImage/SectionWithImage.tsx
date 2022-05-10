import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {
  Overlay,
  SectionContainer,
  SectionContent,
  SectionTitle,
} from "./SectionWithImage.style";

type SectionProps = {
  title: string;
  image: string;
  children?: React.ReactNode;
  className?: string;
  id: string;
};

const Section = ({ title, children, image, className, id }: SectionProps) => {
  return (
    <SectionContainer id={id} image={image} className={className && className}>
      <Overlay />
      <SectionContent >
      <SectionTitle>{title}</SectionTitle>
          {children}
        </SectionContent>
    </SectionContainer>
  );
};

export default Section;
