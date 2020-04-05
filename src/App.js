import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./Components/navbar";
import Home from "./Components/home";
import About from "./Components/about";
import Services from "./Components/services";
import Portofolio from "./Components/portofolio";
import Contact from "./Components/contact";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <div className="overlay"></div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/portofolio" component={Portofolio} />
          <Route path="/contact" component={Contact} />
          <Redirect from="/" to="/home" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
