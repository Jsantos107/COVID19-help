import React from 'react'
import { Link } from 'react-router-dom'

export default function CountryInfo(){

    return(
        <div className="home-page">
            <h1>Covid-19</h1>
            <br></br>
            <p>This Site is designed to inform and protect. Please wash your hands, stay safe, and happy</p>
            <br></br>
            <button>
                <Link to='/map'  style={{textDecoration:'none', color:'white', fontWeight:'900'}}>Map</Link>
            </button>
        </div>
    )
}