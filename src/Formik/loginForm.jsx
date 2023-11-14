import { Link } from "react-router-dom";
import { Button, Checkbox } from "antd";

export const loginForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  const emailError = errors.email && touched.email ? errors.email : null;
  const passwordError =
    errors.password && touched.password ? errors.password : null;
  return (
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
          data-error={!!emailError}
        />
        {!!emailError && <p className="error">{errors.email}</p>}
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
          onBlur={handleBlur}
          data-error={!!passwordError}
        />
        {!!passwordError && <p className="error">{errors.password}</p>}
      </div>
      <div className="wrapper">
        <div className="checkbox">
          <Checkbox
            id="remember-me"
            name="remember"
            onChange={handleChange}
            checked={values.remember}
          />
          <label htmlFor="remember-me">Remember Me</label>
        </div>
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <Button htmlType="submit" loading={isSubmitting}>
        Login
      </Button>
      <p>
        Not registered yet? <Link to="/register">Create an account</Link>
      </p>
    </form>
  );
};
