import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="GPT-3, or Generative Pre-trained Transformer 3, is a language processing AI model developed by OpenAI. It is the third iteration in the GPT series and one of the most advanced language models created by OpenAI." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Architecture" text="GPT-3 is based on the Transformer architecture, which is a deep learning model used primarily in natural language processing (NLP). It has 175 billion parameters, making it significantly larger and more powerful than its predecessor, GPT-2." />
      <Feature title="Capabilities" text="GPT-3 can perform a wide variety of language-related tasks, including but not limited to." />
      <Feature title="Training" text="GPT-3 was trained on a diverse dataset containing a vast amount of text from the internet. This extensive training allows it to generate human-like text based on the prompts it receives." />
    </div>
  </div>
)
}

export default WhatGPT3