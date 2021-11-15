import React, { Component } from "react";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import "./Continuewith.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import logo from "../../images/X-oo.svg";

class Continuewith extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      // console.log("user", user);
    });
  };

  render() {
    const anonSignIn = () => {
      // [START auth_anon_sign_in]
      firebase
        .auth()
        .signInAnonymously()
        .then(() => {
          // Signed in..
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
      // [END auth_anon_sign_in]
    };

    return (
      <div className="continueWith">
        {this.state.isSignedIn ? (
          <span></span>
        ) : (
          <div className="continueWith__content">
            <p className="continueWith__title">Sign in</p>
            <p className="continueWith__subtitle">Continue to Joins</p>

            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />

            <div className="continueWith__try_text">Try demo</div>
            <button
              className="firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-id-idp-button"
              style={{ backgroundColor: "red" }}
              data-upgraded=",MaterialButton"
              onClick={anonSignIn}
            >
              <span class="firebaseui-idp-icon-wrapper">
                <AccountCircleIcon
                  style={{ color: "white", verticalAlign: "middle" }}
                />
              </span>
              <span class="firebaseui-idp-text firebaseui-idp-text-long">
                Sign in with Dummy
              </span>
              <span class="firebaseui-idp-text firebaseui-idp-text-short">
                GitHub
              </span>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Continuewith;
