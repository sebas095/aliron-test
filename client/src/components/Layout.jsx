import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Container = styled.div``;

const Layout = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
