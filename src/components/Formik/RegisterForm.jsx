import { Link } from "react-router-dom";
import { Checkbox } from "antd";

export const registerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <h1 style={{ marginBottom: "20px" }}>Register</h1>

    <div className="control">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
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
    <button type="submit" disabled={isSubmitting}>
      Create Account
    </button>
    <p>
      Already have an account? <Link to="/login">Login</Link>
    </p>
  </form>
);
