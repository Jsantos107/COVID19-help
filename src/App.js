import React, { Component } from 'react';
import './App.css';
import WorldMap from './components/WorldMap'
 class App extends Component {

  render(){
    return (
      <div className="App">
        <header className='header'>
          <img src='./WhiteCovidLogo.png' alt='covid-19HELP' />
          <ul className='nav-bar'>
            
          </ul>
        </header>
        <main className='main'>
          <WorldMap />
        </main>
      </div>
    );
  }
}

export default App;
