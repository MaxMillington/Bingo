import React from 'react'
import BingoTile from '../../../app/components/home/BingoTile'
import { shallow } from 'enzyme'

describe('BingoTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BingoTile number={9} numbersCalled={[]}/>)
  });

  describe('number is single digit', () => {
    it('appends a 0', () => {
      const element = wrapper.find('.bingo-tile')
      expect(element.text()).toMatch(/09/i)
    })
  })

  describe('number is double digit', () => {
    it('does not append a 0', () => {
      wrapper.setProps({ number: 10 })

      const element = wrapper.find('.bingo-tile')
      expect(element.text()).toMatch(/10/i)
    })
  })

  describe('number has been called', () => {
    it('adds the blue class', () => {
      wrapper.setProps({ numbersCalled: [9] })

      const element = wrapper.find('.bingo-tile--blue')
      expect(element.length).toEqual(1)
      const element2 = wrapper.find('.bingo-tile')
      expect(element2.length).toEqual(0)
    })
  })
})