import React from 'react'
import App from '../../app/components/App'
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should have an outer container', () => {
    const element = wrapper.find('.outer-container')
    expect(element.length).toEqual(1)
    expect(wrapper).toMatchSnapshot()
  })
})