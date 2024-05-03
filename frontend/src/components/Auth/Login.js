import React, { useState } from "react";
import AuthForm from "./AuthForm";
import "../styles/Auth/AuthForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call login API using onLogin function
    onLogin(username, password);
  };

  const responseGoogle = (response) => {
    // Handle Google login response here
    console.log(response);
  };

  const responseFacebook = (response) => {
    // Handle Facebook login response here
    console.log(response);
  };

  async function onLogin(username, password) {
    setUsername("");
    setPassword("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Login successful
        toast.success("Login successful", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      setError("Login failed. Please try again.");
      toast.error("Login failed. Please try again", {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthForm title="Login" onSubmit={handleSubmit} className="auth-form">
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password"
      />
       <GoogleLogin
        clientId="YOUR_GOOGLE_CLIENT_ID"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <FacebookLogin
        appId="YOUR_FACEBOOK_APP_ID"
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <ToastContainer/>
    </AuthForm>
  );
};

export default Login;
