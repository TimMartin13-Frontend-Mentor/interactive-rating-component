import React from "react";
import buttonStyles from "./Button.module.css"

function Button( { text }) {
  return (
    <div className={ buttonStyles.submitButton }>
      { text }
    </div>
  )
}

export default Button;