import React from 'react'

export default function CountryInfo({country}){

    return(
        <div className="country-info">
            <h1>Covid-19</h1>
            <h2>Country:{country.Country}</h2>
            <h3>Total confirmed: {country.TotalConfirmed}</h3>
            <h3>Total Deaths: {country.TotalDeaths}</h3>
            <h3>Total Recovered: {country.TotalRecovered}</h3>
        </div>
    )
}