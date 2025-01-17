import { useState, useEffect } from "react";
import React from "react";
import "../ComponentStyles/NewSideNav.css";
import { ExpandMore, Remove } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function NewSideNav(props) {
  const [availableSensors, setAvailableSensors] = useState([]);
  const nodeDisplay=()=>{
    props.settingState(!props.nodeDetails);
  }
  useEffect(() => {
    const fetchSensors = async () => {
      let response = await fetch("http://localhost:5000/api/sensors/");
      let responseData = await response.json();
      console.log("Sensors : ", responseData);
      setAvailableSensors(
        responseData.map((ele) => (
          <div className="button">
            <button
              className="sensorButton"
              onClick={props.callbackFun}
              value={ele._id}
            >
              {ele._id}
            </button>
            {/* <div className="divider"></div> */}
          </div>
        ))
      );
    };
    fetchSensors();
  }, []);
  return (
    <nav className="sideNav">
      <div>
        {/* <p style={{ fontSize: "18px" }}>
          My Apartment{" "}
          <span style={{ marginLeft: "25px" }}>
            <ExpandMore style={{ color: "white", fontSize: "25px" }} />
          </span>
        </p> */}
        <p
          style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}
        >
          {/* <span style={{ marginRight: "20px" }}>
            <Remove style={{ color: "white", fontSize: "25px" }} />
          </span> */}
          Water Meters
        </p>
        {/* <div className="divider"></div> */}
        {availableSensors}
      </div>
      <div>
        <Button onClick={nodeDisplay} style={{ fontSize: "18px", fontWeight: "bold", marginTop: "10px",color:"black" }}>
          Node Status
        </Button>
      </div>
      <div className="sideNav-infoBar">
        <img
          className="infoBar-profileImage"
          src="data:image/jpeg;base64,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"
          alt="Profile"
        />
        <p>{props.username}</p>
      </div>
    </nav>
  );
}
