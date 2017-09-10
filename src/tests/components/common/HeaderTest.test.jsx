import React from 'react'
import Header from '../../../app/components/common/Header'
import { shallow } from 'enzyme'

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header nextNumber={4} numbersCalled={[1, 2]}/>)
  });

  describe('given 2 numbers', () => {
    it('renders two tiles', () => {
      const elements = wrapper.find('.number-tile--small')
      expect(elements.length).toEqual(2)
    })
    it('appends 0 when single digit number', () => {
      const elements = wrapper.find('.number-tile--small')
      expect(elements.first().text()).toMatch('02')
    })
  })

  describe('given 10 numbers', () => {
    it('only renders five tiles', () => {
      wrapper.setProps({ numbersCalled: [1,2,3,4,5,6,7,8,9,10] })
      const elements = wrapper.find('.number-tile--small')
      expect(elements.length).toEqual(5)
    })
  })

  describe('given single digit nextNumber', () => {
    it('appends 0', () => {
      const elements = wrapper.find('.number-tile')
      expect(elements.first().text()).toMatch('04')
    })
  })
})