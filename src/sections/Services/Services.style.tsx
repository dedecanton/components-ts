import tw from 'twin.macro'
import styled from 'styled-components';
import SectionWithImage from '../../components/Section/SectionWithImage';

type CardsProps = {
    srcImage: string
}


export const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap justify-center mx-auto`;
export const Column = tw.div` w-full lg:w-1/3 mb-8`;
export const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col w-auto md:(w-80) bg-white rounded-2xl text-primary transition-all duration-300 hover:(scale-110)`;


export const Image = styled.div`
    background-image: url(${({srcImage}:CardsProps) => srcImage});
    ${tw`bg-cover bg-center w-full mx-auto h-80  rounded-t-xl `}
`
export const Details = tw.div` text-xl font-bold text-center p-6 rounded shadow-inner bg-gray-900 text-white rounded-t-none flex-1 flex flex-col items-center lg:block underline`;
export const Title = tw.h5`p-6 leading-snug font-bold text-lg bg-gray-900 border-8 border-white rounded-2xl uppercase text-white w-full`;
  
export const Section = styled(SectionWithImage)``