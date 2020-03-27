import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryInfo(){

    return(
        <div className="home-page">
            <h1>Covid-19</h1>
            <br></br>
            <p>This site is designed to inform and soothe, not to scare. Please remember to wash your hands, stay safe, and be happy.</p>
            <br></br>
            <button>
                <Link to='/map'  style={{textDecoration:'none', color:'white', fontWeight:'900'}}>Map</Link>
            </button> 
            <button>
              <Link to='/smile' style={{textDecoration:'none', color:'white', fontWeight:'900'}}>Smile</Link>
            </button>
            <button>
                <a href='https://www.cdc.gov/coronavirus/2019-ncov/prepare/managing-stress-anxiety.html'  
                style={{textDecoration:'none', color:'white', fontWeight:'900'}}>Stress</a>
            </button>

        </div>
    )
}