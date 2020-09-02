import React from "react";
import { createGlobalStyle } from "styled-components";

import Layout from "./components/Layout";
import Main from "./components/Main";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #F8F9FE;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Main />
    </Layout>
  </>
);

export default App;
