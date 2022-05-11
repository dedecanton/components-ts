import styled from "styled-components";
import tw from "twin.macro";
import SectionWithImage from "../Section/SectionWithImage";

type GaleryType = {
    image: string
}

export const Slide = styled.div`
    ${tw`h-96 mobile:h-[30rem] bg-cover bg-no-repeat rounded mb-2`}
    background-image: url(${({image}:GaleryType) => image});
    background-position: center;
    
`

export const Thumbnail = styled.div`
    background-image: url(${({image}:GaleryType) => image});
    background-position: center;
    ${tw`h-20 bg-cover bg-no-repeat rounded`}
`

export const MainSlider = styled.div`
`

export const Section = styled(SectionWithImage)`
    main{
        ${tw`w-full sm:(w-[30rem]) md:(w-[35rem])`}
    }
`