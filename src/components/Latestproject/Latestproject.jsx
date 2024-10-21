import React from "react";
import Innerlatest from "./Innerlatest";
import img1 from '../images/img-1.4797e63d96e18d13ec5c.jpg';
import img2 from '../images/img-2.f8810823695991797f87.jpg';
import img3 from '../images/img-3.28f44764b71a311d39d1.jpg';
import img4 from '../images/img-4.2fc9e78f10cc2b35d462.jpg';
import img5 from '../images/img-5.6f6d29fbfc5ef15e88a4.jpg';
import img6 from '../images/img-6.5b336668ce6aaccf5fdf.jpg';
import './Latestproject.css';

const Latestproject = () => {
  return (
    <>
      <div className="latest-project-container"> 
        <h2>Our Latest Projects</h2>
        <p>Uty enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit <br/>laboriosam nisi commodi consequatur.</p>
      </div> 
      <div className="latest-project-images">
        <div>
          <Innerlatest image={img1} heading={"Professional Designer"} subheading={"UI/UX Designer"}/>
          <Innerlatest image={img2} heading={"Product Designer"} subheading={"Web Designer"}/>
          <Innerlatest image={img3} heading={"Design Development"} subheading={"PHP Developer"}/>
        </div>
       
        <div>
          <Innerlatest image={img4} heading={"Product Designer"} subheading={"React Developer"}/>
          <Innerlatest image={img5} heading={"Design Development"} subheading={"UI/UX Designer"}/>
          <Innerlatest image={img6} heading={"Professional Designer"} subheading={"Web Developer"}/>
        </div>
      </div>
    </>
  )
}

export default Latestproject;
