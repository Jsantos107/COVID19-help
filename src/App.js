import React, { Component } from 'react';
import './App.css';
import WorldMap from './components/WorldMap';
import SideCountries from './components/SideCountries';
import CountryInfo from './components/CountryInfo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
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
      <Router>
        <div className="App">
            <header className='header'>
              <img src='./CenterCovidLogo.png' alt='covid-19HELP' />
            </header>
            <main className='main'>
              <Switch>
                <Route exact path='/map'>
                <SideCountries covidInfo={this.state.covidInfo} showCountry={this.showCountry}/>
                <WorldMap />
                {this.state && this.state.selectedCountry &&
                  <CountryInfo country={this.state.selectedCountry}/>
                }
                </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
