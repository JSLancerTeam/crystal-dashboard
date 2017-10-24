import React from 'react';

const ButtonGroups = () => (
  <div>
    <div className="header">
      <h4 className="title">Button Group</h4>
    </div>
    <div className="content">
      <div className="btn-group">
        <button type="button" className="btn btn-default">Left</button>
        <button type="button" className="btn btn-default">Middle</button>
        <button type="button" className="btn btn-default">Right</button>
      </div>

      <br /><br />
      <div className="btn-group">
        <button type="button" className="btn btn-default">1</button>
        <button type="button" className="btn btn-default">2</button>
        <button type="button" className="btn btn-default">3</button>
        <button type="button" className="btn btn-default">4</button>
      </div>
      &nbsp;
      <div className="btn-group">
        <button type="button" className="btn btn-default">5</button>
        <button type="button" className="btn btn-default">6</button>
        <button type="button" className="btn btn-default">7</button>
      </div>
      &nbsp;
      <div className="btn-group">
        <button type="button" className="btn btn-default">8</button>
      </div>
    </div>
  </div>
);

export default ButtonGroups;