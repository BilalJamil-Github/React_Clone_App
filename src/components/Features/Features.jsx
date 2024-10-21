import React from "react";
import Innerfeatures from "./Innerfeatures";
import img from "../images/img-2.e8740135d7a449055730.png";
import "./Features.css";

const Features = () => {
  return (
    <>
      <div className="features-container">
        <h2>Our Features</h2>
        <p>
          Ut enim ad minima veniam quis nostrum exercitationem ullam corporis
          suscipit <br />
          laboriosam nisi commodi consequatur.
        </p>
      </div>
      <div className="features-content">
        <div className="imgContainer">
          <img src={img} alt="Feature" />
        </div>
        <div className="contentContainer">
          <Innerfeatures
            Headings={"Work With Existing App"}
            Text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae exercitationem consequuntur sapiente quas laborum?"}
            border={true}
            
          />
          <Innerfeatures
            Headings={"Easy Email Marketing"}
            Text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae exercitationem consequuntur sapiente quas laborum?"}
          />
          <Innerfeatures
            Headings={"Get Private Customers Feedback"}
            Text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit beatae exercitationem consequuntur sapiente quas laborum?"}
          />
        </div>
      </div>
    </>
  );
};

export default Features;
