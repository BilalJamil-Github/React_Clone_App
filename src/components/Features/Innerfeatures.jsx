import React from 'react';
import PropTypes from 'prop-types';
import './Innerfeatures.css';

const Innerfeatures = ({ Headings, Text, border }) => {
  const containerClass = border ? 'innerfeatures-container border' : 'innerfeatures-container';

  return (
    <div className={containerClass}>
      <h3 className="innerfeatures-heading">{Headings}</h3>
      <p className="innerfeatures-text">{Text}</p>
      <span className="innerfeatures-link">More Information →</span>
    </div>
  );
};


export default Innerfeatures;