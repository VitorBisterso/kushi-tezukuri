import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

import './styles.css'

const GenericScreen = ({ title, mainText, image }) => (
  <div className="genericScreen-container">
    <p className="genericScreen-title">{title}</p>
    <div className="genericScreen-content">
      <Fade left>
        <p>{mainText}</p>
      </Fade>
      <Fade right>
        <img src={image} alt="genericScreen-svg" />
      </Fade>
    </div>
  </div>
)

GenericScreen.propTypes = {
  title: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
}

export default GenericScreen
