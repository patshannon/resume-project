import React, { useState } from "react";
import { MemoryRouter, Switch, Route, BrowserRouter as Router, Redirect, Link, NavLink } from 'react-router-dom';
import {CSSTransition} from "react-transition-group";

import Home from "./Home/Home"
import About from "./About/About"
import Contact from "./Contact/Contact"
import { logDOM } from "@testing-library/dom";


const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about-me', name: 'About Me', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },      // WORK IN PROGESS
]


function App(){
  return(
    <Router>
      <>
        <div className="padding-16">
          <nav className="justify-center">
            {routes.map(route =>(
              <NavLink
                key={route.path}
                to={route.path}
                activeClassName="active"
                className="nav-margin nav-padding nav-btn"
                exact
                >
                  {route.name}
              </NavLink>
            ))}
          </nav>
        </div>

        
          
        <div>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={300}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
          ))}
        </div>
      </>
    </Router>
);
  };

export default App;