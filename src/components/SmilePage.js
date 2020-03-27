import React, { Component } from 'react'
import ShowSmile from './ShowSmile'
import ShowPhoto from './ShowPhoto'
import ShowJoke from './ShowJoke'
export default class SmilePage extends Component{
    state={
        photoInfo:[],
        thePhoto: null,
        jokeInfo: [],
        theJoke: null
    }

    componentDidMount(){
        fetch('https://picsum.photos/v2/list')
            .then(response => response.json())
            .then(photoInfo => this.setState({ photoInfo }))

        fetch('https://sv443.net/jokeapi/category/programming')
            .then(response =>response.json())
            .then(jokeInfo => this.setState({jokeInfo}))
    }
    selectPhoto = (photo) => {
        this.setState({
          thePhoto: photo
        })
      }
    
    selectJoke = (joke) =>{
        this.setState({
            theJoke: joke
        })
    }
    reloadDocument = () => document.location.reload()

    render(){
        return(
            <div className="smile-page">
                <h1>Smile</h1>
                <ShowSmile photoInfo={this.state.photoInfo} jokeInfo={this.state.jokeInfo} 
                selectJoke={this.selectJoke} selectPhoto={this.selectPhoto} reload={this.reloadDocument}/>
                {this.state && this.state.thePhoto &&
                  <ShowPhoto photo={this.state.thePhoto}/>
                }
                {this.state && this.state.thePhoto &&
                  <ShowJoke theJoke={this.state.theJoke}/>
                }
                
            </div>
        )
    }
}