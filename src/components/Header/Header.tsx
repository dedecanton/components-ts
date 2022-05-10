import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {
  HeaderComponent,
  HeaderContainer,
  NavLink,
  NavLinks,
  NavToggle,
} from "./Header.style";
import Social from "../Social";

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

  const [headerstyle, setHeaderstyle] = useState<string>('expanded');

  window.onscroll = () => {
    if (window.scrollY > 20) {
      setHeaderstyle('condensed');
    } else {
      setHeaderstyle('expanded');
    }
  };

  const handleMenuIsActive = () => {
    setMenuIsActive(!menuIsActive);
  };

  const handleNavClick = () => {
    setMenuIsActive(false)
  }

  return (
    <HeaderComponent headerstyle={headerstyle}>
      <HeaderContainer>
        <NavToggle onClick={handleMenuIsActive}>
          {!menuIsActive && <MenuIcon />}
          {menuIsActive && <XIcon />}
        </NavToggle>

        <NavLinks active={menuIsActive}>
          <NavLink onClick={handleNavClick} href="#home">Início</NavLink>
          <NavLink onClick={handleNavClick} href="#about">Sobre</NavLink>
          <NavLink onClick={handleNavClick} href="#services">Serviços</NavLink>
          <NavLink onClick={handleNavClick} href="#testimonials">Depoimentos</NavLink>
          <NavLink onClick={handleNavClick} href="#location">Localização</NavLink>
          <Social className='md:hidden'/>
        </NavLinks>
      </HeaderContainer>
    </HeaderComponent>
  );
};

export default Header;
