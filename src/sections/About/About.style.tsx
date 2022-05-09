import styled from "styled-components";
import tw from "twin.macro";
import { SectionContainer, SectionTitle, SectionSubtitle } from "../../components/SectionStyles";

export const AboutContainer = tw(SectionContainer)`text-primary md:(flex-row space-x-8 space-y-0) my-8 space-y-8`

export const AboutContent = tw.div``

export const AboutTitle = tw(SectionTitle)``

export const AboutImage = styled.div`
    img{
        width:100%;
        height:auto;
        ${tw`rounded-2xl`}
    }
`

export const AboutDescription = tw(SectionSubtitle)`max-w-md`