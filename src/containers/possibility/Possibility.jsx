import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Bring your imagination  <br /> to life</h1>
      <p>Bringing your imagination to life is no longer a distant dream but a reality, thanks to the advancements in technology and artificial intelligence. With cutting-edge AI tools like GPT-3, you can transform your creative visions into tangible expressions, from writing compelling stories to developing innovative apps. These technologies empower you to bridge the gap between imagination and reality, enabling you to design, create, and execute your ideas with unprecedented precision and ease. As AI continues to evolve, the possibilities for turning imaginative concepts into real-world applications are virtually limitless</p>
      <h4>Request Early Access to Get Started</h4>
    </div>
  </div>
  )
}

export default Possibility