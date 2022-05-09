import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";

export const HeaderComponent = styled.header`
${tw`fixed top-0 left-0 w-full border-b-2 border-blue-500`}`;

export const HeaderContainer = styled.div`
  ${tw`
        flex
        justify-between
        items-center
        max-w-screen-xl
        mx-auto
        p-4
    `}
`

type navProps = {
    active:boolean
}
export const NavLinks = styled.div` 
${tw`
    fixed top-0 -right-full
    w-full h-screen
    flex flex-col items-center justify-center
    transition-all duration-500

    md:(flex-row mx-auto h-auto static justify-end)
`}

    ${({active}:navProps) => active && tw`right-0`}
`;

export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-blue-500 hocus:text-blue-500

  md:(ml-4)
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-blue-500 text-gray-100
  cursor-pointer
  hocus:(bg-blue-700 text-gray-200) focus:(shadow-2xl) hover:(transform scale-110)
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0! text-center`};
  img {
    ${tw`w-10 mr-3`}
  }
`;

export const NavToggle = styled.button`
    ${tw`
        z-10
        text-black
        md:(hidden)
        focus:outline-none hocus:(text-blue-500 transition duration-300)
    `}
    
    svg{
        ${tw`w-8 h-8`}
    }
`;
