import React from "react";
import img from "../images/hero-img.fabb5c8097ab65a47074.png";
import './Hero.css';

const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <div className="hero-text">
                    <span className="hero-greeting"><b>Hello,</b></span><br />
                    <span className="hero-heading">We Help You To Boost<br /> Your Business</span>
                    <p className="hero-description">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut<br />
                        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequinesciunt.
                    </p>
                    <button type="button" className="hero-button">Get Started →</button>
                </div>
                <div>
                    <img src={img} className="hero-image" alt="Hero" />
                </div>
            </div>
        </>
    );
}

export default Hero;
