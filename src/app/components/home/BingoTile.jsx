import React, { PropTypes } from 'react'

const BingoTile = (props) => {

  const formattedNumber = ('0' + props.number).slice(-2)
  return (
    <div className="bingo-cell">
      <div className="bingo-tile">
        {formattedNumber}
      </div>
    </div>
  )
}

BingoTile.propTypes = {
  number: PropTypes.number
}


export default BingoTile