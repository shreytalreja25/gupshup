import React, { useState } from 'react';
import AuthForm from './AuthForm';
import styles from '../styles/Auth/AuthForm.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/users/create', {
        username,
        email,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        // Registration successful
        toast.success('Registration successful', {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      setError('Registration failed. Please try again.');
      toast.error('Registration failed. Please try again', {
        position: toast.POSITION.TOP_CENTER,
      });
      console.error('Registration error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthForm
        title="Register"
        onSubmit={handleRegister}
        className={styles.registerForm}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
          disabled={loading}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          disabled={loading}
        />
        {/* {error && <p className={styles.error}>{error}</p>} */}
        {/* <button type="submit" className={styles.button} disabled={loading}>
          {loading ? 'Loading...' : 'Register'}
        </button> */}
      </AuthForm>
      <ToastContainer />
    </>
  );
};

export default Register;

// import React, { useState } from 'react';
// import AuthForm from './AuthForm';
// import styles from '../styles/Auth/AuthForm.css'

// const Register = ({ onRegister }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("test")
//     // Call registration API using onRegister function
//     onRegister(username, email, password);
//   };

//   return (
//     <AuthForm
//       title="Register"
//       onSubmit={handleSubmit}
//       className={styles.registerForm}
//     >
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className={styles.input}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className={styles.input}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className={styles.input}
//       />
//     </AuthForm>
//   );
// };

// export default Register;



// import React, { useState } from 'react';
// import AuthForm from './AuthForm';

// const Register = ({ onRegister }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Call registration API using onRegister function
//     onRegister(username, email, password);
//   };

//   return (
//     <AuthForm title="Register" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
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

// export default Register;
