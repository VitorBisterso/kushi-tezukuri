import React from 'react'
import { shallow } from 'enzyme'

import Checkbox from '../index'

describe('Checkbox', () => {
  it('should render correctly', () => {
    const onChangeFn = jest.fn()
    const component = shallow(<Checkbox value={false} onChange={onChangeFn} />)

    expect(component).toMatchSnapshot()
  })
})
