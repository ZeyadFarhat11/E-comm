import React, { useId } from "react";
import { Input } from "antd";
import "./input-control.scss";

const InputControl = ({
  label,
  inputType = "text",
  error,
  className = "",
  ...props
}) => {
  const id = useId();
  const InputComponent =
    inputType === "text"
      ? Input
      : inputType === "textarea"
      ? Input.TextArea
      : Input.Password;
  return (
    <div className={["input-control", className].join(" ")}>
      <label htmlFor={id}>{label}</label>

      <InputComponent
        id={id}
        {...props}
        style={{ borderColor: error ? "#cc0000" : null }}
      />
      {!!error && <p className="error">{error}</p>}
    </div>
  );
};

export default InputControl;
