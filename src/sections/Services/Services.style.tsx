import tw from 'twin.macro'
import styled from 'styled-components';
import { SectionContainer, SectionTitle, SectionSubtitle, Overlay } from "../../components/SectionStyles";


export const ServicesContainer = styled(SectionContainer)`
    background-image: url('/services.jpg');
    background-size: cover;
    background-position: center;
    ${tw`w-full relative py-10`}
`

export const ServicesContent = styled.div`
    ${tw`z-30 text-white flex flex-col items-center justify-center mx-auto max-w-6xl`}
`

export const ServicesTitle = tw(SectionTitle)``
export const ServicesDescription = tw(SectionSubtitle)``
export const BackgroundOverlay = tw(Overlay)``

export const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap justify-center mx-auto`;
export const Column = tw.div`mt-24 w-full lg:w-1/3`;
export const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full w-auto md:(w-80)`;

type CardsProps = {
    srcImage: string
}

export const Image = styled.div`
    background-image: url(${({srcImage}:CardsProps) => srcImage});
    ${tw`bg-cover bg-center h-80 rounded rounded-b-none`}


`

export const Details = tw.div`text-center p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-purple-100 flex-1 flex flex-col items-center lg:block`;
export const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
  