import React from 'react'
import Fade from 'react-reveal/Fade'

import mainText from './mainText'
import aboutImage from '../../assets/img/about.svg'

import './styles.css'

const About = () => (
  <div className="about-container">
    <p className="about-title">Quem somos</p>
    <div className="about-content">
      <Fade left>
        <p>{mainText}</p>
      </Fade>
      <Fade right>
        <img src={aboutImage} alt="about" />
      </Fade>
    </div>
  </div>
)

export default About
