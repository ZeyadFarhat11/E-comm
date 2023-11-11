import React from "react";
import Overlay from "../Overlay/Overlay";
import { useState } from "react";
import { Input } from "antd";
import { Rate, Button, message } from "antd";
function CreateReviewModal({ active, closeModal }) {
  const [text, setText] = useState("");
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(false);

  const createMessage = (status) => {
    if (status === "success") {
      message.open({
        type: "success",
        content: "Create review success.",
      });
    } else {
      message.open({
        type: "error",
        content: "Error creating review! Please try again.",
      });
    }
  };

  const resetForm = () => {
    setRate(1);
    setText("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    setLoading(false);
    createMessage("success");
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
