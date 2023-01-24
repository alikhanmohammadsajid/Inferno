import React from "react";
import "./Banner.css";
import jersey1 from "../images/pngwing 1 (1).png";
import jersey2 from "../images/pngwing 2 (1).png";
import jersey3 from "../images/pngwing 3.png";
import shoe from "../images/pngwing 4.png";
import gloves from "../images/pngwing 5.png";

const Banner = () => {
  return (
    <div class="bg-danger m-3 p-3">
      <div class="row ">
        <div class="col-sm-6 mb-3 mb-sm-0 text-center " >
          <div class="card grid bg-secondary rounded-circle " style={{top:"40px",left:"10px",zindex:"0"}}>
            <div className="g-col-6 jersey ">
            <img   style={{height: "200px"}} src={jersey1} alt="" />
            <img   style={{height: "200px"}} src={jersey2} alt="" />
            <img   style={{height: "200px"}} src={jersey3} alt="" />
            </div>
          <div class="card-body w-100 h-100 g-col-6">
            <img   style={{height: "150px"}} src={shoe} alt="" />
            <img   style={{height: "250px"}} src={gloves} alt="" />
          </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="text-white  m-5 p-5">
            <div class="card-body">
              <h1 class="card-title mb-3">Clothing for Grit N' Grind</h1>
              <p class="card-text mb-3">
                Dicta non recusandae dolores, maiores ullam <br /> ratione
                possimus error minima aperiam labor <br /> iosam inventore in
                sit eaque explicabo.
              </p>
              <h6 href="#" class="btn btn-secondary rounded-pill mb-3">
                Shop Now
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
