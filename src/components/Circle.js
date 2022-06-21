import React from "react";
import circleStyles from "./Circle.module.css"

function Circle( { value, rating, setRating }) {
  return (
    <button 
      className={ circleStyles.circle }
      rating={ rating }
      onClick={() => setRating(value)}  
    >
      { value }
    </button>
  )
}

export default Circle;