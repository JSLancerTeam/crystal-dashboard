import React from 'react';
import GridCollection from './GridCollection';
import Paragraph from './Paragraph';

const Grid = () => (
  <div className="content">
    <div className="container-fluid">
      <GridCollection />
      <Paragraph />
    </div>
  </div>
);

export default Grid;