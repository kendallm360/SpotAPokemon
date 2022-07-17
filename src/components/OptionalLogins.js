import React from "react";
import "./OptionalLogins.css";

const OptionalLogins = () => {
  return (
    <div className="optionals">
      <button className="continue-with-button facebook">
        Continue with Facebook
      </button>
      <button className="continue-with-button apple">
        Continue with Apple
      </button>
      <button className="continue-with-button google">
        Continue with Google
      </button>
      <p>OR</p>
    </div>
  );
};

export default OptionalLogins;
