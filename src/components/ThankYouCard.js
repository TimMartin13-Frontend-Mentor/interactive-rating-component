import React from "react";
import thankYouCardStyles from "./ThankYouCard.module.css"

function ThankYouCard({ rating }) {
  return (
    <div className={ thankYouCardStyles.card }>
      <div className={ thankYouCardStyles.cardContainer }>
        <img 
          src={ process.env.PUBLIC_URL + "/images/illustration-thank-you.svg" } className={ thankYouCardStyles.icon } 
          alt="credit card machine"></img>
        <div className={ thankYouCardStyles.rated }>
          You selected
          <span>&nbsp;{ rating }&nbsp;</span>out of 5</div>
        <h2 className={ thankYouCardStyles.heading }>Thank you!</h2>
        <p className={ thankYouCardStyles.copy }>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </div>
  )
}

export default ThankYouCard;