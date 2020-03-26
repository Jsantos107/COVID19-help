import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryInfo(){

    return(
        <div className="home-page">
            <h1>Covid-19</h1>
            <br></br>
            <p>This Site is designed to inform and protect. Please wash your hands, stay safe, and happy.</p>
            <br></br>
            <button>
                <Link to='/map'  style={{textDecoration:'none', color:'white', fontWeight:'900'}}>Map</Link>
            </button> 
            <button>
              <Link to='/smile' style={{textDecoration:'none', color:'white', fontWeight:'900'}}>Smile</Link>
            </button>
            <button>
                <a href='https://www.cdc.gov/coronavirus/2019-ncov/prepare/managing-stress-anxiety.html'  
                style={{textDecoration:'none', color:'white', fontWeight:'900'}}>Stressing</a>
            </button>

        </div>
    )
}