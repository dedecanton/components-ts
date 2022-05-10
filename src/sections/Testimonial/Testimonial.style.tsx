import styled from "styled-components";
import tw from "twin.macro";
import { BadgeCheckIcon } from "@heroicons/react/solid";

import SectionWithColor from "../../components/Section/SectionWithColor";
export const TestimonialSection = styled(SectionWithColor)``


export const TestimonialsSlider = styled.div`
  ${tw`flex mx-auto max-w-xs sm:max-w-xl lg:max-w-4xl text-left bg-gray-100 rounded-lg text-gray-900`}
  .slick-track {
    ${tw`flex!`}
  }
  .slick-slide {
    ${tw`h-auto`}
  }
  .slick-slide > div {
    ${tw`h-full`}
  }
`;
export const Testimonial = tw.div`px-6 py-12 sm:px-20 sm:py-16 focus:outline-none flex! flex-col justify-between h-full`
export const QuoteContainer = tw.div`relative`
export const QuoteIcon = tw(BadgeCheckIcon)`absolute opacity-10 top-0 -left-2 transform -translate-y-2 -translate-x-1/2 sm:-translate-x-full w-10 fill-current text-black`
export const Quote = tw.blockquote`font-medium sm:font-normal relative text-sm sm:text-xl text-center sm:text-left`
export const CustomerInfoAndControlsContainer = tw.div`mt-8 flex items-center flex-col sm:flex-row justify-center text-center sm:text-left`
export const CustomerImage = tw.img`w-16 h-16 rounded-full`
export const CustomerNameAndProfileContainer = tw.div`mt-4 sm:mt-0 sm:ml-4 flex flex-col`
export const CustomerName = tw.span`text-lg font-semibold`
export const CustomerProfile = tw.span`text-sm font-normal text-gray-700`
export const ControlsContainer = tw.div`sm:ml-auto flex`
export const ControlButton = styled.button`
  ${tw`text-black hover:text-black focus:outline-none transition-colors duration-300 ml-4 first:ml-0 sm:first:ml-4 mt-4 sm:mt-0`}
  .icon {
    ${tw`fill-current w-6`}
  }
`;