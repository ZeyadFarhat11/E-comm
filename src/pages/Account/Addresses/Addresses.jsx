import React, { useEffect, useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import AddressBox from "../../../components/AccountPages/AddressBox";
import AddressesPlaceholder from "../../../components/AccountPages/AddressesPlaceholder";
import Sidebar from "../../../components/AccountPages/Sidebar";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { addresses } from "../../../data";
import "../account.scss";
import "./addresses.scss";
import http from "../../../util/http";

const Addresses = () => {
  const { userAddresses, loading, loadAddresses } = useUserAddresses();
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
          <h2>Your Addresses</h2>
          {loading ? (
            <AddressesPlaceholder />
          ) : (
            <div className="addresses-list">
              {userAddresses.map((address) => (
                <AddressBox
                  key={address.id}
                  {...address}
                  loadAddresses={loadAddresses}
                />
              ))}
              <Link className="add-address" to="add">
                <CiSquarePlus />
                <h3>Add Address</h3>
              </Link>
            </div>
          )}
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
      const res = await http.get("/shipping/", { sendToken: true });
      setLoading(false);
      setUserAddresses(res.data);
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
