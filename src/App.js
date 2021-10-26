import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import About from "./components/About";
import Block from "./components/Block";

import "./App.css";

//https://images.unsplash.com/photo-1505312926838-645f295a20e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80

const GlobalStyle = createGlobalStyle`
  body {
    background: url('https://images.unsplash.com/photo-1505312926838-645f295a20e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80') no-repeat center center;
    background-size: cover;
    justify-content: center;
  }
`;

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Block>
        <Header />
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
      </Block>
    </div>
  );
};

export default App;
