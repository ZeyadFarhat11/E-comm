import { useState } from "react";
import "./payment-modal.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import FirstPhase from "./FirstPhase";

export default function PaymentModal({ active, closeModal }) {
  const [phase, setPhase] = useState(1);

  const returnPhase = () => {};

  if (!active) return;

  return (
    <div className="payment-modal">
      <header>
        <button onClick={returnPhase} disabled={phase !== 2}>
          <FaArrowLeft />
        </button>
        <button onClick={closeModal}>
          <AiOutlineClose />
        </button>
      </header>
      <h2>Make Payment</h2>
      <div className="stepper" data-phase={phase}>
        <span data-active={true}>1</span>
        <span data-active={phase >= 2}>2</span>
        <span data-active={phase === 3}>3</span>
      </div>
      {phase === 1 ? <FirstPhase /> : null}
    </div>
  );
}
