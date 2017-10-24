import React from 'react';
import DatePicker from './DatePicker';
import Switches from './Switches';
import TagSection from './TagSection';

const ExtendedForm = () => (
  <div>
    <div className="card">
      <div className="content">
        <DatePicker />
        <Switches />
        <TagSection />
      </div>
    </div>
  </div>
);

export default ExtendedForm;