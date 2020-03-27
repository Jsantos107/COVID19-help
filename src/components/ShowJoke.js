import React from 'react'

export default function ShowJoke({ theJoke }){

    return(
        <div className="smile-joke">
            <h1>{theJoke.joke}</h1>
        </div>
    )
}