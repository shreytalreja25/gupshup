import React, { useState } from 'react';
import AuthForm from './AuthForm';
import styles from '../styles/Auth/AuthForm.css'

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call login API using onLogin function
    onLogin(email, password);
  };

  return (
    <AuthForm
      title="Login"
      onSubmit={handleSubmit}
      className={styles.loginForm}
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
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
