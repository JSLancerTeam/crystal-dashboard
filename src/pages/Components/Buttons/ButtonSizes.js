import React from 'react';

const ButtonSizes = () => (
  <div>
    <div className="header">
      <h4 className="title">Sizes</h4>
    </div>
    <div className="content buttons-with-margin">
      <button className="btn btn-lg btn-fill">Large</button>
      <button className="btn btn-fill">Default</button>
      <button className="btn btn-sm btn-fill">Small</button>
      <button className="btn btn-xs btn-fill">X-Small</button>
      <br />
      <button className="btn btn-rectangle btn-lg btn-fill">Large</button>
      <button className="btn btn-rectangle btn-fill">Default</button>
      <button className="btn btn-rectangle btn-sm btn-fill">Small</button>
      <button className="btn btn-rectangle btn-xs btn-fill">X-Small</button>
    </div>
  </div>
);

export default ButtonSizes;