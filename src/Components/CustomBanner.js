import React from "react";
import group11 from "../images/Group 11.png";

const CustomBanner = () => {
  return (
    <div className=" container mt-5">
      <div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0 col-md-6 mt-5">
          <div class=" p-5 ">
            <div class="card-body">
              <h2 class="card-title mb-3">Need Something Custom?</h2>
              <p class="card-text">
                Unlike most Distributors in the US, we Cut and Sew every order
                specifically for you! We provide free design services with
                unmatched personalized service.<br /> We'd love for you to shoot us an
                email and see how our family can help your Rugby family!
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-md-6">
          <div class="">
            <div class="card-body ">
              <img style={{ width: "100%",height : "350px",}} src={group11} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomBanner;
