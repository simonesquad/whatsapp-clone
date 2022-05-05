import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import './App.css';

function App() {
  const [user, setUser] = useState(null);


  return (
    // BEM naming convention used here*
    <div className="app">

      {!user ? (
        <h1>Login</h1>
      ) : (
      <div className="app__body">

      <Router>
      <Switch>
      <Sidebar />

      <Route path="/rooms/:roomId">
        <Chat />
      </Route>

      <Route path="/">
        <Chat />
      </Route>
        
      </Switch>
      </Router>
      </div>
      )}
    </div>
  );
}

export default App;
