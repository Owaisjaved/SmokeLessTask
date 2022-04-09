import React from "react";
import "./location.css";
import Input from "../InputFields/Input";
import Icon from "../Icon/Icon";
import { useNavigate } from "react-router-dom";
const Location = () => {
  // Navigation Hook
  let navigate = useNavigate();
  return (
    <div className="location-container">
      <div onClick={() => navigate(-1)}>
        <Icon />
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
};

export default Location;
