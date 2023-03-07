import GoogleMapReact from 'google-map-react';
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from 'react';

type MapComponentProps = {
  lat: number,
  lng: number,
}

const MapComponent = ({ lat, lng }: MapComponentProps) => {
 return(
 <>
  <MapPinIcon className="w-10 stroke-red-50" fill='red'/>
  </>)
};



export default function SimpleMap({lat, lng}: MapComponentProps){
  const [value, setValue] = useState({
    lat: 59.93853,
    lng: 30.347819,
  });

  useEffect(() => {
    setValue({lat, lng});
}, [lat, lng]);


  const google_api_key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string;

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: google_api_key}}
        center={value}
        zoom={16}
      >
        <MapComponent
          lat={lat}
          lng={lng}
        />
      </GoogleMapReact>
    </div>
  );
}