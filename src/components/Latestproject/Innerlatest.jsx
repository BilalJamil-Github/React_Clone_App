import React, { useState } from "react";
import './Innerlatest.css';

const Innerlatest = ({ image, heading, subheading }) => {
  const [blurObj, setblueObj] = useState({ marginLeft: '20px', width: '300px', height: 'auto' });
  const [eyeIcon, seteyeIcon] = useState(false);

  const updateInfunction = () => {
    setblueObj({
      filter: 'blur(5px)',
      width: '300px',
      height: 'auto',
      textAlign: 'left'
    });
    seteyeIcon(true);
  }

  const updateOutfunction = () => {
    setblueObj({
      width: '300px',
      height: 'auto'
    });
    seteyeIcon(false);
  }

  return (
    <>
      <div className={eyeIcon ? 'inner-latest-container' : ''} onMouseEnter={updateInfunction} onMouseLeave={updateOutfunction}>
        <img className="inner-latest-image" style={blurObj} src={image} alt="" />
        {eyeIcon && (
          <i>
            <svg className="inner-latest-icon" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <g>
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </g>
            </svg>
          </i>
        )}
        <h4 className="inner-latest-heading">{heading}</h4>
        <p className="inner-latest-subheading">{subheading}</p>
      </div>
    </>
  )
}

export default Innerlatest;
