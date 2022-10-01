import React from "react";
import { Link } from "react-router-dom";
function Error() {
  return (
    <div className="error">
      <h1>Nothing To See Here!!</h1>{" "}
      <Link to={"/"} className="btn">
        Back Home
      </Link>
    </div>
  );
}

export default Error;
