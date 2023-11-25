import React from "react";
import Overlay from "../Overlay/Overlay";
import { useState } from "react";
import { Input } from "antd";
import { Rate, Button, message } from "antd";
import http from "../../util/http";
import useProductDetailsContext from "../../context/ProductDetailsContext";
import "./create-review-modal.scss";
function CreateReviewModal({ active, closeModal, productId, loadData }) {
  const [text, setText] = useState("");
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(false);
  const { loadProductData } = useProductDetailsContext() || {};

  const createMessage = (status) => {
    if (status === "success") {
      message.open({
        type: "success",
        content: "Create review success.",
      });
    } else if (status === "error") {
      message.open({
        type: "error",
        content: "Error creating review! Please try again.",
      });
    } else if (status === "empty") {
      message.open({
        type: "warning",
        content: "Review text field must not be empty",
      });
    }
  };

  const resetForm = () => {
    setRate(1);
    setText("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text.trim().length === 0) {
      return createMessage("empty");
    }

    setLoading(true);
    try {
      await http.post(
        "/store/evaluations/",
        {
          content: text,
          rate,
          product: productId,
        },
        { sendToken: true }
      );
      createMessage("success");
      if (loadProductData) {
        loadProductData();
      } else {
        loadData();
      }
    } catch (err) {
      createMessage("error");
    }
    setLoading(false);
    closeModal();
    resetForm();
  };

  if (!active) return;
  return (
    <>
      <Overlay active onClick={closeModal} />
      <form className="create-review" onSubmit={handleSubmit}>
        <h3>Create Review</h3>
        <Rate
          onChange={(val) => setRate(val)}
          value={rate}
          allowClear={false}
        />
        <Input.TextArea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Your Review Text"
        />
        <Button type="primary" size="large" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default CreateReviewModal;
