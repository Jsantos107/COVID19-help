import React from 'react'

export default function ShowPhoto({photo}){

    return(
        <div className="smile-photo">
            <img src={photo.download_url} alt={photo.author} height='250px'/>
        </div>
    )
}