import { useState } from "react";
import "./login-page.styles.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="input-container">
          <p>Email</p>
          <input type="text" value={email} onChange={handleEmail} />
        </div>
        <div className="input-container">
          <p>Password</p>
          <input type="password" value={password} onChange={handlePassword} />
        </div>
        <div>
          <button onClick={handleLogin} className="button">
            Login
          </button>
          <div className="link-container">
            <a href="" className="link">
              Forgot password?
            </a>
            <a href="" className="link">
              Create account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
