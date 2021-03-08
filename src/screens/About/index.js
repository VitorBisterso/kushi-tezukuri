import React from 'react'

import GenericScreen from '../../components/GenericScreen'

import mainText from './mainText'
import aboutImage from '../../assets/img/about.svg'

const About = () => (
  <GenericScreen title="Quem somos" mainText={mainText} image={aboutImage} />
)

export default About
