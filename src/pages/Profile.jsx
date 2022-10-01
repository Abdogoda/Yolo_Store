import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import { useGlobalContext } from "../reducer/Context";
import { Link } from "react-router-dom";
function Profile() {
  const { haveAcount, user, logoutHandle } = useGlobalContext();
  return (
    <Helmet title="Profile">
      {haveAcount == "true" || haveAcount == true ? (
        <>
          <h1
            style={{
              textAlign: "center",
              color: "var(--main-color)",
              marginBottom: "2rem",
            }}
          >
            Your Profile
          </h1>
          <div className="container profile-container bg-section">
            <div className="left">
              <div className="profile-img">
                <i className="fa fa-user "></i>
              </div>
              <div className="profile-info">
                <h3>{user.name}</h3>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            </div>
            <div className="right">
              <Link to="/login" onClick={logoutHandle} className="btn red">
                Signout <i className="fa fa-signout"></i>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="error container">
            <h1>Your Dont Have An Account!!</h1>
            <div className="links">
              <Link to="/login" className="btn">
                Sign In
              </Link>
              <Link to="/register" className="btn outline">
                Sign Up
              </Link>
            </div>
          </div>
        </>
      )}
    </Helmet>
  );
}

export default Profile;
