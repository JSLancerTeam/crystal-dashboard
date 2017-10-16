import React from 'react';
import { Route } from 'react-router-dom';
import RegularTables from './RegularTables';
import ExtendedTables from './ExtendedTables';
import FixedDataTable from './FixedDataTable';

const Tables = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/regular-tables`} component={RegularTables} />
    <Route path={`${match.url}/extended-tables`} component={ExtendedTables} />
    <Route path={`${match.url}/fixed-data-table`} component={FixedDataTable} />
  </div>
);

export default Tables;