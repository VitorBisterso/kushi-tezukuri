import React, { useState } from 'react'

import ToggleFiltersButton from './ToggleFiltersButton'
import FiltersList from './FiltersList'

import './styles.css'

const TypesOfProduct = () => {
  const [filtersVisibility, setFiltersVisibility] = useState(true)

  const handleButtonClick = () => setFiltersVisibility(!filtersVisibility)

  const renderToggleFiltersButton = visibility => (
    <ToggleFiltersButton
      isVisible={visibility}
      onClick={handleButtonClick}
      textAlign={filtersVisibility ? 'right' : 'center'}
      title={filtersVisibility ? 'Ocultar filtros' : 'Mostrar filtros'}
    />
  )

  return (
    <>
      {renderToggleFiltersButton(!filtersVisibility)}
      <div
        className="typesOfProduct-container"
        style={{ display: filtersVisibility ? 'flex' : 'none' }}
      >
        <div className="typesOfProduct-filtersHeader">
          <p>Filtrar por produto</p>
          {renderToggleFiltersButton(filtersVisibility)}
        </div>
        <div className="typesOfProduct-filters">
          <FiltersList />
        </div>
      </div>
    </>
  )
}

export default TypesOfProduct
