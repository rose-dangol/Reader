import React from 'react'

const LoginForm = () => {
  return (
    <div>
      <form>
        <h2 className="auth-title">Create Account</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-input"
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-input"
            placeholder="Choose a username"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            placeholder="Create a password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary form-button">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default LoginForm
