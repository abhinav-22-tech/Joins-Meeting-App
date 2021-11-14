import React, { useRef, useEffect, useState } from "react";
import Continuewith from "./components/Continuewith/Continuewith";
import Home from "./components/Home/home";
// import ChatRoom from "./components/ChatRoom/ChatRoom";
import Main from "./components/Main/Main";

import { auth } from "./lib/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [appState, setAppState] = useState("empty");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setAppState("home");
      } else {
        setCurrentUser(null);
        setAppState("login");
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/Trishul-Meeting-App" exact>
            <div>
              {appState === "empty" && <p>Loading....</p>}
              {appState === "home" && <Home />}
              {appState === "login" && <Continuewith />}
            </div>
          </Route>
          <Route exact path="/:roomId" component={Main}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
