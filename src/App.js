import React, { Component } from 'react';
import './App.css';
import WorldMap from './components/WorldMap';
import SideCountries from './components/SideCountries';
import CountryInfo from './components/CountryInfo';
import HomePage from './components/HomePage';
import SmilePage from'./components/SmilePage';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
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
              <nav className="nav-bar">
                <button>
                  <Link to='/' style={{textDecoration:'none', color:'white'}}>Home</Link>
                </button>
                <button>
                  <Link to='/Map' style={{textDecoration:'none', color:'white'}}>Maps</Link>
                </button>
                <button>
                  <Link to='/smile' style={{textDecoration:'none', color:'white'}}>Smile</Link>
                </button>
                <button>
                  <a href='https://www.cdc.gov/coronavirus/2019-ncov/prepare/managing-stress-anxiety.html'  
                  style={{textDecoration:'none', color:'white'}}>Stress</a>
                </button>

              </nav>

            </header>
            <main className='main'>
              <Switch>
                <Route exact path='/'>
                  <HomePage />
                </Route>
                <Route exact path='/map'>
                <SideCountries covidInfo={this.state.covidInfo} showCountry={this.showCountry}/>
                <WorldMap />
                {this.state && this.state.selectedCountry &&
                  <Coun        <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>tryInfo country={this.state.selectedCountry}/>
                }
                </Route>
                <Route exact path='/smile'>
                  <SmilePage />
                </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
