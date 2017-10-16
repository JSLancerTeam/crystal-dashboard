import React from 'react';

const GridCollection = () => (
  <div>
    <h4 className="title">XS Grid <small>Always Horizontal</small></h4>
    <div className="row">
      <div className="col-xs-4">
        <div className="card">
          <div className="content text-center">
            <code>col-xs-4</code>
          </div>
        </div>
      </div>
      <div className="col-xs-4">
        <div className="card">
          <div className="content text-center">
            <code>col-xs-4</code>
          </div>
        </div>
      </div>
      <div className="col-xs-4">
        <div className="card">
          <div className="content text-center">
            <code>col-xs-4</code>
          </div>
        </div>
      </div>
    </div>

    <h4 className="title">SM Grid <small>Collapsed at 768px</small></h4>
    <div className="row">
      <div className="col-sm-4">
        <div className="card">
          <div className="content text-center">
            <code>col-sm-4</code>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="content text-center">
            <code>col-sm-4</code>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card">
          <div className="content text-center">
            <code>col-sm-4</code>
          </div>
        </div>
      </div>
    </div>

    <h4 className="title">MD Grid <small>Collapsed at 992px</small></h4>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="content text-center">
            <code>col-md-4</code>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="content text-center">
            <code>col-md-4</code>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="content text-center">
            <code>col-md-4</code>
          </div>
        </div>
      </div>
    </div>

    <h4 className="title">LG Grid <small>Collapsed at 1200px</small></h4>
    <div className="row">
      <div className="col-lg-4">
        <div className="card">
          <div className="content text-center">
            <code>col-lg-4</code>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="content text-center">
            <code>col-lg-4</code>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="card">
          <div className="content text-center">
            <code>col-lg-4</code>
          </div>
        </div>
      </div>
    </div>

    <h4 className="title">Mixed Grid <small>Showing different sizes on different screens</small></h4>
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <div className="card">
          <div className="content text-center">
            <code>col-sm-6 col-lg-3</code>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card">
          <div className="content text-center">
            <code>col-sm-6 col-lg-3</code>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card">
          <div className="content text-center">
            <code>col-sm-6 col-lg-3</code>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-3">
        <div className="card">
          <div className="content text-center">
            <code>col-sm-6 col-lg-3</code>
          </div>
        </div>
      </div>
    </div>

    <h4 className="title">Offset Grid <small>Adding some space when needed</small></h4>
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <div className="content text-center">
            <code>col-md-3</code>
          </div>
        </div>
      </div>
      <div className="col-md-3 col-md-offset-6">
        <div className="card">
          <div className="content text-center">
            <code>col-md-3 col-md-offset-6</code>
          </div>
        </div>
      </div>

      <div className="col-md-4 col-md-offset-1">
        <div className="card">
          <div className="content text-center">
            <code>col-md-4 col-md-offset-1</code>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-md-offset-2">
        <div className="card">
          <div className="content text-center">
            <code>col-md-4 col-md-offset-2</code>
          </div>
        </div>
      </div>

      <div className="col-md-6 col-md-offset-3">
        <div className="card">
          <div className="content text-center">
            <code>col-md-6 col-md-offset-3</code>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default GridCollection;