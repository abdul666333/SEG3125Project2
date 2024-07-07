import React from "react";
import { Link } from "react-router-dom";
import "../styles/Book.css";
import training from "../assets/trainingsession.png";
import tour from "../assets/tour.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Book() {
    return (
    <div className="Bookpage">
      <div className="sessions">
        <h1>Explore Our Sessions</h1>
  
        <div className="cards">
          <img src={training} className="cardsimg" />
          <h2>
            <FontAwesomeIcon icon={faDollarSign} /> Practice Session
          </h2>
          <p>
            Join us for a paid practice session where you can experience our facilities and equipment first-hand. Whether you're a beginner or an experienced player, our practice session offers a great opportunity to improve your skills and enjoy the game.
          </p>
        </div>
  
        <div className="cards">
          <img src={tour} className="cardsimg" />
          <p>
            Take a guided tour of our club to see all that we have to offer. During the tour, you'll get to explore our state-of-the-art facilities, meet our friendly staff, and learn about the various programs and services available at our club.
          </p>
        </div>
  
        <Link to="/book1">
          <button className="bookbutton">Book Your Session Now</button>
        </Link>
      </div>
      </div>
    );
  }
  
  export default Book;
  