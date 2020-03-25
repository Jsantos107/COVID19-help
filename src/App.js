import React, { Component } from 'react';
import './App.css';
import WorldMap from './components/WorldMap'
import SideCountries from './components/SideCountries'
 class App extends Component {
   state ={
     covidInfo:[]
   }
   componentDidMount(){
     fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(result => this.setState({ covidInfo: result.Countries}))
   }
  render(){
    return (
      <div className="App">
        <header className='header'>
          <img src='./WhiteCovidLogo.png' alt='covid-19HELP' />
        </header>
        <main className='main'>
          <SideCountries covidInfo={this.state.covidInfo} />
          <WorldMap />
        </main>
      </div>
    );
  }
}

export default App;
