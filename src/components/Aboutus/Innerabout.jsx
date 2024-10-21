import img from "../images/img-2.e8740135d7a449055730.png";
import './Innerabout.css'; 

const Innerabout = () => {
  return (
    <div className="innerabout-container">
      <div>
        <img src={img} className="innerabout-image" alt="Development" />
      </div>
      <p className="innerabout-title">Development</p>
      <p className="innerabout-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptas dolore blanditiis quae velit officia.
      </p>
      <span className="more-information">More Information →</span>
    </div>
  );
};

export default Innerabout;
