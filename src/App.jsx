import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import HomePage from "./HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <header className="app-header">
        <div className="brand" style={{ cursor: "pointer" }} onClick={() => window.location.href = "/home"}>
          🥗 Diet Balance
        </div>
        <nav className="nav">
          <a href="/home" className="nav-button signin-btn">Home</a>
          <a href="/signup" className="nav-button signup-btn">Sign Up</a>
          <a href="/" className="nav-button signin-btn">Sign In</a>
        </nav>
      </header>
      <div className="container">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<div className="card"><UserDashboard /></div>} />
          <Route path="/admin" element={<div className="card"><AdminDashboard /></div>} />
        </Routes>
        <footer style={{ textAlign: "center", color: "#6b7280", margin: "24px 0", padding: "24px 0" }}>
          <p style={{ margin: "8px 0" }}>© {new Date().getFullYear()} Diet Balance - Advanced Nutrition Analysis System</p>
          <p style={{ margin: "8px 0", fontSize: "14px" }}>
            Helping children and adolescents achieve optimal nutritional health
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;