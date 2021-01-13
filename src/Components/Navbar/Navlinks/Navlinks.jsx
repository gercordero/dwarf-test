import React from "react";
// Links
import links from "./links";
// Styled UI
import { StyledUl, Link } from "./styles/Navlink.styles";

const Navlinks = () => {
  return (
    <StyledUl>
      {links.map((link) => (
        <Link key={link.id}>{link.text}</Link>
      ))}
    </StyledUl>
  );
};

export default Navlinks;
