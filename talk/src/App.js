import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import './App.css';

function App() {
  return (
    // BEM naming convention used here*
    <div className="app">
      <div className="app__body">
      <Router>

      <Routes>

      <Route path="/app">
        <Sidebar />
        <Chat />
      </Route>

      <Route path="/">
        <h1>Home Screen</h1>
      </Route>
        
      </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
