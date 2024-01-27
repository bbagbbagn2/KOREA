import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
  }

  body {
    background: #f1f1f1;
    direction: 1tr;
  }

  body, html {
    margin: 0;
    margin-block: 0 12px;
    color: #000;
    letter-spacing: 0;
    
    @media only screen and (min-width: 1200px) {
      margin: 0;
      font-size: 16px;
      line-height: 26px;
    }
  }

  main {
    display: block;
  }
  
  a {
    word-wrap: break-word;
    color: #000;
    letter-spacing: 0;
    text-decoration: underline;
    background-color: transparent;
  }

  ul {
    margin-block: 0 12px;
    color: #000;
    letter-spacing: 0;
  }

  h1 {
    margin: 0.67em 0;
    margin-top: 0;
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
    letter-spacing: 0;
  }

  h3 {
    margin-top: 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0;
  }

  p {
    margin-block: 0 12px;
    letter-spacing: 0;
  }

  b, strong {
    font-weight: bolder;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  @media only screen and (min-width: 1200px) {
      ul {
        font-size: 16px;
        line-height: 26px;
      }
      
      a {
        font-size: 16px;
        line-height: 26px;
      }

      h1 {
        font-size: 38px;
        line-height: 48px;
      }

      h3 {
    font-size: 24px;
    line-height: 32px;
  }

      p {
        margin-bottom: 14px;
    font-size: 16px;
    line-height: 26px;
  }
    }
`;

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyle />
  </React.StrictMode>
);
