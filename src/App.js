import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/index';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle=()=>{setIsOpen(!isOpen)}
  return (
    <div className="">
      <Router>
        <Navbar toggle={toggle} isOpen={isOpen}/> 
        <Switch>
        <Route path="/" exact component={() => <Home isOpen={isOpen} />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
