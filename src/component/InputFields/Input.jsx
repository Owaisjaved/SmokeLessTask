import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./input.css";
const Input = () => {
  // Navigation Hook
  let navigate = useNavigate();
  // Form States
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [flavor, setFlavor] = useState("");

  //Creating ID, checking if Data is not present then it will be 1st Entry else Adding 1 to length of Data
  let ID;
  console.log(JSON.parse(localStorage.getItem("allEntries")));
  if (JSON.parse(localStorage.getItem("allEntries")) === null) {
    ID = 1;
  } else {
    ID = JSON.parse(localStorage.getItem("allEntries")).length + 1;
  }
  // Creating Object to save Data in LocalStorage
  let dataObject = {
    DataName: name,
    DataLocation: location,
    DataFlavor: flavor,
    ID: ID,
  };

  // Function for Data Saving in Local Storage
  const dataCollector = (e) => {
    e.preventDefault();
    // Parse the JSON stored in allEntries
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if (existingEntries == null) existingEntries = [];
    var name = dataObject.DataName;
    var location = dataObject.DataLocation;
    var flavor = dataObject.DataFlavor;
    var entry = {
      name: name,
      location: location,
      flavor: flavor,
      ID: dataObject.ID,
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    // After Data is Saved navigating to Home Page
    navigate("/");
  };
  return (
    <div className="input-container">
      <form onSubmit={dataCollector}>
        <div>
          <input
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            required
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            required
            type="text"
            placeholder="Flavor(comma seperated)"
            value={flavor}
            onChange={(e) => setFlavor(e.target.value)}
          ></input>
        </div>
        <div className="main-button">
          <div className="button btn-position">
            <button
              type="submit"
              style={{ color: "#D463F0", backgroundColor: "#ffffff" }}
            >
              Add Location
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Input;
