import React from 'react'

export default function SideCountries({covidInfo}){
    const showCountries = covidInfo.map(countriesInfo =>
            <li>{countriesInfo.Country}</li>
        )
    return(
        <div className="side-countries">
            <div className="side-countries-title">
            <h1>Countries Infected</h1>
            </div>
            <ul className='side-countries-list'>
                {showCountries}
            </ul>
        </div>
    )
}