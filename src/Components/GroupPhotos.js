import React from "react";
import "./GroupPhotos.css"
import men from"../images/Rectangle 48.png"
import shoe from "../images/Rectangle 49.png"
import gloves from "../images/Rectangle 50.png"
import man from "../images/Rectangle 51.png"
import ball from "../images/Rectangle 52.png"

const GroupPhotos = () => {
  return (
    <div>
      <div className="d-flex w-100 main">
        <div className="content ">
          <img src={men} alt="" />
          <img src={shoe} alt="" />
          <img src={gloves} alt="" />
          <img src={man} alt="" />
          <img src={ball} alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default GroupPhotos;
