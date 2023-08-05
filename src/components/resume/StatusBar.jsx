// StatusBar.jsx
import React from 'react';
import './StatusBar.css';

const StatusBar = ({ percentage, parameterName }) => {
  return (
    <div className="status-bar">
      <div className="status-bar-fill" style={{ width: `${percentage}%` }}>
        {parameterName}
      </div>
    </div>
  );
};

export default StatusBar;
