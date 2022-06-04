import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import CartWidget from "../CartWidget";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#91002e" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Container maxWidth="xs" disableGutters></Container>
          <CartWidget />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
