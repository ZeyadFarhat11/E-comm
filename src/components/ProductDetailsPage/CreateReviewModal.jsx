import React from "react";
import Overlay from "../Overlay/Overlay";
import { useState } from "react";
import { Input } from "antd";
function CreateReviewModal({ active, closeModal }) {
  const [text, setText] = useState("");
  return (
    <form className="create-review">
      <Overlay onClick={closeModal} />
      <h3>Create Review</h3>
      <Input.TextArea value={text} onChange={(e) => console.log(e)} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateReviewModal;
