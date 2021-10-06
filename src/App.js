import React, { useRef, useEffect, useState } from "react";
import Continuewith from "./components/Continuewith/Continuewith";
import Home from "./components/Home/home";
import ChatRoom from "./components/ChatRoom/ChatRoom";

import { auth } from "./lib/firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import firebase from "firebase";
import "firebase/firestore";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();
const analytics = firebase.analytics();

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
          <Route path="/Trishul-Meeting-App-" exact>
            <div>
              {appState === "empty" && <p>Loading....</p>}
              {appState === "home" && <Home />}
              {appState === "login" && <Continuewith />}
            </div>
          </Route>
          <Route path="/Trishul-Meeting-App-/ChatRoom"><ChatRoom/></Route>
        </Switch>
      </Router>

      {/* <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      {appState === "home" && <ChatRoom />} */}
      {/* {appState === "login" && <Signin/>} */}
    </div>
  );
}

function SignOut() {
  return (
    auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = firestore.collection("messages");
//   const query = messagesRef.orderBy("createdAt").limit(200);

//   const [messages] = useCollectionData(query, { idField: "id" });

//   const [formValue, setFormValue] = useState("");

//   const sendMessage = async (e) => {
//     e.preventDefault();

//     const { uid, photoURL } = auth.currentUser;

//     await messagesRef.add({
//       text: formValue,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       uid,
//       photoURL,
//     });

//     setFormValue("");
//     dummy.current.scrollIntoView({ behavior: "smooth" });
//   };
//   return (
//     <>
//       <main>
//         {messages &&
//           messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
//         <span ref={dummy}></span>
//       </main>
//       <form onSubmit={sendMessage}>
//         <input
//           value={formValue}
//           onChange={(e) => setFormValue(e.target.value)}
//           placeholder="say something nice"
//         />
//         <button type="submit" disabled={!formValue}></button>
//       </form>
//     </>
//   );
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;
//   const messageClass = uid === auth.currentUser.uid ? "sent" : "received";
//   return (
//     <>
//       <div className={`message ${messageClass}`}>
//         <img
//           src={
//             photoURL || "https://api.adorable.io/avatars/23/abott@adorable.png"
//           }
//           alt="avatar"
//         />
//         <p>{text}</p>
//       </div>
//     </>
//   );
// }

export default App;
