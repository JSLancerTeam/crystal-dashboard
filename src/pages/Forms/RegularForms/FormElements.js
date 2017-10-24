import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const FormElements = () => (
  <div className="card">
    <div className="header">
      <h4>Form Elements</h4>
    </div>
    <div className="content">
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-md-3">With help</label>
          <div className="col-md-9">
            <Field
              name="withHelp"
              type="text"
              component={renderField}
              helpText="A block of help text that breaks onto a new line." />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Password</label>
          <div className="col-md-9">
            <Field
              name="password"
              type="password"
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Placeholder</label>
          <div className="col-md-9">
            <Field
              name="placeholder"
              type="text"
              placeholder="placeholder"
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Disabled</label>
          <div className="col-md-9">
            <Field
              name="disabled"
              type="text"
              placeholder="This input is disabled"
              disabled={true}
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Checkboxes and radios</label>
          <div className="col-md-9 checkbox-group">
            <Field
              name="checkbox1"
              type="checkbox"
              label="First Checkbox"
              component={renderField} />

            <Field
              name="checkbox2"
              type="checkbox"
              label="Second Checkbox"
              component={renderField} />

            <Field
              name="radioGroup"
              type="radio"
              label="Male"
              value="male"
              component={renderField} />

            <Field
              name="radioGroup"
              type="radio"
              label="Female"
              value="female"
              component={renderField} />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Inline checkboxs</label>
          <div className="col-md-9 checkbox-group">
            <Field
              name="a"
              type="checkbox"
              label="a"
              component={renderField} />
            <Field
              name="b"
              type="checkbox"
              label="b"
              component={renderField} />
            <Field
              name="c"
              type="checkbox"
              label="c"
              component={renderField} />
          </div>
        </div>

        <fieldset>
          <legend>Input variants</legend>
          <label className="col-sm-2 control-label">Custom Checkboxes & radios</label>
          <div className="col-sm-4 col-sm-offset-1 checkbox-group">
            <Field
              name="unchecked"
              type="checkbox"
              label="Unchecked"
              component={renderField} />

            <Field
              name="checked"
              type="checkbox"
              label="Checked"
              component={renderField} />

            <Field
              name="disabledUnchecked"
              type="checkbox"
              label="Disabled Unchecked"
              disabled
              component={renderField} />

            <Field
              name="disabledChecked"
              type="checkbox"
              label="Disabled Checked"
              disabled
              component={renderField} />
          </div>

          <div className="col-sm-5 radio-group">
            <Field
              name="radioOnOff"
              type="radio"
              label="Radio is off"
              value="off"
              component={renderField} />

            <Field
              name="radioOnOff"
              type="radio"
              label="Radio is on"
              value="on"
              component={renderField} />

            <Field
              name="radioDisabledOnOff"
              type="radio"
              label="Disabled Unchecked"
              value="off"
              disabled
              component={renderField} />

            <Field
              name="radioDisabledOnOff"
              type="radio"
              label="Disabled Checked"
              value="on"
              disabled
              component={renderField} />

          </div>
        </fieldset>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'formElements'
})(FormElements);