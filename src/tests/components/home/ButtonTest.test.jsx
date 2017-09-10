import React from 'react'
import Button from '../../../app/components/home/Button'
import { shallow } from 'enzyme'

describe('Button', () => {
  let wrapper;
  const clickSpy = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Button text="test" click={clickSpy}/>)
  });

  describe('user clicks the button', () => {
    it('calls the function when clicked', () => {
      const element = wrapper.find('button')
      element.simulate('click')
      expect(clickSpy).toHaveBeenCalledTimes(1)
      expect(element.text()).toMatch(/test/i)
    })
  })
})