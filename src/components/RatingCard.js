import React from "react";
import ratingCardStyles from "./RatingCard.module.css"
import Circle from "./Circle";
import Button from "./Button";


function RatingCard({ onProcess, rating, setRating }) {
  
  const numrows = [1, 2, 3, 4, 5]; 
  
  return (
    <div className={ ratingCardStyles.card }>
      <div className={ ratingCardStyles.starIcon }></div>
      <h1 className={ ratingCardStyles.heading }>How did we do?</h1>
      <p className= { ratingCardStyles.copy }>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className={ ratingCardStyles.circleContainer }>
        {numrows.map(item => (
          <Circle 
            value={ item } 
            key={ item }
            rating={ rating }
            setRating={ setRating }
          />
        ))}
      </div>
      <Button 
        text="Submit"
        onProcess={ onProcess }
      />
    </div>
  )
}

export default RatingCard;