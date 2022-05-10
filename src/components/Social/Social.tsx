import React from "react";

import { GrFacebook, GrInstagram } from "react-icons/gr";
import { BsWhatsapp } from "react-icons/bs";
import { Container, SocialLink } from "./Social.style";

type SocialProps = {
  className?: string;
};

const Social = ({ className }: SocialProps) => {
  return (
    <Container>
      <SocialLink
        className={className}
        href="https://www.facebook.com/caiiorizzi/"
        target={"_blank"}
      >
        <GrFacebook />
      </SocialLink>
      <SocialLink
        className={className}
        href="https://www.instagram.com/tochettosbarbearia/"
        target={"_blank"}
      >
        <GrInstagram />
      </SocialLink>
      <SocialLink
        className={className}
        href="https://api.whatsapp.com/send?phone=5554996289556&text=Ol%C3%A1,%20entrei%20no%20Google%20e%20gostaria%20de%20solicitar%20um%20servi%C3%A7o."
        target={"_blank"}
      >
        <BsWhatsapp />
      </SocialLink>
    </Container>
  );
};

export default Social;
