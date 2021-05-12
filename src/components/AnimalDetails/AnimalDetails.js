import React from "react";
import "./AnimalDetails.css";

const convertFood = (food) => {
  switch (food) {
    case "insects":
      return "🐜";
    case "meat":
      return "🍖";
    case "plants":
    default:
      return "🌱";
  }
};

const AnimalDetails = ({ diet, scientificName }) => {
  return (
    <div className="details">
      <h3>Details:</h3>
      <h4>
        Scientific Name:
        <br /> {scientificName}
      </h4>
      <div>Diet: {diet.map((food) => convertFood(food)).join(" ")}</div>
    </div>
  );
};

export default AnimalDetails;
