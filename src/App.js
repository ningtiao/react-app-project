import React from 'react';
// import logo from './logo.svg';
import './App.css';
import RootLayout from "./router/router";
import {BrowserRouter as Router,} from "react-router-dom";
function App() {
  return (
    <div className="App" >
      <Router basename='/'>
        <RootLayout/>
      </Router>
    </div>
  );
}

export default App;
