import React from "react";
import './Innerclient.css';

const Innerclient = ({ img, name, profession, country }) => {
  return (
    <div className="inner-client-container">
      <div className="inner-client-card">
        <img className="inner-client-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAMAAABNTyq8AAAAzFBMVEVHcEw5Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt45Vt58fkcmAAAARHRSTlMAwKu92tei0rSlxdDNyJu3qNXLucO7nq6w3bII4JOZ9+LmcO795PPqJ6n63houn3l0oANADI4rZGyBIn1JhjITXGlTN9Cvsv0AAAHcSURBVDjLVdTrdoIwDADggAooDlE3dGOg4hS34UAV0V28vv87LWmLtPlnz3fSJA0CAOyOxyWLXQIiksVuweOb/d4FrUdNqz31Ox2rWazpaH0OjdWX5zmOE4YRsu9W76GFrEbMekkJZc2mYRilChLI221F3QBuuusSWwl1gUdbVReAQi/VF1M59EzTllUEsB/o+rukAuh1uXoQ5RMayspD1G6oitCLqgKw6w1klUIUWagGQmGTAZjPQonCMkTY5JCSCYXoU1WEsEmLXcmbDKH7iqpeKUJPqgqhMR6/csULSwGyWqWosBDqk5miEKWaqhywJ6pCtNdU5cBfzNS9/B+AHRsYe0k2Cg9OmqoQQVG9N41iBeAf+jTGmhgYIfgNXGzdM/iVBts7H2Od5KywA1RH/sYi1YQqtiapA8iRUS4ZrTVq8k9BZ2rSlTPZNAo1055WX860nFGTFwUF1GQoH7BRbGSz1GgUaXVwjeN4MutuJXPS2cB+y99+NJ2Skus+DtmGWVs+utwx51OMeCa+4SRLfxyxrmc6WHx8jEaj+ZxYIZI41e547KPevN1VUN7Ur5er3+G5N2+lyu/lWOV7D8T9iJiyr1XNGt8KOy2bPZmoxu+FL78ZjtV0I/6/A/++PUl8bnVS3QAAAABJRU5ErkJggg==" alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vitae laudantium ducimus.</p>
      </div>
      <div className="inner-client-details">
        <img className="inner-client-image" src={img} alt="" />
        <h4>{name}</h4>
        <p>{profession}, {country}</p>
      </div>
    </div>
  )
}

export default Innerclient;
