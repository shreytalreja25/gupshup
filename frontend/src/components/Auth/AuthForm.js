import React from "react";
import "../styles/Auth/AuthForm.css";

const AuthForm = ({ title, children, onSubmit }) => {
  return (
    <div className="">
      <div className="og">
        <h2 className="h2">{title}</h2>
        <div className="outer">
          <form onSubmit={onSubmit}>
            {children}
            <br />
            <button type="submit" className="btn">
              {title}
            </button>
          </form>
        </div>
      </div>
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
