import React from "react";
import Innerabout from "./Innerabout";
import './Aboutus.css';

const Aboutus = () => {
  return (
    <>
      <div className="aboutus-container">
        <h2 className="aboutus-heading">About Us</h2>
        <p className="aboutus-description">
          Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit <br />
          laboriosam nisi commodi consequatur.
        </p>
      </div> 
      <div className="aboutus-content">
        <div className="aboutus-column">
          <p className="aboutus-feature-heading">Productive & Customizable For Developers</p>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil atque corrupti molestiae.</p>
          <ul className="aboutus-feature-list">
            <li className="aboutus-feature-item">
              <svg className="aboutus-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              Marketing Program activities
            </li>
            <li className="aboutus-feature-item">
              <svg className="aboutus-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              Customization product
            </li>
            <li className="aboutus-feature-item">
              <svg className="aboutus-feature-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              At vero eos accusamus iusto
            </li>
          </ul>
          <span className="more-information">More Information →</span>
        </div>
        <Innerabout />
        <Innerabout />
      </div>
    </>
  );
}

export default Aboutus;
