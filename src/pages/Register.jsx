import React, { useState } from "react";
import { useGlobalContext } from "../reducer/Context";
import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
function Register() {
  const { setNewUser, message } = useGlobalContext();
  const [person, setPerson] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    setNewUser(person);
    setPerson({ name: "", email: "", phone: "", password: "" });
  };
  return (
    <Helmet title="Register">
      <div className="container login-container">
        <form action="" className="login_form" onSubmit={submitHandle}>
          <h1
            style={{
              textAlign: "center",
              color: "var(--main-color)",
              marginBottom: "2rem",
            }}
          >
            Register Now
          </h1>
          <p className="message">{message}</p>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="name"
              name="name"
              value={person.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              value={person.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Your Phone</label>
            <input
              type="tel"
              name="phone"
              value={person.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              name="password"
              value={person.password}
              onChange={handleChange}
              required
            />
          </div>
          <input type="submit" value="Register" className="btn " />
          <Link to="/login">Already Have An Account</Link>
        </form>
      </div>
    </Helmet>
  );
}

export default Register;
