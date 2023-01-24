import React from "react";
import "./Products.css";
import shoe from "../images/pngwing 13.png";
import pant from "../images/pngwing 11.png";
import cap from "../images/pngwing 12.png";

const Products = () => {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center">Our Products</h1>

      <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
        <div class="col productcards">
          <div class="card image">
            <img style={{width:"350px"}} src={shoe} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Elite SG Black Rugby <br /> Boots</h4>
              <h5 class="card-text">
              $ 190.99
              </h5>
            </div>
          </div>
          <div className="middle" >
                <div className="text bg-danger">Add to cart</div>
            </div>
        </div>
        <div class="col productcards">
          <div class="card image">
            <img style={{width:"350px"}} src={pant} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Canterbury Black <br /> Advantage Rugby Shorts</h4>
              <h5 class="card-text">
              $ 80.99
              </h5>
            </div>
          </div>
          <div className="middle" >
                <div className="text bg-danger">Add to cart</div>
            </div>
        </div>
        <div class="col productcards">
          <div class="card image">
            <img style={{width:"330px"}} src={cap} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Silver Rugby Scrum Cap <br /> Head Guard</h4>
              <h5 class="card-text">
              $ 70.99
              </h5>
            </div>
          </div>
          <div className="middle" >
                <div className="text bg-danger">Add to cart</div>
            </div>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 text-center mt-5">
        <div class="col productcards">
          <div class="card image">
            <img style={{width:"350px"}} src={shoe} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Elite SG Black Rugby <br /> Boots</h4>
              <h5 class="card-text">
              $ 190.99
              </h5>
            </div>
          </div>
          <div className="middle" >
                <div className="text bg-danger">Add to cart</div>
            </div>
        </div>
        <div class="col productcards">
          <div class="card image">
            <img style={{width:"350px"}} src={pant} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Canterbury Black <br /> Advantage Rugby Shorts</h4>
              <h5 class="card-text">
              $ 80.99
              </h5>
            </div>
          </div>
          <div className="middle" >
                <div className="text bg-danger">Add to cart</div>
            </div>
        </div>
        <div class="col productcards">
          <div class="card image">
            <img style={{width:"330px"}} src={cap} class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">Silver Rugby Scrum Cap <br /> Head Guard</h4>
              <h5 class="card-text">
              $ 70.99
              </h5>
            </div>
          </div>
          <div className="middle" >
                <div className="text bg-danger">Add to cart</div>
            </div>
        </div>
      </div>
      <div className="container text-center">
      <button type="button" class="btn btn-secondary btn-lg mt-5 rounded-pill ">More Products</button>
      </div>
    </div>
  );
};

export default Products;
