import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const login = () => {
    const data = {
      username: username,
      password: password,
    };
    axios.post("http://localhost:3001/auth/login", data).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        sessionStorage.setItem("accessToken", res.data);
        history("/", { replace: true });
      }
    });
  };

  return (
    <div className="loginContainer">
      <label htmlFor="username">Username:</label>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
