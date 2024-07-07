import React from "react";
import { Link } from "react-router-dom"
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Book2.css";


function Book() {
  return (
    <div>
      <div>
      <ProgressBar variant="success" now={0} />
        <h2 className="Step1">Step 1: Your Personal Information</h2> 
        <h2 className="Step2">Step 2: Session and Date</h2>
        <h2 className="Step3">Step 3: Confirmation</h2>
        
        
    </div>
      <form>
        <label htmlFor="name">Name:</label>
        <input placeholder="Enter your name"/>

        <label htmlFor="email">Email:</label>
        <input placeholder="Enter your email" />

        <label htmlFor="phone">Phone:</label>
        <input placeholder="Enter your phone number"/>

        <Link to='/book2'>
        <button className="btn btn-dark" style={{marginTop: '100px', marginBottom: '120px', marginLeft: '4px', width: '120px'}}>Next</button>
        </Link>

        
      </form>
    </div>
  );
}

export default Book;
