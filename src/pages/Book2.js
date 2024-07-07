import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import "../styles/Book2.css";

import { DtPicker } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/style.css'

function Book2() {
  const [selectedsession, setsession] = useState("--Select--");
  const dropdown = (session) => {
    setsession(session);
  };

  return (
    <div>
      <div>
        <ProgressBar variant="success" now={33} />
        <h2 className="Step1">Step 1: Your Personal Information</h2> 
        <h2 className="Step2">Step 2: Session and Date</h2>
        <h2 className="Step3">Step 3: Confirmation</h2>
      </div> 
      
        <Dropdown className="sessionmenu">
        <h3>Select your session</h3>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {selectedsession}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => dropdown("Practice Session")}>Practice Session</Dropdown.Item>
            <Dropdown.Item onClick={() => dropdown("Tour session")}>Tour session</Dropdown.Item>
          </Dropdown.Menu>
         </Dropdown>

         <h3>Select a date</h3>
        <DtPicker className="Calender" />

        <Link to="/book4">
          <button className="btn btn-dark" style={{marginTop: '100px', marginBottom: '120px', marginLeft: '30px', width: '120px'}}>Next</button>
        </Link>
    </div>
  );
}

export default Book2;
