import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  getNextBall,
  callBingo
} from '../../actions/index'
import Bingo from './Bingo'

const mapStateToProps = state => ({
  board1Numbers: state.bingo.board1,
  board2Numbers: state.bingo.board2,
  board3Numbers: state.bingo.board3,
  board4Numbers: state.bingo.board4,
  numbersCalled: state.bingo.numbersCalled,
  loading: state.bingo.loading,
  error: state.bingo.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getNextBall,
  callBingo,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bingo)
