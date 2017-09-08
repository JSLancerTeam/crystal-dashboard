import React from 'react';
import Map from './Map';

const MapsPage = () => (
  <div style={{width: '100%', height: '100%', boxSizing: 'border-box'}}>
    <Map
      containerElement={
        <div style={{width: '100%', height: '100%'}}/>
      }
      mapElement={
        <div style={{ height: `100%`, height: '100%' }} />
      }/>
  </div>
);

export default MapsPage;