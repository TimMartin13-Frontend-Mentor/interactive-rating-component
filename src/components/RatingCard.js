import React from "react";
import ratingCardStyles from "./RatingCard.module.css"
import Circle from "./Circle";
import Button from "./Button";

function RatingCard() {
  return (
    <div className={ ratingCardStyles.card }>
      <div className={ ratingCardStyles.starIcon }></div>
      {/* <Circle value={ process.env.PUBLIC_URL + "/images/icon-star.svg" } /> */}
      <h1 className={ ratingCardStyles.heading }>How did we do?</h1>
      <p className= { ratingCardStyles.copy }>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className={ ratingCardStyles.circleContainer }>
        <Circle value="1" />
        <Circle value="2" />
        <Circle value="3" />
        <Circle value="4" />
        <Circle value="5" />
      </div>
      <Button text="Submit" />
    </div>
  )
}

export default RatingCard;