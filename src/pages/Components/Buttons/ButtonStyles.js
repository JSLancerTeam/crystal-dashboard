import React from 'react';

const ButtonStyles = () => (
  <div>
    <div className="header">
      <h4 className="title">Styles</h4>
    </div>
    <div className="content buttons-with-margin">
      <button className="btn btn-wd">Default</button>
      <button className="btn btn-fill btn-wd">Fill</button>
      <button className="btn btn-fill btn-rectangle btn-wd">Fill + Rectangle</button>
      <button className="btn btn-rectangle btn-wd">Rectangle</button>
      <button className="btn btn-simple btn-wd">Simple</button>
    </div>
  </div>
);

export default ButtonStyles;