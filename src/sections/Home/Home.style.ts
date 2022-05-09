import styled from "styled-components";
import tw from "twin.macro";
import { Overlay, SectionContainer, SectionSubtitle, SectionTitle } from "../../components/SectionStyles";

export const Container = styled.section`
    background-image: url('/barber.jpg');
    background-size: cover;
    background-position: center;
    ${tw`w-full h-screen relative py-10`}
`

export const BackgroundOverlay = tw(Overlay)``

export const HomeContent = tw(SectionContainer)`
    text-white
    h-full 
    space-y-8 
`

export const HomeTitle = styled(SectionTitle)``;
export const HomeSubtitle = styled(SectionSubtitle)``

export const HomeLink = styled.a`
    ${tw`
    uppercase
    cursor-pointer
    rounded 
    px-8 py-3
    text-sm text-white sm:text-base  
    border border-white
    outline-none
    sm:mt-16 sm:px-8 sm:py-4
    shadow transition duration-300 hocus:(bg-white text-black scale-105 shadow-2xl font-bold)  `}
`