import React from 'react'

export default function ShowSmile({photoInfo, selectPhoto}){

    const randomPic = () => {
        const max = photoInfo.length
        const i = Math.floor(Math.random() * Math.floor(max))
        const photo = photoInfo[i]
        return selectPhoto(photo)
    }
    return(
        <div className="smile">
            <button onClick={() => randomPic()}> CLICK ME! </button>
        </div>
    )
}