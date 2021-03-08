import React from 'react'
import { shallow } from 'enzyme'

import GenericScreen from '../index'

import image from '../../../assets/img/mask.jpg'

describe('GenericScreen', () => {
  it('should render correctly', () => {
    const component = shallow(
      <GenericScreen title="Test" mainText="This is a test" image={image} />
    )

    expect(component).toMatchSnapshot()
  })
})
