import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      stringToShow: 'Hello! This is Text from the State!'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.stringToShow}</p>
          <button onClick={() => this.setState({stringToShow: "The text has been changed!!!"})} >Change Text</button>
        </header>
      </div>
    )
  }
}

export default App;
