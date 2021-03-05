import React from 'react'
import { shallow } from 'enzyme'

import HomeCard from '../index'

import image from '../../../assets/img/mask.jpg'

describe('HomeCard', () => {
  const clickFn = jest.fn()
  it('should render correctly', () => {
    const component = shallow(
      <HomeCard title="Test" image={image} onClick={clickFn} />
    )

    expect(component).toMatchSnapshot()
  })
  it('should call onClick function', () => {
    const component = shallow(
      <HomeCard title="Test" image={image} onClick={clickFn} />
    )

    component.find('button').simulate('click')
    expect(clickFn).toHaveBeenCalled()
  })
})
