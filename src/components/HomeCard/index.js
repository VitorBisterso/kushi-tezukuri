import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const HomeCard = ({ image, title, onClick }) => (
  <button className="homeCard-container" onClick={onClick} type="button">
    <img className="homeCard-image" src={image} alt={`${title}-homeCard`} />
    <p className="homeCard-title">{title}</p>
  </button>
)

HomeCard.propTypes = {
  image: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default HomeCard
