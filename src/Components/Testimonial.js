import React from "react";
import "./Testimonial.css";
import dot from "../images/Vector.png";

const Testimonial = () => {
  return (
    <div className=" container mb-5 ">
      <h1 className="text-center text-danger ">Testimonials</h1>

      {/* <div>
      <div><img src={} alt="" /></div>
      <div> <img src={} alt="" /></div>
      <div> <img src={} alt="" /></div>
      <div> <img src={} alt="" /></div>
      </div> */}
      <div className="row mt-5">
        <div className="testimonialcard col-md-4  m-auto p-auto">
          <div className="imgbox">
            <img src={dot} alt="" />
          </div>
          <div className="content">
            <h2>If it ain't Inferno. it ain't for me, jacket. Inferno</h2>
            <p className="details">
              William "Eügenío" Brumfield, Former OURFC Captain & All-MAC
              Selection.
            </p>
          </div>
        </div>

        <div className="testimonialcard col-md-4  m-auto">
          <div className="imgbox">
            <img src={dot} alt="" />
          </div>
          <div className="content">
            <h2>Whenever I wear that Letterman's jacket.</h2>
            <p className="details">
              Brady Payne, Owner of The Cleveland Rugby League
            </p>
          </div>
        </div>

        <div className="testimonialcard col-md-4 m-auto">
          <div className="imgbox">
            <img src={dot} alt="" />
          </div>
          <div className="content">
            <h2>You guys make some raw sh*t This jacket is fire.</h2>
            <p className="details">
              Mack Wilson, Linebacker for the New England Patriots
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
