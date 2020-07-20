import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Product from "./pages/product";
import Images from "./pages/images";
import Contact from "./pages/contact";
import SingleProduct from "./pages/SingleProduct";
import NotFound from "./pages/404";
import AnimatedPage from "./pages/animatedPage/animatedPage";

import "./css/header.scss";
import "./css/index.css";
import "./css/product.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/medicaps">
          <AnimatedPage />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/images">
          <Images />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products/:id">
          <SingleProduct />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
