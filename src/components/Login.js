import React from "react";

const Login = () => {
  return (
    <main>
      <header className="header">
        <p>Spotify</p>
      </header>
      <div className="login-options">
        <button className="login-buttons">Facebook</button>
        <button className="login-buttons">Apple</button>
        <button className="login-buttons">Google</button>
      </div>
    </main>
  );
};

export default Login;
