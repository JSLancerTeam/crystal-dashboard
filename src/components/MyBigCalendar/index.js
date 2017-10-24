import React from 'react';
import BigCalendar from 'react-big-calendar';

const MyBigCalendar = (props) => (
  <BigCalendar
    {...props}
    components={
      toolbar={Toolbar}
    } />
);