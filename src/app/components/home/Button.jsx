import React, { PropTypes } from 'react'

const Button = (props) => {
  return (
    <button
      className="button"
      onClick={props.click}
    >
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired
}

export default Button