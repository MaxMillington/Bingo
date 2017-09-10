import React from 'react'
import PropTypes from 'react-proptypes'
import BingoBoard from './BingoBoard'
import Button from './Button'

const Bingo = (props) => {
  const callBingo = () => {
    const boardNumbers = [
      props.board1Numbers,
      props.board2Numbers,
      props.board3Numbers,
      props.board4Numbers
    ]
    props.callBingo(props.numbersCalled, boardNumbers)
  }

  const getNextBall = () => {
    props.getNextBall(props.numbersCalled)
  }

  const bingoMessage = () => {
    if (props.error) {
      return 'Oops, there is an error'
    } else if (props.bingo === false) {
      return 'That is not actually bingo but you can keep playing'
    } else if (props.bingo === true) {
      return 'WOOOOOOO BINGO!'
    } else if (props.loading) {
      return 'Loading ... '
    }
  }

  return (
    <div className="container home">
      <div className="bingo-message">
        {bingoMessage()}
      </div>
      <div className="boards-container">
        <BingoBoard numbers={props.board1Numbers} numbersCalled={props.numbersCalled} />
        <BingoBoard numbers={props.board2Numbers} numbersCalled={props.numbersCalled} />
        <BingoBoard numbers={props.board3Numbers} numbersCalled={props.numbersCalled} />
        <BingoBoard numbers={props.board4Numbers} numbersCalled={props.numbersCalled} />
      </div>
      <div className="buttons-container">
        <Button text="Call Bingo!" click={callBingo}/>
        <Button text="Next Ball" click={getNextBall}/>
      </div>
    </div>
  )
}

Bingo.propTypes = {
  board1Numbers: PropTypes.array.isRequired,
  board2Numbers: PropTypes.array.isRequired,
  board3Numbers: PropTypes.array.isRequired,
  board4Numbers: PropTypes.array.isRequired,
  numbersCalled: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  callBingo: PropTypes.func.isRequired,
  getNextBall: PropTypes.func.isRequired,
  bingo: PropTypes.bool
}


export default Bingo
