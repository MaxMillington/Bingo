import React from 'react'

const Header = () => {
  const tiles = ['4', '78', '92', '23', '44']

  const renderTiles = (numbers) => {
    return numbers.map((number) => {
      return (
        <div className="number-tile--small" key={number}>
          {number}
        </div>
      )
    })
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
              77
            </div>
          </div>
          <div className="right-column">
            <div className="ball-text--small">
              Previous Balls
            </div>
            <div className="tile-container">
              {renderTiles(tiles)}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
