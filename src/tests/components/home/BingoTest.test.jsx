import React from 'react'
import Bingo from '../../../app/components/home/Bingo'
import { mount } from 'enzyme'

describe('Bingo', () => {
  let wrapper;
  const bingoSpy = jest.fn()
  const nextBallSpy = jest.fn()
  beforeEach(() => {
    wrapper = mount(
      <Bingo
        board1Numbers={[1,2,3,4,5]}
        board2Numbers={[1,2,3,4,5]}
        board3Numbers={[1,2,3,4,5]}
        board4Numbers={[1,2,3,4,5]}
        numbersCalled={[6]}
        loading={false}
        error={false}
        callBingo={bingoSpy}
        getNextBall={nextBallSpy}
      />
    )
  });

  describe('clicking the buttons', () => {
    it('calls the right functions', () => {
      const elements = wrapper.find('Button')
      elements.first().simulate('click')
      expect(bingoSpy).toHaveBeenCalledWith(
        [6],
        [
          [1,2,3,4,5],
          [1,2,3,4,5],
          [1,2,3,4,5],
          [1,2,3,4,5]
        ]
      )
      elements.last().simulate('click')
      expect(nextBallSpy).toHaveBeenCalledWith([6])
    })
  })

  describe('when there is an error', () => {
    it('displays error message', () => {
      let element = wrapper.find('.bingo-message')
      expect(element.text()).not.toMatch(/Oops, there is an error/i)

      wrapper.setProps({ error: true })

      element = wrapper.find('.bingo-message')
      expect(element.text()).toMatch(/Oops, there is an error/i)
    })
  })

  describe('when there a bingo value', () => {
    it('displays appropriate message', () => {
      let element = wrapper.find('.bingo-message')
      expect(element.text()).toMatch('')

      wrapper.setProps({ bingo: true })

      element = wrapper.find('.bingo-message')
      expect(element.text()).toMatch(/WOOOOOOO BINGO!/i)

      wrapper.setProps({ bingo: false })

      element = wrapper.find('.bingo-message')
      expect(element.text()).toMatch(/That is not actually bingo but you can keep playing/i)
    })
  })

  describe('when it is loading', () => {
    it('displays loading message', () => {
      let element = wrapper.find('.bingo-message')
      expect(element.text()).toMatch('')

      wrapper.setProps({ loading: true })

      element = wrapper.find('.bingo-message')
      expect(element.text()).toMatch(/Loading.../i)
    })
  })
})