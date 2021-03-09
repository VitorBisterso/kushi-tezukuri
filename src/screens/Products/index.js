import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ProductsApi from '../../redux/api/products'

const renderProductsList = productsList =>
  productsList &&
  productsList.map(product => {
    const { id, name, price, typeOfProduct } = product

    return (
      <ul key={id}>
        <li>{name}</li>
        <li>R${price}</li>
        <li>Tipo: {typeOfProduct}</li>
      </ul>
    )
  })

const Products = () => {
  const dispatch = useDispatch()
  const { productsList, isLoading } = useSelector(
    state => state.productsReducer
  )

  useEffect(() => {
    dispatch(ProductsApi.fetchAllProducts())
  }, [])

  return isLoading ? <h1>Loading...</h1> : renderProductsList(productsList)
}

export default Products
