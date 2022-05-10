import styled from "styled-components";
import tw from "twin.macro";
import SectionWithColor from "../../components/Section/SectionWithColor";

export const AboutContent = tw.div`flex flex-col items-center space-y-8 md:(flex-row space-x-8 space-y-0) `;



export const AboutImage = styled.div`


  img {
    width: 100%;
    height: auto;
    ${tw`rounded-2xl`}
  }
`;


export const AboutDescription = styled.h2`
    ${tw`text-xl max-w-md`}
`

export const Section = styled(SectionWithColor)``;

