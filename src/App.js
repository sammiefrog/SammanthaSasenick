import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

// import Grid from './components/Grid';
// import Particle from './components/Particle'

function App() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//  value={value} handleChange={handleChange} 
  return (
    <Router>
      <NavTabs/>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
      {/* {value === 0 && <Home />}
      {value === 1 && <Portfolio />} */}

      </Switch>
      {/* <Particle /> */}
      {/* <Grid /> */}
      <Footer />
    </Router>
  );
}

export default App;
