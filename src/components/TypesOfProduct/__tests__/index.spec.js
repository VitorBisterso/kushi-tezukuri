import React from 'react'
import { shallow } from 'enzyme'

import { render, waitFor } from '../../../redux/testUtils'

import TypesOfProduct from '../index'
import ToggleFiltersButton from '../ToggleFiltersButton'
import FiltersList from '../FiltersList'

describe('TypesOfProduct', () => {
  it('should render TypesOfProduct correctly', () => {
    const component = shallow(<TypesOfProduct />)

    expect(component).toMatchSnapshot()
  })

  it('should render ToggleFiltersButton correctly', () => {
    const clickFn = jest.fn()
    const component = shallow(
      <ToggleFiltersButton
        textAlign="center"
        onClick={clickFn}
        title="Test title"
      />
    )

    expect(component).toMatchSnapshot()
  })

  it('should render FiltersList correctly', async () => {
    const { getByTestId } = render(<FiltersList />, {
      initialState: {
        productsReducer: {
          allProducts: [
            {
              id: 1,
              name: 'Máscara de bolinhas vermelha e detalhes em cinza',
              price: 6.5,
              typeOfProduct: 'mask',
              typeOfCut: 'F',
            },
          ],
          typesOfProduct: [{ typeOfProduct: 'mask', amount: 1 }],
        },
      },
    })

    const textNode = await waitFor(() => getByTestId('typeOfProductName'))
    expect(textNode).toBeDefined()
  })
})
