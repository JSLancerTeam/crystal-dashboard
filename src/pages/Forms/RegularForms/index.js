import React from 'react';
import StackedForm from './StackedForm';
import HorizontalForm from './HorizontalForm';
import FormElements from './FormElements';

const RegularForms = () => (
  <div>
    <div className="row">
      <div className="col-md-6">
        <StackedForm onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} />
      </div>
      <div className="col-md-6">
        <HorizontalForm  onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} />
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <FormElements initialValues={{
          radioGroup: 'male',
          a: true,
          checked: true,
          disabledChecked: true,
          radioOnOff: 'on',
          radioDisabledOnOff: 'on'
        }} />
      </div>
    </div>
  </div>
);

export default RegularForms;