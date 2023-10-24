import { Link } from "react-router-dom";
import { Checkbox } from "antd";

export const loginForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <h1>Login</h1>
    <h4>Hi, Welcome back 👋</h4>

    <div className="control">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="E.g: johndoe@email.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
    <div className="control">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
    <div className="wrapper">
      <div className="checkbox">
        <Checkbox id="remember-me" name="remember" onChange={handleChange} />
        <label htmlFor="remember-me">Remember Me</label>
      </div>
      <Link to="/forgot-password">Forgot Password?</Link>
    </div>
    <button type="submit" disabled={isSubmitting}>
      Login
    </button>
    <p>
      Not registered yet? <Link to="/signup">Create an account</Link>
    </p>
  </form>
);
