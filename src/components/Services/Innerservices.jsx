import { useState } from "react";
import "./Innerservices.css";

const Innerservices = ({ heading, url }) => {
  return (
    <div className="innerservices-container">
      <img src={url} alt="Service Icon" />
      <h3>{heading}</h3>
      <p>Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.</p>
      <span>More Information →</span>
    </div>
  );
};

export default Innerservices;
