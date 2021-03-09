import React from 'react'
import { shallow } from 'enzyme'

import ProductCard from '../index'

import image from '../../../assets/img/mask.jpg'

describe('ProductCard', () => {
  it('should render correctly', () => {
    const component = shallow(
      <ProductCard image={image} title="Test card" price={5} isAdminPage />
    )

    expect(component).toMatchSnapshot()
  })
})
