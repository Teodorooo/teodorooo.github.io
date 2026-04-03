import React from 'react';
import spinner from '../BBimages/spinner.gif';

function Spinner() {
  return (
    <div className="bbapi-spinner">
      <img src={spinner} alt="Loading..." />
    </div>
  );
}

export default Spinner;
