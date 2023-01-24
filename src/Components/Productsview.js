import React from "react";
import "./Productview.css";
import image1 from "../images/Rectangle 6.png";
import image2 from "../images/Rectangle 7.png";
import image3 from "../images/Rectangle 9.png";
import image4 from "../images/2023-01-19-removebg-preview.jpg";

const Productsview = () => {
  return (
    <div className="container">
      <h1 className="text-center text-danger mt-5">
        Anything you want, we got it
      </h1>

      <div >
        <div class="row row-cols-1 row-cols-md-2 g-4  mt-5">
          <div class="col cards">
            <div class="card image">
              <img src={image1} class="card-img-top image" alt="..." />
            </div>
            <div className="middle" >
                <div className="text">Sports Shoes</div>
            </div>
          </div>
          <div class="col cards">
            <div class="card image">
              <img src={image2} class="card-img-top image" alt="..." />
            </div>
            <div className="middle" >
                <div className="text">Customize jerseys</div>
            </div>
          </div>
          <div class="col cards">
            <div class="card image">
              <img src={image3} class="card-img-top image" alt="..." />
            </div>
            <div className="middle" >
                <div className="text">Gloves</div>
            </div>
          </div>
          <div class="col cards">
            <div class="card image">
              <img src={image4} class="card-img-top image" alt="..." />
            </div>
            <div className="middle" >
                <div className="text">Accesories</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productsview;
