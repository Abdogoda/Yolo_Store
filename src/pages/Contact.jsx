import React, { useState } from "react";
import { useGlobalContext } from "../reducer/Context";
import Helmet from "../components/Helmet";
function Contact() {
  const { haveAcount, user } = useGlobalContext();
  const [information, setInformation] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (haveAcount) {
      const data = information;
      console.log(data);
      setInformation({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } else {
      window.location.pathname = "/profile";
    }
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInformation({ ...information, [name]: value });
  };
  return (
    <Helmet title="Contact">
      <h2 className="section__heading">Contact Us</h2>
      <div className="container contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="inputs-box">
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                value={information.name}
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                value={information.email}
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Your Phone</label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                value={information.phone}
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Your Address</label>
              <input
                type="text"
                name="address"
                onChange={handleChange}
                value={information.address}
              />
            </div>
          </div>
          <div className="input-group text-message">
            <span>Your Message</span>
            <textarea
              name="message"
              required
              onChange={handleChange}
              value={information.message}
            ></textarea>
          </div>
          <div className="send-button">
            <button className="btn red" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </Helmet>
  );
}

export default Contact;
