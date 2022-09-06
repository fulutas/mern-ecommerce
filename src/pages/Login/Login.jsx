import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./login.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password })
  };
  return (
    <div className="login-container">
      <div className="formItem">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="formItem">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
