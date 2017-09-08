import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';

const Map = () => (
  <div>
    <GoogleMap
      defaultZoom={3}
      defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
    />
  </div>
);

export default withGoogleMap(Map);