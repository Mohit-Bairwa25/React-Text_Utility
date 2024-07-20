import React from "react";
import logo from './logo.svg';

let name = "Bairwa & Company";
export default function Homepage (){
    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank"rel="noopener noreferrer">
            Learn React with Mohit {name}
          </a>
        </header>
        <div className="testing">
          Applyin CSS Here in Recat
        </div>
        <div id="testing">
          Applyin CSS Here in Recat
        </div>
      </div>
    )
}