import styled from "styled-components";
import tw from "twin.macro";

export const SectionContainer = tw.div`
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
`
export const SectionTitle = styled.h1`
  ${tw`font-mono text-3xl text-center font-black sm:text-4xl lg:text-5xl xl:text-6xl leading-snug sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

export const SectionSubtitle = styled.h2`
    ${tw`text-xl max-w-2xl`}
`

export const Overlay = tw.div`z-10 absolute inset-0 bg-black opacity-80`;