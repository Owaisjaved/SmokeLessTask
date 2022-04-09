import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "../Icon/Icon";
import "./cardDetail.css";
const CardDetail = () => {
  // Location hook for fetching route params
  let locations = useLocation();
  // Navigation Hook
  let navigate = useNavigate();
  //ID Present at Last Index
  let ID = locations.pathname.split("/").at(-1);
  // Getting Data from LocalStorage and Parsing it
  let Entries = localStorage.getItem("allEntries");
  let ParsedData = JSON.parse(Entries);
  // Filtering the data which matches the ID
  let Data = ParsedData.filter((item) => item.ID == ID);
  // Destructing from the filtered Data
  let { name, location, flavor } = Data[0];
  // Converting Comma Seperated String to an Array and also filtering empty values
  let flavors = flavor.split(",").filter((values) => values);
  return (
    <div className="detail-container">
      <div onClick={() => navigate(-1)}>
        <Icon />
      </div>
      <div className="ice-detail">
        <div className="ice-name">{name}</div>
        <div className="ice-location">{location}</div>
        <div className="ice-flavors">
          {flavors.map((item) => (
            <li>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
