import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import './App.css';

function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    // BEM naming convention used here*
    <div className="app">
      {!user ? (
        <Login />
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
