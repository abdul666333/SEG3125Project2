import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar"; 

function Cost2() {
  return (
    <div className="Cost2">
      <div className="row">
        <div className="col-lg-3">
        <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="container mt-4">
            <h2>Cost range $300-$700</h2>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>U14</h5>
                    <p>
                    The U14 rank is for players who are 14 years old, and have excellent skills and experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>U15</h5>
                    <p>
                    The U15 rank is for players who are 15 years old, and have excellent skills and experience.
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

export default Cost2;
