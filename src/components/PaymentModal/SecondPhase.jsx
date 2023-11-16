import { Formik } from "formik";
import creditCardImg from "../../assets/img/CreditCard.svg";
import { Checkbox, DatePicker } from "antd";
export default function SecondPhase({ nextPhase }) {
  const validateValues = (values) => {
    const errors = {};
    if (!values.holderName) {
      errors.holderName = "Required";
    }
    if (!values.cardNumber) {
      errors.cardNumber = "Required";
    } else if (values.cardNumber.length !== 16) {
      errors.cardNumber = "Invalid Card Number";
    }
    if (!values.expiry) {
      errors.expiry = "Required";
    } else if (new Date() > values.expiry.$d) {
      errors.expiry = "Invalid Expiry Date";
    }
    if (!values.cvv) {
      errors.cvv = "Required";
    } else if (values.cvv.length !== 3) {
      errors.cvv = "Invalid CVV";
    }
    return errors;
  };
  const handleSubmit = async () => {
    try {
      await new Promise((res) => setTimeout(res, 2000));
      nextPhase();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDisplayCardNumber = (number) => {
    const rawText = [...number.split(" ").join("")];
    const creditCard = [];
    rawText.forEach((t, i) => {
      if (i % 4 === 0 && i !== 0) creditCard.push(" ");
      creditCard.push(t);
    });
    return creditCard.join("");
  };

  return (
    <Formik
      initialValues={{
        cardNumber: "",
        expiry: "",
        cvv: "",
        holderName: "",
        saveCredit: false,
      }}
      validate={validateValues}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        errors,
        touched,
        handleChange,
        values,
        setFieldValue,
        isSubmitting,
      }) => (
        <form className="second-phase" onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <img src={creditCardImg} alt="credit card" />
            <div className="inputs-wrapper">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Holder Name"
                  name="holderName"
                  onChange={handleChange}
                />
                {errors.holderName && touched.holderName && (
                  <p className="error">{errors.holderName}</p>
                )}
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Card Number"
                  name="cardNumber"
                  onChange={(e) => {
                    const number = e.target.value.replace(/\D/g, "");
                    if (number.length <= 16) {
                      setFieldValue("cardNumber", number);
                    }
                  }}
                  value={handleDisplayCardNumber(values.cardNumber)}
                />
                {errors.cardNumber && touched.cardNumber && (
                  <p className="error">{errors.cardNumber}</p>
                )}
              </div>
              <div className="inputs-divider">
                <div className="input-wrapper">
                  <DatePicker
                    onChange={(date) => setFieldValue("expiry", date)}
                    picker="month"
                  />
                  {errors.expiry && touched.expiry && (
                    <p className="error">{errors.expiry}</p>
                  )}
                </div>
                <div className="input-wrapper">
                  <input
                    type="text"
                    placeholder="CVV"
                    name="cvv"
                    onChange={(e) => {
                      if (
                        /\D/.test(e.target.value) ||
                        e.target.value.length >= 4
                      )
                        return;
                      setFieldValue("cvv", e.target.value);
                    }}
                    value={values.cvv}
                  />
                  {errors.cvv && touched.cvv && (
                    <p className="error">{errors.cvv}</p>
                  )}
                </div>
              </div>
              <div className="save-credit">
                <Checkbox
                  onChange={handleChange}
                  name="saveCredit"
                  checked={values.saveCredit}
                  id="save-credit"
                />
                <label htmlFor="save-credit">Save this credit card</label>
              </div>
            </div>
          </div>
          <button type="submit">TODO: ANTD BUTTON</button>
        </form>
      )}
    </Formik>
  );
}
