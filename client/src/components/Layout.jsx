import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 40px;
  grid-template-columns: 250px 1fr;
  grid-template-areas:
    "nav main"
    "nav footer";
  column-gap: 5px;
`;

const Layout = ({ children }) => (
  <Container>
    <Navbar />
    {children}
    <Footer />
  </Container>
);

export default Layout;
