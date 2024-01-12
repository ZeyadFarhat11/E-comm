import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/AccountPages/Sidebar";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import http from "../../../util/http";
import "./orders.scss";
const columns = [
  {
    name: "#",
    selector: (row) => "#" + row.id,
    width: "80px",
  },
  {
    name: "Date",
    cell: (row) => (
      <div>
        <p>{dayjs(row.date).format("YYYY/MM/DD")}</p>
        <p>{dayjs(row.date).format("hh:mm")}</p>
      </div>
    ),
  },
  {
    name: "Status",
    cell: (row) => <span className={row.status + " status"}>{row.status}</span>,
  },
  {
    name: "Total Cost",
    selector: (row) => row.total_price,
  },
  {
    name: "Products",
    cell: (row) => {
      if (!row.product) return;
      return (
        <div className="products">
          <p style={{ whiteSpace: "nowrap" }}>
            {row.product[0].product_name} ({row.product[0].qty})
          </p>
          {row.product.length > 1 ? (
            <span
              title={row.product
                .slice(1)
                .map((e) => `${e.product_name} (${e.qty})`)
                .join("\n")}
            >
              +{row.product.length - 1} More
            </span>
          ) : null}
        </div>
      );
    },
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
      fontSize: "18px",
      textTransform: "uppercase",
      fontWeight: 600,
    },
  },
  cells: {
    style: {
      fontSize: "16px",
      width: "150px",
    },
  },
};

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState();

  const loadOrders = async () => {
    try {
      const res = await http.get("/order/list", { sendToken: true });
      setOrders(res.data);
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
            responsive
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
