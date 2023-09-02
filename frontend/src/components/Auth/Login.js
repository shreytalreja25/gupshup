import React, { useState } from "react";
import AuthForm from "./AuthForm";
import "../styles/Auth/AuthForm.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call login API using onLogin function
    onLogin(email, password);
  };

  // ashishcoolboy
  // password1234

  async function onLogin(email, password) {
    setEmail("");
    setPassword("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
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
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password"
      />
    </AuthForm>
  );
};

export default Login;

// import React, { useState } from 'react';
// import AuthForm from './AuthForm';

// const Login = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call login API using onLogin function
//     onLogin(email, password);
//   };

//   return (
//     <AuthForm title="Login" onSubmit={handleSubmit}>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </AuthForm>
//   );
// };

// export default Login;
