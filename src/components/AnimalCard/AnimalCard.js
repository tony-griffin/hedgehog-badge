import React from "react";
import "./AnimalCard.css";
import AnimalDetails from "../AnimalDetails/AnimalDetails";

const AnimalCard = ({
  additional,
  name,
  showAdditional,
  size,
  ...props
}) => {
  return (
    <div className="animal-wrapper">
      <h2>{name}</h2>
      <h4>{size}kg</h4>
      <AnimalDetails {...props} />
      <button onClick={() => showAdditional(additional)}>More Info</button>
    </div>
  );
};

export default AnimalCard;
