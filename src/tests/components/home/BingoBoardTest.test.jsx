import React from 'react'
import BingoBoard from '../../../app/components/home/BingoBoard'
import { shallow } from 'enzyme'

describe('BingoBoard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<BingoBoard numbers={[4, 5, 6, 7, 8]} numbersCalled={[1, 2]}/>)
  });

  describe('given 5 numbers', () => {
    it('renders five tiles', () => {
      const elements = wrapper.find('BingoTile')
      expect(elements.length).toEqual(5)
    })
  })
})