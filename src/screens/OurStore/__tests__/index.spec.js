import React from 'react'
import { shallow } from 'enzyme'

import OurStore from '../index'

describe('OurStore', () => {
  it('should render correctly', () => {
    const component = shallow(<OurStore />)

    expect(component).toMatchSnapshot()
  })
})
