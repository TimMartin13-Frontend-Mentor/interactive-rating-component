import React, { useState } from "react";
import './App.css';
import Attribution from "./components/Attribution";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  
  const [rated, setRated] = useState(false);
  const [rating, setRating] = useState("0");

  const rateHandler = () => {
    if (rating !== "0") {
      setRated(true);
    }
  };

  return (
    <div className="App">
      <main>
        { rated ? <ThankYouCard rating={ rating }/> 
                : <RatingCard 
                    onProcess={ rateHandler }
                    rating={ rating }
                    setRating={ setRating }
                  /> }
      </main>
      <footer>
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
