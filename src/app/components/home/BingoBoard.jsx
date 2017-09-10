import React from 'react'
import PropTypes from 'react-proptypes'
import BingoTile from './BingoTile'

const BingoBoard = (props) => {

  const renderTiles = (numbers) => {
    return numbers.map((number) => {
      return <BingoTile
        number={number}
        key={number + Math.random()}
        numbersCalled={props.numbersCalled}
      />
    })
  }

  return(
    <div className="bingo-board-container">
      {renderTiles(props.numbers)}
    </div>
  )
}

BingoBoard.propTypes = {
  numbers: PropTypes.array,
  numbersCalled: PropTypes.array
}


export default BingoBoard