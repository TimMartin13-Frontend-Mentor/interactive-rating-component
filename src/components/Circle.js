import React from "react";
import circleStyles from "./Circle.module.css"

function Circle( { value }) {
  return (
    <button href="#" className={ circleStyles.circle }>
      { value }
    </button>
  )
}

export default Circle;