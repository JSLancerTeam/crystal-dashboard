import React from 'react';
import { Route } from 'react-router-dom';
import RegularForms from './RegularForms';
import ExtendedForms from './ExtendedForms';
import ValidationForms from './ValidationForms';

const Forms = ({match}) => (
  <div className="content">
    <div className="container-fluid">
      <Route path={`${match.url}/regular-forms`} component={RegularForms} />
      <Route path={`${match.url}/extended-forms`} component={ExtendedForms} />
      <Route path={`${match.url}/validation-forms`} render={props => {
        return <ValidationForms {...props} onSubmit={values => alert(JSON.stringify(values, null, 2))}/>
      }} />
    </div>
  </div>
);

export default Forms;