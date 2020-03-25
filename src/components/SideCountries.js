import React from 'react'

export default function SideCountries({covidInfo, showCountry}){
    const handleClick = (countriesInfo) => {
        return showCountry(countriesInfo)
    }

    const showCountries = covidInfo.map(countriesInfo =>
            <li onClick={() => handleClick(countriesInfo)}>{countriesInfo.Country}</li>
        )
    return(
        <div className="side-countries">
            <div className="side-countries-title">
            <h1>Countries Infected</h1>
            </div>
            <ul className='side-countries-list'>
                {showCountries}
                <br></br>
            </ul>
        </div>
    )
}