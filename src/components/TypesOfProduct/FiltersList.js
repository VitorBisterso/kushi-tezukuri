import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import productActions from '../../redux/actions/products'

import Checkbox from '../Checkbox'

const FiltersList = () => {
  const dispatch = useDispatch()

  const [filters, setFilters] = useState([])
  const { allProducts, typesOfProduct } = useSelector(
    state => state.productsReducer
  )

  useEffect(() => {
    const filteredProducts = allProducts.filter(product =>
      filters.includes(product.typeOfProduct)
    )

    if (filters.length !== typesOfProduct.length && filters.length !== 0) {
      dispatch(productActions.setCurrentFilteredProducts(filteredProducts))
    } else {
      dispatch(productActions.setCurrentFilteredProducts(allProducts))
    }
  }, [JSON.stringify(filters)])

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
