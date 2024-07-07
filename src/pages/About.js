import React from "react";
import soccer from "../assets/soccer_about.png";
import person1 from "../assets/staffImage1.png";
import person2 from "../assets/staffImage2.png";
import person3 from "../assets/staffImage3.png";
import donor1 from "../assets/donor1.png";
import donor2 from "../assets/donor2.png";
import donor3 from "../assets/donor3.png";
import donor4 from "../assets/donor4.png";
import donor5 from "../assets/donor5.png";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="abouttop" style={{ backgroundImage: `url(${soccer})` }}></div>
      <h1>About us</h1>
      <div className="aboutbottom">
        <p>
          Since 1999, we are an established soccer club in the Ottawa region with one of the most competitive players
          in the country. We offer many programs ranging from children to adults. We also have practice sessions for all ages 
          and those who wish to explore their intrests in the sport.
        </p>

        <div className="programs">
          <h2>Our Coaches</h2>
          <div className="articles">
            <div className="card">
              <img src={person1} className="cardimage" />
              <h3>Smith Leo</h3>
              <h4>Director</h4>
            </div>
            <div className="card">
              <img src={person2} className="cardimage" />
              <h3>Chris Dojiac</h3>
              <h4>Medicine Coach</h4>
            </div>
            <div className="card">
              <img src={person3} className="cardimage" />
              <h3>Mathew Pont</h3>
              <h4>Head Coach</h4>
            </div>
          </div>
        </div>

        <div className="donors">
          <h2>Our Donors</h2>
          <div className="donorimages">
            <img src={donor1} className="donorimage"/>
            <img src={donor2} className="donorimage"/>
            <img src={donor3} className="donorimage"/>
            <img src={donor4} className="donorimage"/>
            <img src={donor5} className="donorimage"/>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
