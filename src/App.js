import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import About from "./components/About";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./App.css";
import Contact from "./components/Contact";

//https://images.unsplash.com/photo-1505312926838-645f295a20e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1234&q=80

const GlobalStyle = createGlobalStyle`
  body {
    background: url('https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?cs=srgb&dl=pexels-jakub-novacek-924824.jpg&fm=jpg') no-repeat center center;
  
    justify-content: center;
  }
`;

const App = () => {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Header />

      <TransitionGroup className="transition-group">
        <CSSTransition key={location.pathname} classNames="fade" timeout={500}>
          <Switch location={location}>
            <Route path="/introduce/" exact={true} component={Home} />
            <Route path="/introduce/about" component={About} />
            <Route path="/introduce/contact" component={Contact} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default App;
