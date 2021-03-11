import React from 'react'
import { shallow } from 'enzyme'

import CartTable from '../index'

describe('CartTable', () => {
  it('should render correctly', () => {
    const cart = [
      {
        id: '1',
        name: 'Máscara de bolinhas vermelha e detalhes em cinza',
        price: 6.5,
        typeOfProduct: 'mask',
        typeOfCut: 'F',
      },
    ]
    const component = shallow(<CartTable cart={cart} />)

    expect(component).toMatchSnapshot()
  })
})
