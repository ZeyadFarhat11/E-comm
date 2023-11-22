import { Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import ChangePassword from "../../../components/AccountPages/ChangePassword";
import Sidebar from "../../../components/AccountPages/Sidebar";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import useAuthContext from "../../../context/AuthContext";
import "../account.scss";
import "./profile.scss";
const Profile = () => {
  const { user } = useAuthContext();
  return (
    <main id="profile">
      <Breadcrumb injected>
        <Link to="/account/profile">Account</Link>
        <span className="seperator">/</span>
        <span className="current">Profile</span>
      </Breadcrumb>
      <div className="account-page container">
        <Sidebar activeLink={"Profile"} />
        <div className="content">
          <h2>Your Profile</h2>
          <div className="wrapper">
            <div className="control">
              <label htmlFor="username">Username</label>
              <Input value={user?.username} disabled id="username" />
            </div>
            <div className="control">
              <label htmlFor="email">Email</label>
              <Input value={user?.email} disabled id="email" />
            </div>
          </div>
          <ChangePassword />
        </div>
      </div>
    </main>
  );
};

export default Profile;
