import React from 'react';
import generateData from '../generateData';
import StripedTable from './StripedTable';
import PlainBackgroundTable from './PlainBackgroundTable';

const data = generateData(5);

const RegularTables = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <StripedTable data={data} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <PlainBackgroundTable data={data} />
      </div>
    </div>
  </div>
);

export default RegularTables;