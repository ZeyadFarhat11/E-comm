import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import Sidebar from "../../../components/AccountPages/Sidebar";
import Breadcrumb from "../../../components/Breadcrumb/Breadcrumb";
import { wishlist } from "../../../data";
import "./wishlist.scss";
import Image from "rc-image";
import { AiOutlineCloseCircle } from "react-icons/ai";
const columns = [
  {
    name: "#",
    selector: (row) => "#" + row.id,
    width: "100px",
  },

  {
    name: "Product",
    cell: (row) => (
      <div className="product-details">
        <button className="delete">
          <AiOutlineCloseCircle />
        </button>
        <Image src={row.image} width={130} height={80} />
        <h3 className="title">{row.title}</h3>
      </div>
    ),
  },
  {
    name: "Price",
    selector: (row) => "$" + row.price,
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
      // const res = await http.get('')
      await new Promise((res) => setTimeout(res, 500));
      setData(wishlist);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadWishlist();
  }, []);

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
