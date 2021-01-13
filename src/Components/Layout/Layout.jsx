import React from "react";
// Components
import { Navbar } from "../";
// Material UI
import Container from "@material-ui/core/Container";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
