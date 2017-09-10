import React, { PropTypes } from 'react'
import BingoTile from './BingoTile'

const BingoBoard = (props) => {

  const renderTiles = (numbers) => {
    return numbers.map((number) => {
      return <BingoTile number={number} key={number + Math.random()} />
    })
  }

  return(
    <div className="bingo-board-container">
      {renderTiles(props.numbers)}
    </div>
  )
}

BingoBoard.propTypes = {
  numbers: PropTypes.array
}


export default BingoBoard