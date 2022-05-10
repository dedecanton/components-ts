import React from "react";

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
  return (
    <SectionContainer id={id} className={className} >
      <SectionContent className={'z-20 relative font-mono py-4 px-2 flex flex-col items-center justify-center text-center text-white'} >
      <SectionTitle>{title}</SectionTitle>
          {children}
        </SectionContent>
    </SectionContainer>
  );
};

export default Section;
