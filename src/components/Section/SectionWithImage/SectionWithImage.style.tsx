import styled from "styled-components";
import tw from "twin.macro";
import SectionWithImage from ".";

export type sectionProps = {
  image: string;
}
export const SectionContainer = styled.section`
  background-image: url(  ${({image}: sectionProps) =>  image});
  background-size: cover;
  background-position: center;
  ${tw`w-full relative py-10 px-2`}
`;

export const SectionContent = tw.main`
    z-20 
    relative 
    font-mono
    px-2
    flex
    flex-col
    items-center
    justify-center
    text-center
    max-w-6xl
    mx-auto
    h-full
    text-white
`;
export const SectionTitle = styled.h1`
  ${tw`mb-8 font-mono text-3xl text-center font-black sm:text-4xl lg:text-5xl xl:text-6xl leading-snug `}
  span {
    ${tw`inline-block mt-2`}
  }
`;

export const SectionSubtitle = styled.h2`
  ${tw`text-xl max-w-2xl`}
`;

export const Overlay = tw.div`z-10 absolute inset-0 bg-black opacity-80`;

