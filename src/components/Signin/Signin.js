import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Signup from "../Signup/Signup";
import "./styles.css";

import { auth } from "../../lib/firebase";
import logo from "../../images/X-oo.svg";

const errorInitialValue = { state: false, msg: "" };

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordError, setPasswordError] = useState(errorInitialValue);
  const [emailError, setEmailError] = useState(errorInitialValue);

  const toggleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      setShowSignUp(true);
      setLoading(false);
    }, 1500);
  };

  const signin = (e) => {
    e.preventDefault();

    setLoading(true);

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setPasswordError(errorInitialValue);
        setEmailError(errorInitialValue);
        setLoading(false);
      })
      .catch((error) => {
        if (error.code === "auth/wromg-password") {
          setEmailError(errorInitialValue);
          setPasswordError({ state: true, msg: "Incorrect Password" });
        } else if (
          error.code === "auth/user-not-found" ||
          error.code === "auth/invalid-email"
        ) {
          setEmailError({ state: true, msg: "Email Doesn't exist" });
          setPasswordError(errorInitialValue);
        }
        setLoading(false);
      });
  };
  return (
    <div className="login">
      {showSignUp ? (
        <Signup setShowSignUp={setShowSignUp} />
      ) : (
        <>
          <div className="login__content">
            {loading && <div className="login__loading" />}
            <div
              className="login__wrapper"
              style={{
                opacity: loading ? "0.5" : "1",
              }}
            >
              <img
                src={logo}
                // src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                alt="X-oo"
                className="login__logo"
              />

              <p className="login__title">Sign in</p>
              <p className="login__subtitle">Continue to X-meet</p>

              <form action="" className="login__form">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  className="login__input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError.state}
                  helperText={emailError.msg}
                />

                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  className="login__input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={passwordError.state}
                  helperText={passwordError.msg}
                />

                <div className="login__infoText">
                  Not your computer? Use guest mode to signin privately
                  <a href="/">Learn More</a>
                </div>

                <div className="login__buttons">
                  <Button
                    className="login__button"
                    color="primary"
                    onClick={toggleSignup}
                  >
                    Create Account
                  </Button>

                  <Button
                    className="login__button"
                    color="primary"
                    variant="contained"
                    type="submit"
                    onClick={signin}
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Signin;
