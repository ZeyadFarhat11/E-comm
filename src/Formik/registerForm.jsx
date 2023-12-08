import { Button } from "antd";
import { Link } from "react-router-dom";

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
          data-error={!!usernameError}
        />
        {!!usernameError && <p className="error">{usernameError}</p>}
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
          data-error={!!emailError}
        />
        {!!emailError && <p className="error">{emailError}</p>}
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
          autoComplete="new-password"
        />
        {!!passwordError && <p className="error">{passwordError}</p>}
      </div>
      <Button htmlType="submit" loading={isSubmitting}>
        Create Account
      </Button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};
