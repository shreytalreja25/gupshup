import React from 'react';

const AuthForm = ({ title, children, onSubmit }) => {
  return (
    <div className="auth-form">
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {children}
        <button type="submit">{title}</button>
      </form>
    </div>
  );
};

export default AuthForm;
