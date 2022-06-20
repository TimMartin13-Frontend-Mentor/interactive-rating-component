import React from "react";
import attributionStyles from "./Attribution.module.css";

function Attribution() {
  return (
    <div class={ attributionStyles.attribution }>
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
      Coded by <a href="https://www.frontendmentor.io/profile/TimMartin13" target="_blank" rel="noreferrer">Tim Martin</a>.
    </div>
  )
}

export default Attribution;