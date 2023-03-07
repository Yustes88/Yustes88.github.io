import React from "react";
import GoogleMapReact from 'google-map-react';

type MapComponentProps = {
  text: string,
  lat: number,
  lng: number,
}

const MapComponent = ({ text, lat, lng }: MapComponentProps) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  // const google_api_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBD6giqn65jnifjGcC6wZ8uO9GbAIKDoi0'}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}