import { useState } from "react";
import { NavBarContainer } from "./NavBarContainer";
import Logo from "./Logo";
import { MenuLink } from "./MenuLink";
import { MenuToggle } from "./MenuToggle";

export const NavBar = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <Logo
        display="flex"
        flexDirection="row"
        alignItems="center"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLink isOpen={isOpen} />
    </NavBarContainer>
  );
};
