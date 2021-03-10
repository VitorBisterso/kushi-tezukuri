import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Checkbox from '../Checkbox'

const FiltersList = () => {
  const [filters, setFilters] = useState([])

  const { typesOfProduct } = useSelector(state => state.productsReducer)

  const handleCheckboxChange = (e, typeOfProduct) =>
    e.target.checked
      ? setFilters([...filters, typeOfProduct])
      : setFilters(filters.filter(f => f !== typeOfProduct))

  return typesOfProduct.map(type => {
    const { typeOfProduct, amount } = type
    const isChecked = filters.includes(typeOfProduct)

    return (
      <div key={typeOfProduct}>
        <Checkbox
          value={isChecked}
          onChange={e => handleCheckboxChange(e, typeOfProduct)}
        />
        <p data-testid="typeOfProductName">
          {typeOfProduct} ({amount})
        </p>
      </div>
    )
  })
}

export default FiltersList
