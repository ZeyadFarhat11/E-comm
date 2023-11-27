import { Button, Rate, message } from "antd";
import React, { useState } from "react";
import useAuthContext from "../../context/AuthContext";
import useProductDetailsContext from "../../context/ProductDetailsContext";
import http from "../../util/http";
import { FaTrash } from "react-icons/fa6";
const UserReview = ({ id, rating, customer, comment }) => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const { loadProductData } = useProductDetailsContext();

  const deleteReview = async () => {
    try {
      setLoading(true);
      await http.delete(`/store/evaluations/${id}`, { sendToken: true });
      message.open({
        type: "success",
        content: "Review has been deleted",
      });
      loadProductData();
    } catch (err) {
      message.open({
        type: "error",
        content: "Error deleting review",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="review">
      <div className="wrapper">
        <h4 className="username">{customer}</h4>
        <Rate value={rating} disabled />
      </div>
      <p className="content">{comment}</p>
      {customer === user.username && (
        <button className="delete" onClick={deleteReview}>
          <FaTrash /> delete
        </button>
      )}
      <hr />
    </div>
  );
};

export default UserReview;
