import React from 'react'
import { shallow } from 'enzyme'

import ProductsList from '../index'

describe('ProductsList', () => {
  it('should render correctly', () => {
    const products = [{ id: 1, name: 'Test name', price: 10 }]
    const component = shallow(<ProductsList products={products} />)

    expect(component).toMatchSnapshot()
  })
})
