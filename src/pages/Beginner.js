import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar"; 

function Beginner() {
  return (
    <div className="Beginner">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="container mt-4">
            <h2>Beginner Programs</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="card mb-4">
                  <div>
                    <h5>U8</h5>
                    <p>
                      The U8 program is for players who are 8 years old, and who are just starting to learn the basics.
                    </p>
                  </div>
              </div>
              </div>
              <div className="col-md-6">
                <div className="card mb-4">
                  <div>
                    <h5>U9</h5>
                    <p>
                      The U9 program is for players who are 9 years old, and who are just starting to learn the basics.
                    </p>
                  </div>
                </div>
              </div>
          </div>
          </div>
         </div>
    </div>
    </div>
  );
}

export default Beginner;
