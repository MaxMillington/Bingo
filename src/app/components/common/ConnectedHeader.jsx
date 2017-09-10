import React from 'react' // eslint-disable-line
import { connect } from 'react-redux'
import Header from './Header'

const mapStateToProps = (state) => ({
  numbersCalled: state.bingo.numbersCalled,
  nextNumber: state.bingo.nextBall
})


export default connect(
  mapStateToProps,
)(Header)
