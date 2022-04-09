import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";
const Card = () => {
  // Navigation Hook
  let navigate = useNavigate();
  // Getting Data from Local Storage
  let Data = localStorage.getItem("allEntries");
  // Converting String Type Data to Object by Parsing
  let ParsedData = JSON.parse(Data);

  // Function for redirecting to Detail Page with ID
  const redirectHandler = (ID) => {
    navigate(`/detail/${ID}`);
  };

  return (
    <div className="card-container">
      {ParsedData?.map((item) => (
        <div
          onClick={() => redirectHandler(item.ID)}
          className="card"
          key={item.ID}
        >
          <div className="card-ice-maker">{item.name}</div>
          <div className="card-location">{item.location}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
