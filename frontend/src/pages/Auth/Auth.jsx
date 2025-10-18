import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import "./Auth.css";

const Auth = () => {
  const [activeTab, setActiveTab] = useState("login");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/browse");
  };

  return (
    <div>
      <Navbar />
      <div
        className={`auth-container ${
          activeTab === "login" ? "login" : "register"
        }`}
      >
        <div className="auth-box">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>

          {activeTab === "login" ? (
            <form onSubmit={handleSubmit} className="authForm">
              <h2 className="auth-title">Welcome Back</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="form-button">
                Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="authForm">
              <h2 className="auth-title">Create an account</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  placeholder="Full name"
                  required
                  name="fullname"
                />
                <input
                  type="text"
                  className="form-input"
                  placeholder="Username"
                  required
                  name="username"
                />
                <input
                  type="email"
                  className="form-input"
                  placeholder="Email"
                  required
                  name="email"
                />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Password"
                  required
                  name="password"
                />
                <input
                  type="password"
                  className="form-input"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  required
                />
              </div>
              <button type="submit" className="form-button">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
