import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/AccountPages/Sidebar";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import "./wishlist.scss";
import Image from "../../../components/Image.jsx";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { showUnexpectedError } from "../../../util/error.js";
import http from "../../../util/http.js";
import dayjs from "dayjs";
const columns = [
  {
    name: "#",
    selector: (row) => "#" + row.id,
    width: "100px",
  },

  {
    name: "Product",
    width: "500px",
    cell: (row) => (
      <div className="product-details">
        <button
          className="delete"
          onClick={() => row.removeItem(row.product.id)}
        >
          <AiOutlineCloseCircle />
        </button>
        <Image src={row.product.image} width={130} height={80} />
        <Link className="title" to={`/product/${row.product.id}`}>
          {row.product.title}
        </Link>
      </div>
    ),
  },
  {
    name: "Price",
    selector: (row) => "$" + row.product.price,
  },
  {
    name: "Adding date",
    selector: (row) => dayjs(row.created_at).format("YYYY/MM/DD hh:mm"),
  },
];
const customStyles = {
  rows: {
    style: {
      minHeight: "120px",
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
    },
  },
};

const Wishlist = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  const loadWishlist = async () => {
    try {
      const res = await http.get("/wishlist/item", { sendToken: true });
      setData(res.data.map((item) => ({ ...item, removeItem })));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadWishlist();
  }, []);

  const removeItem = async (id) => {
    try {
      const res = await http.delete(`/wishlist/item/${id}`);
      loadWishlist();
    } catch (e) {
      showUnexpectedError();
      console.log(e);
    }
  };

  return (
    <main id="wishlist">
      <Breadcrumb injected>
        <Link to="/account/profile">Account</Link>
        <span className="seperator">/</span>
        <span className="current">Wishlist</span>
      </Breadcrumb>
      <div className="account-page container">
        <Sidebar activeLink={"Wishlist"} />
        <div className="content">
          <h2>Your Wishlist</h2>
          <DataTable
            progressPending={loading}
            columns={columns}
            data={data}
            responsive
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

export default Wishlist;
