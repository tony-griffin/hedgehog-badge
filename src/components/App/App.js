import React from "react";
import data from "./data";
import AnimalCard from "../AnimalCard/AnimalCard";
import "./App.css";

const showAdditionalData = (additional) => {
  if (additional === null || additional === undefined) {
    alert("No additional information sorry");
  } else {
    const alertInformation = Object.entries(additional)
      .map((information) => `${information[0]}: ${information[1]}`)
      .join("\n");
    alert(alertInformation);
  }
};

function App() {
  return (
    <div className="wrapper">
      <h1>Animals</h1>
      {data.map((animal) => (
        <AnimalCard
          additional={animal.additional}
          diet={animal.diet}
          key={animal.id}
          name={animal.name}
          scientificName={animal.scientificName}
          showAdditional={showAdditionalData}
          size={animal.size}
        />
      ))}
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn NOT TO React
      </a>
    </div>
  );
}

export default App;
