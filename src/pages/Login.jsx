import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../reducer/Context";
import Helmet from "../components/Helmet";
import { Link } from "react-router-dom";
function Login() {
  const { loginUser, message, haveAcount } = useGlobalContext();
  const [person, setPerson] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (value !== "") {
      setPerson({ ...person, [name]: value });
    }
  };
  const submitHandle = (e) => {
    e.preventDefault();
    loginUser(person);
    setPerson({ email: "", password: "" });
  };
  useEffect(() => {
    if (haveAcount == "true") {
      window.location.pathname = "/profile";
    }
  }, [haveAcount]);
  return (
    <Helmet title="Login">
      <div className="container login-container">
        <form action="" className="login_form" onSubmit={submitHandle}>
          <h1
            style={{
              textAlign: "center",
              color: "var(--main-color)",
              marginBottom: "2rem",
            }}
          >
            Login Now
          </h1>
          <p className="message">{message}</p>
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
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              name="password"
              value={person.password}
              onChange={handleChange}
              required
            />
          </div>
          <input type="submit" value="Login" className="btn " />
          <Link to="/register">Create An Account</Link>
        </form>
      </div>
    </Helmet>
  );
}

export default Login;
