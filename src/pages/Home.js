import React from "react";
import { Link } from "react-router-dom";
import Soccerhome from "../assets/soccer_home.png";
import kids from "../assets/kids.png";
import adults from "../assets/adults.png";
import training from "../assets/training.png";
import goalkeeper from "../assets/goalkeeper.png";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Soccerhome})` }}>
      <div className="header">
        <h1 className="Title1"> Golden Knights</h1>
        <Link to="/book">
          <button className="bookbutton" > Book a session </button>
        </Link>
      </div>
      <div className="articlespart">
        <h2>Club News</h2>
        <div className="articles">
          <div>
            <h4>Golden Knights vs Red Dragons coming soon!</h4>
            <Link to="/News">Read More</Link>
          </div>
          <div>
            <h4>Free barbeque this Friday</h4>
            <Link to="/News">Read More</Link>
          </div>
          <div>
            <h4>New player signed</h4>
            <Link to="/News">Read More</Link>
          </div>
        </div>
      </div>

      <div className="programspart">
        <h2 className="programsheader">Popular Programs</h2>
        <div className="articles">
          <div className="program">
            <img src={kids} className="card-img" />
            <h3>Begginers Kids U8-12</h3>
          </div>
          <div className="program">
            <img src={adults} className="card-img" />
            <h3>Competitive Adults U16-U19</h3>
          </div>
          <div className="program">
            <img src={goalkeeper} className="card-img" />
            <h3>Goalkeeper Training</h3>
          </div>
          <div className="program">
            <img src={training} className="card-img" />
            <h3>All Age Training Session</h3>
          </div>
        </div>
      </div>

      <div className="events">
        <div className="eventheader">
          <h2>Upcoming Events</h2>
        </div>
        <div className="eventspart">
          <div className="event">
          <div className="date"> July 14</div>
            <div className="details">
              <h3>Away:Red Dragons</h3>
              <p>Time: 3:00 PM</p>
              <p>Location: Candian Tire Centre</p>
            </div>
          </div>
          <div className="event">
          <div className="date">July 18</div>
            <div className="details">
              <h3>Adult Night</h3>
              <p>Time: 4:30 PM</p>
              <p>Location: Tunner's Field</p>
            </div>
          </div>
          
          <div className="event">
          <div className="date"> July 20</div>
            <div className="details">
              <h3>Sundae Sunday</h3>
              <p>Time: 3:00 PM</p>
              <p>Location: Our Stadium</p>
            </div>
          </div>
          <div className="event">
          <div className="date"> July 28</div>
            <div className="details">
              <h3>Home: Purple Midgets</h3>
              <p>Time: 6:00 PM</p>
              <p>Location: Our Stadium</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
