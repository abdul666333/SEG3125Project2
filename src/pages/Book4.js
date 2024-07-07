import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Book2.css";
import socksandcleats from "../assets/socksandcleats.png";

function Book3() {
  

  return (
    <div className="Book4">
      <div>
        <ProgressBar variant="success" now={100} />
        <h2 className="Step1">Step 1: Your Personal Information</h2> 
        <h2 className="Step2">Step 2: Session and Date</h2>
        <h2 className="Step3">Step 3: Confirmation</h2>
      </div> 
      
      <div>

        <h2 className="Thankyou">Thank you for booking the session!</h2>

        <h4 className="Meet">Our coaches are looking to meet you soon, Please remember to bring your cleats, and socks.</h4>
      
        
        <img src={socksandcleats} className="socks-img" />

        <Link to="/">
        <button className="btn btn-dark" style={{marginTop: '100px', marginBottom: '120px', marginLeft: '680px'}}>Return to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Book3;
