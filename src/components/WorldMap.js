import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%',
};

export class MapContainer extends Component {
  render() {
    return (
    <div className='map'>
        <h1>Map of Number Infected</h1>
        <Map
            google={this.props.google}
            zoom={3}
            style={mapStyles}
            initialCenter={{
            lat: 38.8267,
            lng: -105.7821
            }}
        />
    </div>
    );
  }
}

export default GoogleApiWrapper({
//   apiKey: 'YOUR API KEY HERE'
})(MapContainer);
