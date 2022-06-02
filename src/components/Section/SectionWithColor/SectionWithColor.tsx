import React from "react";

import { useInView } from "react-intersection-observer";

import {
  SectionContainer,
  SectionContent,
  SectionTitle,
} from "./SectionWithColor.style";

type SectionProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
  id: string;
};

const Section = ({ title, children, className, id }: SectionProps) => {

  const [ref, inView] = useInView();

  return (
    <SectionContainer id={id} className={className} ref={ref} >
      <SectionContent className={inView ? `left-0` : `left-full`} >
      <SectionTitle>{title}</SectionTitle>
          {children}
        </SectionContent>
    </SectionContainer>
  );
};

export default Section;
