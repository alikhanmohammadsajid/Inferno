import React from "react";
import logo from "../images/inferno 1.png";
import searchlogo from "../images/search.png";
import addcount from "../images/Vector (1).png";
import line from "../images/Vector 2.png";

const Navbar = () => {

const navbardata= [
  {id:1 , name: 'Home'},
  {id:2 , name: 'Products'},
  {id:3 , name: 'About Us'},
  {id:4 , name: 'Contacts'}
]

  return (
    <div>

      
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <img src={logo} alt="" />

          <div
            class="collapse navbar-collapse d-flex flex-row-reverse"
            id="navbarNavDropdown"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Home
                </a>
              </li>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active me-4" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item line">
                <a class="nav-link active" href="#">
                  <img src={line} alt="" />
                </a>
              </li>
              <li class="nav-item search">
                <a class="nav-link active" href="#">
                  <img src={searchlogo} alt="" />
                </a>
              </li>
              <li class="nav-item addcount">
                <a class="nav-link active" href="#">
                  <img src={addcount} alt="" />
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
