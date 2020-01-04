import React from "react";
import App from "next/app";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import { theme } from "../lib/constants/stylingParts";

const GlobalStyle = createGlobalStyle`
  html, body, _next {
    border: 0;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 12pt;
  }

  a {
    text-decoration: none;
    color: ${theme.main};
    :hover {
      opacity: 0.6;
    }
  }
`;

class ThisApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Electronic Ledger</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700,700i&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default ThisApp;
