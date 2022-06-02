import React from "react";

import { useInView } from "react-intersection-observer";

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

const Section = ({
  title,
  children,
  image,
  className,
  id,
}: SectionProps) => {
  const [ref, inView] = useInView();

  return (
    <SectionContainer id={id} image={image} className={className} ref={ref}>
      <Overlay />
      <SectionContent
        className={inView ? `right-0` : `right-full`}
      >
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
