import React, { useState } from 'react';
import AuthForm from './AuthForm';
import styles from '../styles/Auth/AuthForm.css'

const Register = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Call registration API using onRegister function
  //   onRegister(username, email, password);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Create a new user object
    const user = {
      username: username,
      email: email,
      password: password,
    };
  
    // Make a POST request to the /api/users/create endpoint
    fetch(`${process.env.API_URL}/api/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status === 200) {
          // The user was created successfully
          console.log('User created successfully');
        } else {
          // There was an error creating the user
          console.log('Error creating user');
        }
      })
      .catch((error) => {
        // There was an error communicating with the server
        console.log('Error communicating with server');
      });
  };


  return (
    <AuthForm
      title="Register"
      onSubmit={handleSubmit}
      className={styles.registerForm}
    >
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className={styles.input}
      />
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

export default Register;



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
