import React from 'react'
import PropTypes from 'react-proptypes'

const BingoTile = (props) => {
  const tileClass = props.numbersCalled.includes(props.number) ? 'bingo-tile--blue' : 'bingo-tile'
  const formattedNumber = ('0' + props.number).slice(-2)
  return (
    <div className="bingo-cell">
      <div className={tileClass}>
        {formattedNumber}
      </div>
    </div>
  )
}

BingoTile.propTypes = {
  number: PropTypes.number,
  numbersCalled: PropTypes.array
}


export default BingoTile