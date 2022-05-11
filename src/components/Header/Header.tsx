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
import links from '../menus.json'

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);

  const [headerstyle, setHeaderstyle] = useState<string>("expanded");

  window.onscroll = () => {
    if (window.scrollY > 20) {
      setHeaderstyle("condensed");
    } else {
      setHeaderstyle("expanded");
    }
  };

  const handleMenuIsActive = () => {
    setMenuIsActive(!menuIsActive);
  };

  const handleNavClick = () => {
    setMenuIsActive(false);
  };

  return (
    <HeaderComponent headerstyle={headerstyle}>
      <HeaderContainer>
        <NavToggle onClick={handleMenuIsActive}>
          {!menuIsActive && <MenuIcon />}
          {menuIsActive && <XIcon />}
        </NavToggle>

        <NavLinks active={menuIsActive}>
          {links.map((link) => (
            <NavLink key={link.title} onClick={handleNavClick} href={link.href}>{link.title}</NavLink>
          ))}
          <Social className="md:hidden" />
        </NavLinks>
      </HeaderContainer>
    </HeaderComponent>
  );
};

export default Header;
