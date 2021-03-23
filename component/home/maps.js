import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import AOS from "aos"

const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Maps extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  componentDidMount(){
    AOS.init({duration:2000});
  }
  render() {
    return (
      <div data-aos="fade-up" style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAQ7fAoEXLz2QVQzYCkhEG_vz87i7WcKW4" }}
          defaultCenter={this.props.data.center}
          defaultZoom={this.props.data.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Maps;