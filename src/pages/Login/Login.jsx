import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./login.scss";
import { Link } from "react-router-dom";
import { Checkbox } from "antd";
import { useState } from "react";

export default function Login() {
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <main id="login">
      <Breadcrumb>Login</Breadcrumb>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <h4>Hi, Welcome back 👋</h4>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="E.g: johndoe@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="wrapper">
            <div className="checkbox">
              <Checkbox
                id="remember-me"
                onChange={(e) => setRemember(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember Me</label>
            </div>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <button type="submit">Login</button>
          <p>
            Not registered yet? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </main>
  );
}
