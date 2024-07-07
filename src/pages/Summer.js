import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../components/Sidebar"; 

function Summer() {
  return (
    <div className="Summer">
      <div className="row">
        <div className="col-lg-3">
        <Sidebar />
        </div>
        <div className="col-lg-9">
          <div className="container mt-4">
            <h2>Summer Programs</h2>
            <div className="row">
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

export default Summer;
