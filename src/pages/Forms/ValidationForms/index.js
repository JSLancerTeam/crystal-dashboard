import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import _ from 'lodash';

const validate = values => {
  const errors = {};
  if (!values.required) {
    errors.required = 'This field is required';
  }
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email';
  }
  if (values.number && _.isNaN(values.number)) {
    errors.number = 'Please enter a number';
  }
  if (values.url && !/^https?:\/\//i.test(values.url)) {
    errors.url = 'Please enter a valid URL';
  }
  if (values.equal1 && values.equal1 !== values.equal2) {
    errors.equal2 = 'Does not match';
  }
  return errors;
}

const ValidationForm = ({
  handleSubmit,
  onSubmit
}) => (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="header"><h4>Validation</h4></div>
          <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
            <div className="content">
              <div className="form-group">
                <label className="col-sm-3 control-label">Required text</label>
                <div className="col-sm-9">
                  <Field
                    type="text"
                    name="required"
                    component={renderField} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label">Email</label>
                <div className="col-sm-9">
                  <Field
                    type="email"
                    name="email"
                    component={renderField} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label">Number</label>
                <div className="col-sm-9">
                  <Field
                    type="text"
                    name="number"
                    component={renderField} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label">URL</label>
                <div className="col-sm-9">
                  <Field
                    type="text"
                    name="url"
                    component={renderField} />
                </div>
              </div>

              <div className="form-group">
                <label className="col-sm-3 control-label">Equal to</label>
                <div className="col-sm-4">
                  <Field
                    type="text"
                    name="equal1"
                    component={renderField} />
                </div>
                <div className="col-sm-5">
                  <Field
                    type="text"
                    name="equal2"
                    component={renderField} />
                </div>
              </div>
            </div>
            <div className="footer text-center">
              <button type="submit" className="btn btn-info btn-fill">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

export default reduxForm({
  form: 'validationForm',
  validate
})(ValidationForm);