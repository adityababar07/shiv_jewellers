import React from "react";
import {Switch, Route} from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import Home from "./Home";
import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </div>
  );
}

export default App;
