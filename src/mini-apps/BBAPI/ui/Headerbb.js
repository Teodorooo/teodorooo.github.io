import React from 'react';
import logo from '../BBimages/logo.png';

function Headerbb() {
  return (
    <header className="bbapi-header">
      <img src={logo} alt="Breaking Bad" className="bbapi-logo" />
    </header>
  );
}

export default Headerbb;
