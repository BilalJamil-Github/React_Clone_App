import React from "react";
import './Client.css';
import Innerclient from "./Innerclient";
import img from "../images/img-2.e8740135d7a449055730.png";

const Client = () => {
  return (
    <>
      <div className="client-header">
        <h2>What Our Customers Say</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit <br /> laboriosam nisi commodi consequatur.</p>
      </div>
      <div className="client-container">
        <Innerclient className="inner-client" img={img} name={"Joshua Vargas"} profession={"Web Developer"} country={"USA"} />
        <Innerclient className="inner-client" img={img} name={"Sammie Lewis"} profession={"UI/UX Designer"} country={"USA"} />
        <Innerclient className="inner-client" img={img} name={"Sarah Levine"} profession={"PHP Developer"} country={"USA"} />
      </div>
    </>
  )
}

export default Client;
