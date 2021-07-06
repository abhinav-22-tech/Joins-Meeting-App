import React, { Component } from "react";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import "./Continuewith.css";
import logo from "../../images/X-oo.svg";

class Continuewith extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };

  render() {
    return (
      <div className="continueWith">
        {this.state.isSignedIn ? (
          <span></span>
        ) : (
          <div className="continueWith__content">
            <img
              src={logo}
              alt="X-oo"
              className="continueWith__logo"
            />

            <p className="continueWith__title">Sign in</p>
            <p className="continueWith__subtitle">Continue to X-meet</p>

            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Continuewith;
