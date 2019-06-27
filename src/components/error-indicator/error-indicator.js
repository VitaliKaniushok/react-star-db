import React from 'react';
import './error-indicator.css';

const ErrorIndicator = ({ err }) => {

  return (
    <div className="error-indicator">
    	<h3>BOOM!</h3>
    	<p>Error: {err}</p>
    </div>
  )
}

export default ErrorIndicator;