import React, { useState } from "react";
import "./LoginSignUpPage.css"; // Add your custom styles

const LoginSignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between SignUp and Login
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required!";
    if (isSignUp && !formData.email) newErrors.email = "Email is required!";
    if (!formData.password) newErrors.password = "Password is required!";
    if (isSignUp && formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // If there are no errors, return true
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert(isSignUp ? "Signed Up Successfully!" : "Logged In Successfully!");
      // Further logic like calling an API for login/signup can be added here
    }
  };

  return (
    <div className="login-signup-page">
      <div className="form-container">
        <h2>{isSignUp ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            {errors.username && <span className="error">{errors.username}</span>}
          </div>

          {isSignUp && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          {isSignUp && (
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )}
            </div>
          )}

          <button type="submit" className="submit-btn">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="toggle-link">
          <span>
            {isSignUp
              ? "Already have an account? "
              : "Don't have an account? "}
            <button onClick={() => setIsSignUp((prev) => !prev)}>
              {isSignUp ? "Login" : "Sign Up"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUpPage;
