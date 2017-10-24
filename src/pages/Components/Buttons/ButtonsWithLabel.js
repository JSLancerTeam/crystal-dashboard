import React from 'react';

const ButtonsWithLabel = () => (
  <div>
    <div className="header">
      <h4 className="title">Buttons with Label</h4>
    </div>
    <div className="content buttons-with-margin">
      <button type="button" className="btn btn-wd btn-success">
        <span className="btn-label">
          <i className="fa fa-check"></i>
        </span> Success
      </button>

      <button type="button" className="btn btn-wd btn-danger">
        <span className="btn-label">
          <i className="fa fa-times"></i>
        </span> Danger
      </button>

      <button type="button" className="btn btn-wd btn-info">
        <span className="btn-label">
          <i className="fa fa-exclamation"></i>
        </span> Info
      </button>

      <button type="button" className="btn btn-wd btn-warning">
        <span className="btn-label">
          <i className="fa fa-warning"></i>
        </span> Warning
      </button>

      <button type="button" className="btn btn-wd btn-default">
        <span className="btn-label">
          <i className="fa fa-arrow-left"></i>
        </span> Left
      </button>

      <button type="button" className="btn btn-wd btn-default">
        Right <span className="btn-label btn-label-right">
          <i className="fa fa-arrow-right"></i>
        </span>
      </button>
    </div>
  </div>
);

export default ButtonsWithLabel;