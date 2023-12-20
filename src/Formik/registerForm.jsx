import { Button } from "antd";
import { Link } from "react-router-dom";
import InputControl from "../components/InputControl/InputControl";

export const registerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  const usernameError =
    errors.username && touched.username ? errors.username : null;
  const emailError = errors.email && touched.email ? errors.email : null;
  const passwordError =
    errors.password && touched.password ? errors.password : null;

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ marginBottom: "20px" }}>Register</h1>

      <InputControl
        label="Username"
        type="text"
        name="username"
        placeholder="Enter your username"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={usernameError}
      />
      <InputControl
        label="email"
        type="email"
        name="email"
        placeholder="E.g: johndoe@email.com"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={emailError}
      />
      <InputControl
        label="password"
        inputType="password"
        name="password"
        placeholder="Enter your password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={passwordError}
      />
      <Button htmlType="submit" loading={isSubmitting}>
        Create Account
      </Button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};
