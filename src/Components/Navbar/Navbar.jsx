import React from "react";
// Components
import Navlinks from "./Navlinks/Navlinks";
// Material UI
import Grid from "@material-ui/core/Grid";
// Logo
import logo from "../../assets/logo.svg";
// Styled components
import { StyledNav, Logo } from "./styles/Navbar.styles";

const Navbar = () => {
  return (
    <StyledNav>
      <Grid container spacing={3}>
        {/* Logo image */}
        <Grid item xs={2} sm={2} md={2}>
          <Logo src={logo} alt="logo" />
        </Grid>
        {/* Nav links */}
        <Grid item xs={10} sm={10} md={10}>
          <Navlinks />
        </Grid>
      </Grid>
    </StyledNav>
  );
};

export default Navbar;
