import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [professorId, setProfessorId] = useState(""); // State for Professor ID
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Professor ID:", professorId); // Log Professor ID
    console.log("Email:", email);
    console.log("Password:", password);

    if (email === "admin1@gmail.com") {
      // Redirect to the Admin page if email is admin1@gmail.com
      alert("Welcome Admin!");
      navigate("/admin");
    } else {
      alert("Login Successful!");
      // Redirect to Home page for regular users
      navigate("/home");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Professor ID</label>
          <input
            type="text"
            value={professorId}
            onChange={(e) => setProfessorId(e.target.value)}
            placeholder="Enter your professor ID"
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div className="signup-redirect">
        <p>Don't have an account?</p>
        <button
          className="signup-link-button"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
