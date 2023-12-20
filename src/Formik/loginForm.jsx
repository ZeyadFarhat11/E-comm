import { Link } from "react-router-dom";
import { Button, Checkbox, Input } from "antd";
import InputControl from "../components/InputControl/InputControl";

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

      <InputControl
        label="email"
        name="email"
        placeholder="E.g: johndoe@email.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={emailError}
      />
      <InputControl
        label="password"
        name="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={passwordError}
        autoComplete="new-password"
        inputType="password"
      />
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
