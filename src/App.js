import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

// import Grid from './components/Grid';
// import Particle from './components/Particle'

function App() {
  return (
    <Router>
      <NavTabs />
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
      {/* <Particle /> */}
      {/* <Grid /> */}
    </Router>
  );
}

export default App;
