import GoogleMapReact from 'google-map-react';
import { MapPinIcon } from "@heroicons/react/24/outline";

type MapComponentProps = {
  lat: number,
  lng: number,
}

const MapComponent = ({ lat, lng }: MapComponentProps) => {
 return(
 <>
  <MapPinIcon className="w-10 stroke-red-50"/>
  </>)
};

export default function SimpleMap({lat, lng}: MapComponentProps){
  const defaultProps = {
    center: {
      lat: 59.934280,
      lng: 30.335098
    },
    zoom: 15
  };

  const google_api_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: google_api_key}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapComponent
          lat={lat}
          lng={lng}
        />
      </GoogleMapReact>
    </div>
  );
}