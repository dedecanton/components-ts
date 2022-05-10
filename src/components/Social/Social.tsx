import React from "react";

import { GrFacebook, GrInstagram } from "react-icons/gr";
import { Container, SocialLink } from "./Social.style";

type SocialProps = {
    className?:string
}

const Social = ({className}:SocialProps) => {
  return (
    <Container >
      <SocialLink className={className} href='https://www.facebook.com/caiiorizzi/' target={'_blank'} >
        <GrFacebook />
      </SocialLink>
      <SocialLink className={className} href='https://www.instagram.com/tochettosbarbearia/' target={'_blank'}>
        <GrInstagram />
      </SocialLink>
    </Container>
  );
};

export default Social;
