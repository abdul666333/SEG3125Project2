import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar"; 

function Amateur() {
  return (
    <div className="Amateur">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="container mt-4">
            <h2>Amateur Programs</h2>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="card mb-4">
                  <div>
                    <h5>U10</h5>
                    <p>
                    The U10 program is for players who are 10 years old, and who have decent skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card mb-4">
                  <div>
                    <h5>U11</h5>
                    <p>
                      The U11 rank is for players who are 11 years old, and have decent skills, and understanding of the game.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card mb-4">
                  <div>
                    <h5>U12</h5>
                    <p>
                    The U12 rank is for players who are 12 years old, and have decent skills, and understanding of the game.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card mb-4">
                  <div>
                    <h5>U13</h5>
                    <p>
                    The U13 rank is for players who are 13 years old, and have decent skills, and understanding of the game.
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

export default Amateur;
