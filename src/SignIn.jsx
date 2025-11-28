// src/SignIn.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded users for demo
  const users = [
    { email: "user@example.com", password: "user123", role: "user" },
    { email: "admin@example.com", password: "admin123", role: "admin" },
  ];

  const handleSignIn = (e) => {
    e.preventDefault();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      if (user.role === "user") navigate("/user");
      else navigate("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="signin-container">
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <div style={{
          fontSize: "48px",
          marginBottom: "16px"
        }}>🥗</div>
        <h2 style={{
          marginTop: 0,
          background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>Welcome to Diet Balance</h2>
        <p style={{ color: "#6b7280", marginTop: 0, fontSize: "16px" }}>
          Analyze meals, spot deficits, and get smart personalized recommendations.
        </p>
      </div>
      <form onSubmit={handleSignIn}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: "#374151", fontWeight: "500" }}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "12px", fontSize: "16px" }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "8px", color: "#374151", fontWeight: "500" }}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "12px", fontSize: "16px" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "14px", fontSize: "16px", fontWeight: "600" }}>
          Sign In
        </button>
        <div style={{
          fontSize: 12,
          color: "#6b7280",
          marginTop: 16,
          padding: "12px",
          background: "#f0f9ff",
          borderRadius: "6px",
          border: "1px solid #bae6fd"
        }}>
          <strong>Demo Accounts:</strong><br />
          User: user@example.com / user123<br />
          Admin: admin@example.com / admin123
        </div>
        {error && <p className="error" style={{ marginTop: "16px" }}>{error}</p>}
      </form>
    </div>
  );
};

export default SignIn;
