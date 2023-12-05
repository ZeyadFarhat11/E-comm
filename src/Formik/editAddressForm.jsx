import { Button, Input } from "antd";
import React from "react";

const editAddressForm = ({
  values,
  isSubmitting,
  handleChange,
  handleSubmit,
  touched,
  errors,
  handleBlur,
  closeModal,
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
      <h2>Edit Address</h2>
      <div className="grid">
        <div className="control">
          <label htmlFor="firstName">First Name</label>
          <Input
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="firstName"
            id="firstName"
            placeholder="First Name"
            style={{ borderColor: firstNameError ? "#cc0000" : undefined }}
          />
          {!!firstNameError && <p className="error">{firstNameError}</p>}
        </div>
        <div className="control">
          <label htmlFor="lastName">Last Name</label>
          <Input
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            style={{ borderColor: lastNameError ? "#cc0000" : undefined }}
          />
          {!!lastNameError && <p className="error">{lastNameError}</p>}
        </div>
        <div className="control">
          <label htmlFor="email">Email</label>
          <Input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            id="email"
            placeholder="Email"
            style={{ borderColor: emailError ? "#cc0000" : undefined }}
          />
          {!!emailError && <p className="error">{emailError}</p>}
        </div>
        <div className="control">
          <label htmlFor="phone">Phone</label>
          <Input
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            name="phone"
            id="phone"
            placeholder="Phone"
            style={{ borderColor: phoneError ? "#cc0000" : undefined }}
          />
          {!!phoneError && <p className="error">{phoneError}</p>}
        </div>
        <div className="control">
          <label htmlFor="zipCode">zip Code</label>
          <Input
            value={values.zipCode}
            onChange={handleChange}
            onBlur={handleBlur}
            name="zipCode"
            id="zipCode"
            placeholder="Zip Code"
            style={{ borderColor: zipCodeError ? "#cc0000" : undefined }}
          />
          {!!zipCodeError && <p className="error">{zipCodeError}</p>}
        </div>
        <div className="control address-control">
          <label htmlFor="address1">Address 1</label>
          <Input.TextArea
            value={values.address1}
            onChange={handleChange}
            onBlur={handleBlur}
            name="address1"
            id="address1"
            placeholder="Address 1"
            style={{
              borderColor: address1Error ? "#cc0000" : undefined,
            }}
          />
          {!!address1Error && <p className="error">{address1Error}</p>}
        </div>
        <div className="control address-control">
          <label htmlFor="address2">Address 2</label>
          <Input.TextArea
            value={values.address2}
            onChange={handleChange}
            onBlur={handleBlur}
            name="address2"
            id="address2"
            placeholder="Address 2"
            style={{
              borderColor: address2Error ? "#cc0000" : undefined,
            }}
          />
          {!!address2Error && <p className="error">{address2Error}</p>}
        </div>
      </div>
      <Button htmlType="submit" loading={isSubmitting} type="primary">
        Save Changes
      </Button>
      <Button
        htmlType="button"
        type="default"
        style={{ marginLeft: "15px" }}
        onClick={closeModal}
      >
        Cancel
      </Button>
    </form>
  );
};

export default editAddressForm;
