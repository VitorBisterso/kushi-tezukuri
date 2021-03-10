import React from 'react'
import PropTypes from 'prop-types'

const ToggleFiltersButton = ({ isVisible, textAlign, onClick, title }) =>
  isVisible && (
    <button
      type="button"
      className="typesOfProduct-filtersButton"
      style={{ textAlign }}
      onClick={onClick}
    >
      {title}
    </button>
  )

ToggleFiltersButton.propTypes = {
  isVisible: PropTypes.bool,
  textAlign: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

ToggleFiltersButton.defaultProps = {
  isVisible: true,
}

export default ToggleFiltersButton
