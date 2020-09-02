import React from "react";
import { createGlobalStyle } from "styled-components";

import Layout from "./components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Layout></Layout>
  </>
);

export default App;
