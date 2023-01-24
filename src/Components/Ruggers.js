import React from "react";
import "./Ruggers.css";
import ruggerds from "../images/Rectangle 23.png";

const Ruggers = () => {
  return (
    <div>
      <div class="card text-white mt-5 bg-dark">
        <img src={ruggerds} class="card-img opacity-25 " alt="..." />
        <div class="card-img-overlay container position-absolute top-50 start-0 translate-middle-y">
          <h1 class="card-title mb-3">
            Created for Ruggers, <br /> by Ruggers
          </h1>
          <h4 class="card-text mb-3">
          Unlike most Distributors in the US, we Cut and Sew every order <br /> specifically for you! We provide free design services with <br /> unmatched personalized service.
          </h4>
          <button type="button" class="btn btn-danger rounded-pill p-3">Shop rugby accesories</button>
        </div>
      </div>
    </div>
  );
};

export default Ruggers;
