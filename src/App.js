import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/index';
import Browse from "./pages/Browse"
import Stats from "./pages/Stats"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar/> 
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/browse" exact component={Browse}/>
        <Route path="/stats" exact component={Stats}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
