import React from 'react'
import { shallow } from 'enzyme'

import EmptyCart from '../index'

describe('EmptyCart', () => {
  it('should render correctly', () => {
    const component = shallow(<EmptyCart />)

    expect(component).toMatchSnapshot()
  })
})
