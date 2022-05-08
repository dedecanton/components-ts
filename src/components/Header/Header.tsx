import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import {
  HeaderComponent,
  LogoLink,
  NavLink,
  NavLinks,
  NavToggle,
  PrimaryLink,
} from "./Header.style";

const Header = () => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false)

  const handleMenuIsActive = () => {
    setMenuIsActive(!menuIsActive)
    console.log('oi')
  }

  return (
    <HeaderComponent>
      <LogoLink>Logo</LogoLink>
      <NavToggle onClick={handleMenuIsActive}>
        {!menuIsActive && <MenuIcon />}
        {menuIsActive && <XIcon/>}        
      </NavToggle>

      <NavLinks active={menuIsActive}>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Blog</NavLink>
        <NavLink href="#">Price</NavLink>
        <PrimaryLink>Signup</PrimaryLink>
      </NavLinks>
    </HeaderComponent>
  );
};

export default Header;
