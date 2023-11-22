import React, { useEffect, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import PaymentMethodBox from "../../../components/AccountPages/PaymentMethodBox";
import PaymentMethodsPlaceholder from "../../../components/AccountPages/PaymentMethodsPlaceholder";
import Sidebar from "../../../components/AccountPages/Sidebar";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { paymentMethods } from "../../../data";
import "../account.scss";
import "./payment-methods.scss";

const PaymentMethods = () => {
  const { loading, userPaymentMethods } = usePaymentMethods();

  return (
    <main id="payment-methods">
      <Breadcrumb injected>
        <Link to="/account/profile">Account</Link>
        <span className="seperator">/</span>
        <span className="current">Payment Methods</span>
      </Breadcrumb>
      <div className="container account-page">
        <Sidebar activeLink={"Payment Methods"} />
        <div className="content">
          <h2>Your Payment Methods</h2>
          {loading ? (
            <PaymentMethodsPlaceholder />
          ) : (
            <div className="payment-methods-list">
              {userPaymentMethods.map((method) => (
                <PaymentMethodBox key={method.id} {...method} />
              ))}
              <Link className="add-payment-method" to="add">
                <CiSquarePlus />
                <h3>Add Payment Method</h3>
              </Link>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default PaymentMethods;

const usePaymentMethods = () => {
  const [userPaymentMethods, setUserPaymentMethods] = useState();
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      await new Promise((res) => setTimeout(res, 500));
      setUserPaymentMethods(paymentMethods);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    loading,
    setLoading,
    loadData,
    userPaymentMethods,
    setUserPaymentMethods,
  };
};
