import { Button, Rate, message } from "antd";
import React, { useState } from "react";
import useAuthContext from "../../context/AuthContext";
import useProductDetailsContext from "../../context/ProductDetailsContext";
import http from "../../util/http";
import { FaTrash } from "react-icons/fa6";
import { showUnexpectedError } from "../../util/error";
const UserReview = ({ id, rating, customer, comment }) => {
  const { user } = useAuthContext();
  const { loadProductData } = useProductDetailsContext();

  const deleteReview = async () => {
    try {
      await http.delete(`/store/evaluations/${id}`, { sendToken: true });
      message.open({
        type: "success",
        content: "Review has been deleted",
      });
      loadProductData();
    } catch (err) {
      showUnexpectedError();
    }
  };
  const isMine = customer === user?.username;
  return (
    <div className="review">
      <div className="wrapper">
        <h4 className="username">
          {customer}
          {isMine && " (You)"}
        </h4>
        <Rate value={rating} disabled />
      </div>
      <q className="content">{comment}</q>
      {isMine && (
        <button className="delete" onClick={deleteReview}>
          <FaTrash /> delete
        </button>
      )}
      <hr />
    </div>
  );
};

export default UserReview;
