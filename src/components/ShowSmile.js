import React from 'react'
import { findAllByDisplayValue } from '@testing-library/react'

export default function ShowSmile({photoInfo, selectPhoto, jokeInfo, selectJoke, reload}){

    const randomPic = () => {
        const max = photoInfo.length
        const i = Math.floor(Math.random() * Math.floor(max))
        const photo = photoInfo[i]

        if(jokeInfo.type === "single"){
            selectPhoto(photo)
            selectJoke(jokeInfo)
        }
        else{
            const joke = {joke: "Something went wrong please reload the page to try again."}
            selectPhoto(photo)
            selectJoke(joke)
        }
    }

    return(
        <div className="smile">
            <button className='smile-again-button' onClick={()=> {reload()
                randomPic()}}> Smile Again? </button>
        </div>
    )
}