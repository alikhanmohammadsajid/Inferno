import React from "react";
import "./Footer.css";
import foooterbar from "../images/Vector 3.png";
import logo from "../images/inferno 1.png";
import map from"../images/Rectangle 57.png"

const Footer = () => {
  return (
    <div className="bg-success">
      <div class="grid-container">
        <div class="item1">
          <img className="mb-5" src={logo} alt="" />
          <h5>
            Unlike most Distributors in the US,
            <br /> we Cut and Sew every order <br /> specifically for you!
          </h5>
        </div>
        <div class="item2">Home</div>
        <div class="item3">Facebook</div>
        <div class="item4">+098789000</div>
        <div class="item12">Products</div>
        <div class="item13">Twitter</div>
        <div class="item14">infernu@gmail.coom</div>
        <div class="item15">About Us</div>
        <div class="item16">Instagram</div>
        <div class="item17"><img src={map} alt="" /></div>
      </div>
      <div className="text-center text-white p-4">
        <img src={foooterbar} alt="" />
        <h5>© Copyright 2023 inferno. All Rights Reserved.</h5>
      </div>
    </div>
  );
};

export default Footer;
