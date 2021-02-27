import React from 'react'
import HeroImage from '../../assets/images/illustration-hero.svg'

function Hero() {
    return (
        <header className="hero">
            <div className="hero-container">
                <div className="hero-left">
                    <div className="hero-text">
                        <h1 className="hero-text-heading">A Simple Bookmark Manager</h1>
                        <p className="hero-text-description">A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.
</p>
                        <div className="hero-text-btn">
                            <button className="btn chrome-btn">Get it on Chrome</button>
                            <button className="btn firefox-btn">Get it on Firefox</button>
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-image">
                        <img className="hero-image-front" src={HeroImage}></img>
                        <div className="hero-image-back" ></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero
