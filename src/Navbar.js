import React, { useState } from 'react';
import "./index.css";
import { Link } from "react-router-dom";



const Navbar = () => {

    const [show, setShow] = useState(false)

  return (
    <>
    <section className='navbar-bg'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container">
    <a className="navbar-brand" href="#">KaranPay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
      aria-expanded="false" aria-label="Toggle navigation"
      onClick={()=> setShow(!show)} >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
     
      </ul>
      <form className="d-flex">

        <button className="btn  btn-style" type="submit">Sign Up</button>
        <button className="btn btn-style  btn-style-border" type="submit">Sign IN</button>
      </form>
     
    </div>
  </div>
</nav>
</section>
    </>

    
  );
}

export default Navbar;
