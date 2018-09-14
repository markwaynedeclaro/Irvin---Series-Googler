import React, { Component } from 'react';
import Main from './../Main'
import Logo from './../../assets/Irvin-play.png';
import './App.css';



class App extends Component {

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img
            src={Logo}
            className="App-logo"
            alt="Irvin - Series Googler"
          />
          <h1 className="App-title">Series Googler</h1>
        </header>

        <div className="App-main">
          <Main />
        </div>

      </div>
    );
  }
}

export default App;
