import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar";

function Cost1() {
  return (
    <div className="Cost1">
      <div className="row">
        <div className="col-lg-3">
        <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="container mt-4">
            <h2>Cost range $100-$300 </h2>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>U8</h5>
                    <p className="card-text">
                    The U8 program is for players who are 8 years old, and who are just starting to learn the basics.
                    </p>
                </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>U9</h5>
                    <p>
                    The U9 program is for players who are 9 years old, and who are just starting to learn the basics.
                    </p>
                 </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>U10</h5>
                    <p>
                      The U10 rank is for players who are 10 years old. These players have some good skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>Goalkeeper Training</h5>
                    <p>
                    The Goalkeeper training is for players of all age looking to improvr their skills in goalkeeping.
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

export default Cost1;
