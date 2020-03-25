import React, { Component } from 'react';
import './App.css';
import WorldMap from './components/WorldMap'
import SideCountries from './components/SideCountries'
import CountryInfo from './components/CountryInfo';
 class App extends Component {
   state ={
     covidInfo:[],
     selectedCountry: null
   }
   componentDidMount(){
     fetch('https://api.covid19api.com/summary')
      .then(response => response.json())
      .then(result => this.setState({ covidInfo: result.Countries}))
   }
   
   showCountry = (country) => {
     this.setState({
       selectedCountry: country
     })
     console.log(country)
   }

  render(){
    return (
      <div className="App">
        <header className='header'>
          <img src='./CenterCovidLogo.png' alt='covid-19HELP' />
        </header>
        <main className='main'>
          <SideCountries covidInfo={this.state.covidInfo} showCountry={this.showCountry}/>
          <WorldMap />
          {this.state && this.state.selectedCountry &&
            <CountryInfo country={this.state.selectedCountry}/>
          }
        </main>
      </div>
    );
  }
}

export default App;
