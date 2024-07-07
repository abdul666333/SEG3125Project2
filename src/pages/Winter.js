import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar"; 

function Winter() {
  return (
    <div className="Winter">
      <div className="row">
        <div className="col-lg-3">
        <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="container mt-4">
            <h2>Winter Programs</h2>
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="card mb-4">
                  <div>
                    <h5>U14</h5>
                    <p>
                      The U14 rank is for players who are under 14 years old. These players have advanced skills and a solid understanding of the game.
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

export default Winter;
