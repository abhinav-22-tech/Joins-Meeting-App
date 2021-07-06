import React, { useEffect, useState } from "react";
import Signin from "./components/Signin/Signin";
import Continuewith from "./components/Continuewith/Continuewith";
import Home from "./components/Home/home";
import { auth } from "./lib/firebase";

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
      {appState === "empty" && <p>Loading....</p>}
      {appState === "home" && <Home />}
      {appState === "login" && <Continuewith />}
      {/* {appState === "login" && <Signin/>} */}
    </div>
  );
}
// console.clear();
export default App;
