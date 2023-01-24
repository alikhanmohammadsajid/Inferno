import React from "react";

const Emailbox = () => {
  return (
    <div className="container text-center">
      <h1 className="text-danger">Keep up to date</h1>
      <h5 className="mt-4">
        Subscribe to our email list and stay up-to-date with all our <br />{" "}
        anwesome releases and latest updates.
      </h5>
      <div class="container input-group mb-3 shadow p-3 mb-5 bg-body-tertiary rounde rounded-pill w-50">
        <input
          type="text"
          class="form-control rounded-pill "
          placeholder="enter your email"
          aria-label=""
          aria-describedby=""
        />
        <span class="input-group-text" id="basic-addon2">
          {" "}
          <button className="btn btn-danger  rounded-pill">Subscribe</button>
        </span>
      </div>
    </div>
  );
};

export default Emailbox;
