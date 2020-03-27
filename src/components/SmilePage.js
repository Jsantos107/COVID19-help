import React, { Component } from 'react'
import ShowSmile from './ShowSmile'
import ShowPhoto from './ShowPhoto'
export default class SmilePage extends Component{
    state={
        photoInfo:[],
        thePhoto: null
    }

    componentDidMount(){
        fetch('https://picsum.photos/v2/list')
            .then(response => response.json())
            .then(photoInfo => this.setState({ photoInfo }))
    }
    selectPhoto = (photo) => {
        this.setState({
          thePhoto: photo
        })
      }
    
    render(){
        return(
            <div className="smile-page">
                <h1>Smile</h1>
                <ShowSmile photoInfo={this.state.photoInfo} selectPhoto={this.selectPhoto}/>
                {this.state && this.state.thePhoto &&
                  <ShowPhoto photo={this.state.thePhoto}/>
                }
            </div>
        )
    }
}