import styled from "styled-components";
import tw from "twin.macro";
import SectionWithImage from "../../components/Section/SectionWithImage";

export const HomeSubtitle = styled.h2`
    ${tw`text-xl max-w-2xl`}
`
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


export const Section = styled(SectionWithImage)`
    ${tw`h-screen`}

    main{
        ${tw`space-y-8 `}
    }

    h1{
        ${tw`mb-0 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl `}
    }
    `