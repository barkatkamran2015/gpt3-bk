import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/aia.png';
import './header.css';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's build innovative solutions with OpenAI's ChatGPT-3</h1>
        <p>Let's harness the power of OpenAI's ChatGPT-3 to develop cutting-edge solutions. This advanced AI technology enables the creation of groundbreaking applications and solutions, enhancing user experiences and solving complex problems with efficiency and creativity.</p>
        <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address ..."/>
        <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  )
}

export default Header