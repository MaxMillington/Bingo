import Chance from 'chance'
import {
  BINGO,
  BINGO_SUCCESS,
  BINGO_ERROR,
  NEXT_BALL,
  NEXT_BALL_SUCCESS,
  NEXT_BALL_ERROR
} from '../actions/index'

const chance = new Chance()
const numbers1 = chance.unique(chance.natural, 25, {min: 1, max: 99})
const numbers2 = chance.unique(chance.natural, 25, {min: 1, max: 99})
const numbers3 = chance.unique(chance.natural, 25, {min: 1, max: 99})
const numbers4 = chance.unique(chance.natural, 25, {min: 1, max: 99})

const initialState = {
  board1: numbers1,
  board2: numbers2,
  board3: numbers3,
  board4: numbers4,
  numbersCalled: [],
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case BINGO:
      console.log('bingo')
      return {
        ...state,
        loading: true
      }

    case BINGO_SUCCESS:
      console.log('bingo success')
      return {
        ...state,
        loading: false
      }

    case BINGO_ERROR:
      console.log('bingo error')
      return {
        ...state,
        loading: false,
        error: true
      }

    case NEXT_BALL:
      console.log('next ball')
      return {
        ...state,
        loading: true
      }

    case NEXT_BALL_SUCCESS:
      console.log('next success')
      return {
        ...state,
        loading: false
      }

    case NEXT_BALL_ERROR:
      console.log('next error')
      return {
        ...state,
        loading: false,
        error: true
      }

    default:
      return state
  }
}