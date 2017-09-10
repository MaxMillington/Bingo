import { combineReducers } from 'redux';
import bingo from './bingoReducer'

const rootReducer = combineReducers({
  bingo
  // state: (state = {}) => state,
});

export default rootReducer;
