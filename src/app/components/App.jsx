import React from 'react'
import PropTypes from 'react-proptypes'
import ConnectedHeader from './common/ConnectedHeader'

const App = ({ children }) => {
  return (
    <div className="outer-container">
      <ConnectedHeader />
      {children}
    </div>
  )
}

App.propTypes = { children: PropTypes.object }

export default App;
