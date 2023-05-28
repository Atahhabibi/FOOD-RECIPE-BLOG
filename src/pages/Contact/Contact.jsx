import React from "react";
import "./Contact.css";
import contactImg from "../../images/contact-img2.jpg";
const Contact = () => {
  return (
    <div className="Contact-page">
      <div className="form-container">
        <img src={contactImg} alt="" className="contact-img" />

        <div className="input-container">
          <h2 className="contact-us">Contact us</h2>
          <div>
            <div className="styled-input wide">
              <input type="text" required />
              <label>Name</label>
            </div>
          </div>
          <div className="">
            <div className="styled-input wide ">
              <input type="text" required />
              <label>Email</label>
            </div>
          </div>
          <div className="">
            <div className="styled-input wide">
              <input type="text" required />
              <label>Phone Number</label>
            </div>
          </div>
          <div>
            <div className="styled-input wide">
              <textarea required></textarea>
              <label>Message</label>
            </div>
          </div>
          <div>
            <div className=" submit-btn">Send Message</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
