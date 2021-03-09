import React from 'react'
import { shallow } from 'enzyme'

import Loading from '../index'

describe('Loading', () => {
  it('should render correctly', () => {
    const component = shallow(<Loading />)

    expect(component).toMatchSnapshot()
  })
})
