import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import './styles.css'

const initial = value => ({ x: value })
const animate = { x: 0 }
const transition = { delay: 0.2, duration: 0.5 }

const GenericScreen = ({ title, mainText, image }) => (
  <div className="genericScreen-container">
    <p className="genericScreen-title">{title}</p>
    <div className="genericScreen-content">
      <motion.p
        initial={initial('-100vw')}
        animate={animate}
        transition={transition}
      >
        {mainText}
      </motion.p>
      <motion.img
        src={image}
        alt="genericScreen-svg"
        initial={initial('100vh')}
        animate={animate}
        transition={transition}
      />
    </div>
  </div>
)

GenericScreen.propTypes = {
  title: PropTypes.string.isRequired,
  mainText: PropTypes.string.isRequired,
  image: PropTypes.node.isRequired,
}

export default GenericScreen
