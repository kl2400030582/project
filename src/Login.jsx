import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = (role) => {
    if(role === "admin") navigate("/admin");
    else navigate("/user");
  };

  return (
    <div style={{ 
      textAlign: "center", 
      marginTop: "50px",
      padding: "40px 20px",
      background: "linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(16, 163, 74, 0.05) 100%)",
      borderRadius: "12px",
      maxWidth: "600px",
      margin: "50px auto",
      boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
    }}>
      <h1 style={{ 
        background: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        marginBottom: "30px"
      }}>Diet Tracker App</h1>
      <button onClick={() => handleLogin("user")}>Login as User</button>
      <button onClick={() => handleLogin("admin")} style={{marginLeft: "10px"}}>Login as Admin</button>
    </div>
  );
};

export default Login;
