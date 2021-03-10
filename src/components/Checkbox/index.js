import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Checkbox = ({ value, onChange }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className="checkbox-container">
    <input type="checkbox" value={value} onClick={onChange} />
    <div className="checkbox-filled" />
  </label>
)

Checkbox.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox
