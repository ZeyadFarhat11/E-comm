import React from "react";
import "./orders.scss";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import Sidebar from "../../../components/AccountPages/Sidebar";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import http from "../../../util/http";
import { orders as ordersData } from "../../../data";
import { useEffect } from "react";
import { useState } from "react";
const columns = [
  {
    name: "#",
    selector: (row) => "#" + row.id,
    width: "100px",
  },
  {
    name: "Date",
    cell: (row) => (
      <div>
        <p>{row.date.split(" - ")[0]}</p>
        <p>{row.date.split(" - ")[1]}</p>
      </div>
    ),
  },
  {
    name: "Status",
    cell: (row) => <span className={row.status + " status"}>{row.status}</span>,
  },
  {
    name: "Total Cost",
    selector: (row) => row.total_cost,
  },
  {
    name: "Payment",
    cell: (row) => (
      <div className="payment">
        <h3 style={{ fontWeight: "bold", fontSize: "16px" }}>
          {row.payment.type}
        </h3>
        <p>**** {row.payment.lastDigits}</p>
      </div>
    ),
  },
  {
    name: "Products",
    cell: (row) => (
      <div className="products">
        <p>{row.products[0].title}</p>
        {row.products.length > 1 ? (
          <span>+{row.products.length - 1} More</span>
        ) : null}
      </div>
    ),
  },
];
const customStyles = {
  rows: {
    style: {
      minHeight: "100px",
    },
  },
  headCells: {
    style: {
      fontSize: "20px",
    },
  },
  cells: {
    style: {
      fontSize: "16px",
    },
  },
};

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState();

  const loadOrders = async () => {
    try {
      // const res = await http.get('')
      await new Promise((res) => setTimeout(res, 500));
      setOrders(ordersData);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <main id="orders">
      <Breadcrumb injected>
        <Link to="/account/profile">Account</Link>
        <span className="seperator">/</span>
        <span className="current">Orders</span>
      </Breadcrumb>
      <div className="account-page container">
        <Sidebar activeLink={"Orders"} />
        <div className="content">
          <h2>Your Orders</h2>
          <DataTable
            columns={columns}
            progressPending={loading}
            data={orders}
            customStyles={customStyles}
            noDataComponent={
              <div
                style={{
                  padding: "20px",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                No Data Available
              </div>
            }
          />
        </div>
      </div>
    </main>
  );
};

export default Orders;
