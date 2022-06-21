import React from "react";
import buttonStyles from "./Button.module.css"

function Button( { text, onProcess }) {
  return (
    <div 
      className={ buttonStyles.submitButton }
      onClick={onProcess}
    >
      { text }
    </div>
  )
}

export default Button;