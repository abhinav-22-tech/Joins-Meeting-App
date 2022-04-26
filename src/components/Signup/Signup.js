import React, { useState } from "react";
import { Checkbox, TextField } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Button } from "@material-ui/core";
import "./styles.css";
import { auth } from "../../lib/firebase";
import logo from "../../images/X-oo.svg";

const initialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = ({ setShowSignUp }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState(initialValue);
  const [checked, setChecked] = useState(false);

  const errorInitialValue = { state: false, msg: "" };
  const [passwordError, setPasswordError] = useState(errorInitialValue);
  const [emailError, setEmailError] = useState(errorInitialValue);

  const disabled =
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword;

  const toggleSignup = () => {
    setLoading(true);

    setTimeout(() => {
      setShowSignUp(false);
      setLoading(false);
    }, 1500);
  };

  const createAccount = (e) => {
    e.preventDefault();
    setLoading(true);

    const error = formData.password === formData.confirmPassword;

    if (!error) {
      setPasswordError({ state: true, msg: "Passwords do not match" });
      setEmailError(errorInitialValue);
      setFormData({ ...formData, confirmPassword: "" });
      setLoading(false);
      return;
    } else {
      setEmailError(errorInitialValue);
      setPasswordError(errorInitialValue);
    }

    auth
      .createUserWithEmailAndPassword(formData.email, formData.password)
      .then(() => {
        auth.currentUser
          .updateProfile({
            displayName: `${formData.firstName} ${formData.lastName}`,
          })
          .then(() => {
            setLoading(false);
            setEmailError(errorInitialValue);
            setPasswordError(errorInitialValue);
          });
      })
      .catch((error) => {
        console.log(error.code);
        if (error.code === "auth/email-already-in-use") {
          setEmailError({ state: true, msg: "Email is already in use" });
          setFormData({ ...formData, email: "" });
          setPasswordError(errorInitialValue);
        }
        if (error.code === "auth/invalid-email") {
          setEmailError({
            state: true,
            msg: "Email address in not properly formatted",
          });
          setFormData({ ...formData, email: "" });
          setPasswordError(errorInitialValue);
        }
        if (error.code === "auth/weak-password") {
          setPasswordError({
            state: true,
            msg: "Password should be a tleast 6 characters",
          });
          setFormData({ ...formData, password: "", confirmPassword: "" });
          setEmailError(errorInitialValue);
        }
        // else{
        //   setEmailError({state: true, msg: "An unknow error occured"});
        //   setPasswordError({state: true, msg: "An unknow error occured"});
        // }
        setLoading(false);
      });
  };

  return (
    <div className="signup__container">
      <div className="signup" style={{ opacity: loading ? "0.5" : "1" }}>
        {loading && <div className="login__loading signup__loading" />}
        <div className="signup__container">
          <div className="signup__left">
            <img
              src={logo}
              alt="X-oo"
              className="login__logo"
            />

            <h1 className="signup__heading">Create your X-oo Account</h1>
            <h1 className="signup__subheading">Continue to X-meet</h1>

            <form className="signup__inputs">
              <div className="signup__nameInputs">
                <TextField
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  type="name"
                  className="signup__nameInput"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />

                <TextField
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                  type="name"
                  className="signup__nameInput"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>

              <TextField
                id="outlined-basic"
                label="Email"
                fullWidth
                variant="outlined"
                error={emailError.state}
                helperText={
                  emailError.state
                    ? emailError.msg
                    : "You can use letters, numbers & periods"
                }
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <div className="signup__passwordInputs">
                <div className="signup__passwordWrapper">
                  <TextField
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type={checked ? "text" : "password"}
                    className="signup__passwordInput"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    error={passwordError.state}
                  />

                  <TextField
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    type={checked ? "text" : "password"}
                    className="signup__passwordInput"
                    value={formData.confirmPassword}
                    error={passwordError.state}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                  />
                </div>
                <p
                  className={`signup__helperText ${
                    passwordError.state && "signin__error"
                  }`}
                >
                  {passwordError.state
                    ? passwordError.msg
                    : "Use 8 or more characters with a mix of letters, numbers & symbols"}
                </p>

                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                  }
                  label="Show Password"
                />
              </div>

              <div className="signup__buttons">
                <Button
                  className="signup__button"
                  color="primary"
                  variant="text"
                  onClick={toggleSignup}
                >
                  Sign In instead
                </Button>

                <Button
                  className="signup__button"
                  color="primary"
                  variant="contained"
                  type="submit"
                  onClick={createAccount}
                  disabled={disabled}
                >
                  Create
                </Button>
              </div>
            </form>
          </div>

          <figure className="signup__figure">
            <img
              className="signup__figureImg"
              src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
              alt="account"
            />

            <figcaption className="signup__figcaption">
              One account. All of X-oo working for you
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Signup;
