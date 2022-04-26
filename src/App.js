import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Continuewith from "./components/Continuewith/Continuewith";
import Home from "./components/Home/home";
import { auth } from "./lib/firebase";

function App() {
  const [, setCurrentUser] = useState(null);
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
          <Route path="/Joins-Meeting-App" exact>
            <div>
              {appState === "empty" && <p>Loading....</p>}
              {appState === "home" && <Home />}
              {appState === "login" && <Continuewith />}
            </div>
          </Route>
          {/* <Route exact path="/:roomId" component={Main}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
