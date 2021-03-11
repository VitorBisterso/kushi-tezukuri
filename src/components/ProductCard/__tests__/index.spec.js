import React from 'react'

import { render, waitFor } from '../../../redux/testUtils'

import ProductCard from '../index'

describe('ProductCard', () => {
  it('should render correctly', async () => {
    const product = {
      id: '1',
      name: 'Máscara de bolinhas vermelha e detalhes em cinza',
      price: 6.5,
      typeOfProduct: 'mask',
      typeOfCut: 'F',
    }

    const { getByTestId } = render(
      <ProductCard product={product} isUserLogged />,
      {
        initialState: {
          productsReducer: {},
        },
      }
    )

    const textNode = await waitFor(() => getByTestId('productCard-title'))
    expect(textNode).toBeDefined()
  })
})
