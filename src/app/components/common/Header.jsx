import React from 'react'
import PropTypes from 'react-proptypes'

const Header = (props) => {
  const numbers = props.numbersCalled.slice(Math.max(props.numbersCalled.length - 5, 0))

  const renderTiles = (numbers) => {
    if (numbers) {
      return numbers.map((number) => {
        return (
          <div className="number-tile--small" key={number}>
            {number}
          </div>
        )
      })
    }
  }
  return (
    <header>
      <nav>
        <div className="column-container">
          <div className="left-column">
            <div className="ball-text">
              Last Ball
            </div>
            <div className="number-tile">
              {props.nextNumber}
            </div>
          </div>
          <div className="right-column">
            <div className="ball-text--small">
              Previous Balls
            </div>
            <div className="tile-container">
              {renderTiles(numbers.reverse())}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  nextNumber: PropTypes.number,
  numbersCalled: PropTypes.array
}

export default Header
