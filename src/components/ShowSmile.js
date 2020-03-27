import React from 'react'

export default function ShowSmile({photoInfo, selectPhoto, jokeInfo, selectJoke, reload}){

    const randomPic = () => {
        const max = photoInfo.length
        const i = Math.floor(Math.random() * Math.floor(max))
        const photo = photoInfo[i]

        if(jokeInfo.type === "single")
        return selectPhoto(photo), selectJoke(jokeInfo)
        else{
            const joke = {joke: "Something went wrong please reload the page to try again."}
            return selectPhoto(photo), selectJoke(joke)
        }
    }
    return(
        <div className="smile">
            <button className='click-me-button' onClick={() => randomPic() }> CLICK ME! </button>
            <button className='smile-again-button' onClick={()=> reload()}>Smile Again?</button>
        </div>
    )
}