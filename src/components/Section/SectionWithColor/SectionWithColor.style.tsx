import styled from "styled-components";
import tw from "twin.macro";

export type sectionProps = {
  backgroundColor?:string;
  twBackgroundColor?:string;
}

export const SectionContainer = styled.section`
  ${tw`bg-white w-full relative py-10 px-2 max-w-full overflow-hidden`}
`;

export const SectionContent = tw.main`
    z-20 
    relative 
    font-mono
    py-4
    px-2
    flex
    flex-col
    items-center
    justify-center
    text-center
    max-w-6xl
    mx-auto
    text-black
    transition-all
    duration-1000
`;
export const SectionTitle = styled.h1`
  ${tw`mb-8 font-mono text-3xl text-center font-black sm:text-4xl lg:text-5xl xl:text-6xl leading-snug text-gray-900 `}
  span {
    ${tw`inline-block mt-2`}
  }
`;

