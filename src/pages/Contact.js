import React from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      
        <div className="contactinfo">
          <div className="contacts">
            <FaPhone className="icons" />
            <p className="contactitems">+1 613-456-7890</p>
          </div>
          <div className="contacts">
            <FaEnvelope className="icons" />
            <p className="contactitems">GoldenKnights@gmail.com</p>
          </div>
        </div>
      
      <div className="contactarea">
        <h1>Contact us</h1>

        <form id="contact-form">
          <label>Full Name</label>
          <input placeholder="Enter your name..." />
          <label>Email</label>
          <input placeholder="Enter your email..." />
          <label>Message</label>
          <textarea rows="6" placeholder="Type your message..." name="message"></textarea>
          <Link to="/confirmation">
            <button> Send Message</button>
          </Link>
        </form>
      </div>
    </div>
    
  );
}

export default Contact;
