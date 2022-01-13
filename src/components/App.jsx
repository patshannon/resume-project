import React, { useState } from "react";
import {
  MemoryRouter,
  Switch,
  Route,
  Routes,
  BrowserRouter as Router,
  Redirect,
  Link,
  NavLink,
} from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import { logDOM } from "@testing-library/dom";

const routes = [
  { path: "/", name: "Home", Element: Home },
  { path: "/about-me", name: "About Me", Element: About },
  // { path: '/contact', name: 'Contact', Element: Contact },      // WORK IN PROGESS
];

function App() {
  return (
    <>
      <div className="padding-16">
        <nav className="justify-center">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              exact={route}
              to={route.path}
              className="nav-margin nav-padding nav-btn"
            >
              {route.name}
            </NavLink>
          ))}
        </nav>
      </div>
      <Routes>
        {routes.map(({ path, Element }) => (
          <Route
            key={path}
            exact
            path={path}
            element={<Element />}
            // element={({ match }) => (
            //   <CSSTransition
            //     in={match != null}
            //     timeout={300}
            //     classNames="page"
            //     unmountOnExit
            //   >
            //     <div className="page">
            //       <Element />
            //     </div>
            //   </CSSTransition>
            // )}
          ></Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
