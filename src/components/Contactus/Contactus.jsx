import { useState } from 'react';
import './Contactus.css';
import myimg from "../images/contact-img.d79dd481a5afbe1ed64a.png";

const Contactus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contactus-container">
      <div className="img-container">
        <img src={myimg} alt="Contact Us" className="contact-img" />
        <p className="contact-header">Are You Facing Any Problem?</p>
        <p className="contact-description">
          It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un skeptic cambridge es.
        </p>
        <button className="chat-button">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle icon">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          <span className="chat-button-text">Start Live Chat</span>
        </button>
        <p>Or you can contact at</p>
        <div className="contact-info">
          <div className="contact-info-item">Email: bilal.jamil745@gmail.com</div>
          <div className="contact-info-item">Phone: 03123543348</div>
        </div>
      </div>
      <div className="form-container">
        <p className="form-header">Get in Touch</p>
        <div className="form-fields">
          <input type="text" className="form-input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your Name" />
          <input type="text" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your Email" />
          <input type="text" className="form-input" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Enter Subject" />
          <textarea className="form-input" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Enter Message" rows="4" />
          <button className="submit-button">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
