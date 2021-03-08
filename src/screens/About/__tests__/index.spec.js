import React from 'react'
import { shallow } from 'enzyme'

import About from '../index'

describe('About', () => {
  it('should render correctly', () => {
    const component = shallow(<About />)

    expect(component).toMatchSnapshot()
  })
})
