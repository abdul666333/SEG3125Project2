import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar"; 

function Cost3() {
  return (
    <div className="Cost3">
      <div className="row">
        <div className="col-lg-3">
        <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="container mt-4">
            <h2>Cost range $700-$1000</h2>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>U11</h5>
                    <p>
                    The U11 rank is for players who are 11 years old, and have excellent good and experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>U12</h5>
                    <p>
                    The U12 rank is for players who are 12 years old, and have good skills and experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>U13</h5>
                    <p>
                    The U13 rank is for players who are 13 years old, and have good skills and experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>All Age Training Session</h5>
                    <p>
                    The All Age Training Session is for players all ages looking to train together.
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

export default Cost3;
