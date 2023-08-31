import React from 'react';
import styles from '../styles/Auth/AuthForm.css';

const AuthForm = ({ title, children, onSubmit }) => {
  return (
    <div className={styles.authForm}>
      <h2 className={styles.title}>{title}</h2>
      <form onSubmit={onSubmit}>
        {children}
        <button type="submit" className={styles.button}>{title}</button>
      </form>
    </div>
  );
};

export default AuthForm;


// import React from 'react';

// const AuthForm = ({ title, children, onSubmit }) => {
//   return (
//     <div className="auth-form">
//       <h2>{title}</h2>
//       <form onSubmit={onSubmit}>
//         {children}
//         <button type="submit">{title}</button>
//       </form>
//     </div>
//   );
// };

// export default AuthForm;
