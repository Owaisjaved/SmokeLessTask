import React from "react";
import "./button.css";
import { useNavigate } from "react-router-dom";
const Button = () => {
  // Navigation Hook
  let navigate = useNavigate();
  // Route Handle Function redirect to location component
  const RouteHandler = () => {
    navigate("/location");
  };

  return (
    <div className="main-button">
      <div className="button">
        <button
          onClick={RouteHandler}
          style={{ color: "#ffffff", backgroundColor: "#49DCFF" }}
        >
          Add Location
        </button>
      </div>
    </div>
  );
};

export default Button;
