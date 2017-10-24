import React from 'react';
import { Route } from 'react-router-dom';
import GoogleMap from './GoogleMap';
import VectorMap from './VectorMap';

const MapsPage = ({match}) => (
  <div className="content">
    <div className="container-fluid">
      <Route path={`${match.url}/google-map`} component={GoogleMap} />
      <Route path={`${match.url}/vector-map`} component={VectorMap} />
    </div>
  </div>
);

export default MapsPage;