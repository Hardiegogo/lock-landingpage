import React, { useState } from "react";
import "./Signup.scss";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Signup() {
  const [email, setEmail] = useState("");
  const [error, setErrorMsg] = useState("");

  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = (
    e: React.MouseEvent
  ) => {
    e.preventDefault();
    if (emailRegex.test(email)) {
      window.location.href = "https://app.loch.one/welcome";
    } else {
      setErrorMsg("Please enter a valid email");
    }
  };
  return (
    <div className="signupContainer">
      <form action="#" className="signupForm">
        <h3 className="formHeading">
          Sign up for <br /> exclusive access.
        </h3>
        <div className="formContent">
          <div>
            <input
              type="email"
              className="emailInput"
              placeholder="Your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <button className="primaryBtn" onClick={submitHandler}>
              Get Started
            </button>
            {error && <p className="error">Please enter a valid email</p> }
          </div>
          <p className="footerText">
            You’ll receive an email with an invite link to join.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
