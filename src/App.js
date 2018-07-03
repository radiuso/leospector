import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="hero is-primary">
        <div className="hero-body has-text-centered">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title">Welcome to React</h1>
          <p className="subtitle">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
