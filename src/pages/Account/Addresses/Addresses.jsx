import React, { useEffect, useState } from "react";
import "./addresses.scss";
import "../account.scss";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/AccountPages/Sidebar";
import { addresses } from "../../../data";
import AddressBox from "../../../components/AccountPages/AddressBox";

const Addresses = () => {
  const { userAddresses, loading } = useUserAddresses();
  return (
    <main id="addresses">
      <Breadcrumb injected>
        <Link to="/account/profile">Account</Link>
        <span className="seperator">/</span>
        <span className="current">Addresses</span>
      </Breadcrumb>
      <div className="container account-page">
        <Sidebar activeLink={"Addresses"} />
        <div className="content">
          <h2>Your addresses</h2>
          <div className="addresses-list">
            {userAddresses.map((address) => (
              <AddressBox key={address.id} {...address} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Addresses;

const useUserAddresses = () => {
  const [userAddresses, setUserAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAddresses = async () => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setLoading(false);
      setUserAddresses(addresses);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadAddresses();
  }, []);

  return {
    userAddresses,
    setUserAddresses,
    loadAddresses,
    loading,
    setLoading,
  };
};
