import { Button, Input } from "antd";
import React from "react";
import InputControl from "../components/InputControl/InputControl";

const addAddressForm = ({
  values,
  isSubmitting,
  handleChange,
  handleSubmit,
  touched,
  errors,
  handleBlur,
}) => {
  const firstNameError =
    errors.firstName && touched.firstName ? errors.firstName : null;
  const lastNameError =
    errors.lastName && touched.lastName ? errors.lastName : null;
  const emailError = errors.email && touched.email ? errors.email : null;
  const phoneError = errors.phone && touched.phone ? errors.phone : null;
  const address1Error =
    errors.address1 && touched.address1 ? errors.address1 : null;
  const address2Error =
    errors.address2 && touched.address2 ? errors.address2 : null;
  const zipCodeError =
    errors.zipCode && touched.zipCode ? errors.zipCode : null;

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Address</h2>
      <div className="grid">
        <InputControl
          label="First Name"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="firstName"
          placeholder="First Name"
          error={firstNameError}
        />
        <InputControl
          label="Last Name"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          name="lastName"
          placeholder="Last Name"
          error={lastNameError}
        />
        <InputControl
          label="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          placeholder="Email"
          error={emailError}
          type="email"
        />
        <InputControl
          label="Phone"
          value={values.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          name="phone"
          placeholder="Phone"
          error={phoneError}
        />
        <InputControl
          label="Zip Code"
          value={values.zipCode}
          onChange={handleChange}
          onBlur={handleBlur}
          name="zipCode"
          placeholder="Zip Code"
          error={zipCodeError}
        />
        <InputControl
          label="Address 1"
          value={values.address1}
          onChange={handleChange}
          onBlur={handleBlur}
          name="address1"
          placeholder="Address 1"
          error={address1Error}
          inputType="textarea"
          className="address-control"
        />
        <InputControl
          label="Address 2"
          value={values.address2}
          onChange={handleChange}
          onBlur={handleBlur}
          name="address2"
          placeholder="Address 2"
          error={address2Error}
          inputType="textarea"
          className="address-control"
        />
      </div>
      <Button htmlType="submit" loading={isSubmitting} type="primary">
        Add Address
      </Button>
    </form>
  );
};

export default addAddressForm;
