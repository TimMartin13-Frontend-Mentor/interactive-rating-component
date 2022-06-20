import React, { useState } from "react";
import './App.css';
import Attribution from "./components/Attribution";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  
  const [rated, setRated] = useState(true);

  return (
    <div className="App">
      <main>
        { rated ? <ThankYouCard rating={ "4" }/> : <RatingCard /> }
      </main>
      <footer>
        <Attribution />
      </footer>
    </div>
  );
}

export default App;
