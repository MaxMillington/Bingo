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
      return Object.assign({}, state, {
        loading: true,
        bingo: null
      });

    case BINGO_SUCCESS:
      return Object.assign({}, state, {
        loading: true,
        bingo: action.data.bingo
      });

    case BINGO_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: true
      })

    case NEXT_BALL:
      return Object.assign({}, state, {
        loading: true,
        bingo: null
      });

    case NEXT_BALL_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        nextBall: action.data.nextBall,
        numbersCalled: action.data.numbersCalled
      });

    case NEXT_BALL_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: true
      })

    default:
      return state
  }
}