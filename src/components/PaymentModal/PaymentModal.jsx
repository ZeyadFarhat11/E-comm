import { useState } from "react";
import "./payment-modal.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import FirstPhase from "./FirstPhase";
import SecondPhase from "./SecondPhase";
import LastPhase from "./LastPhase";

export default function PaymentModal({ active, closeModal }) {
  const [phase, setPhase] = useState(1);
  const [paymentData, setPaymentData] = useState({});

  const returnPhase = () => setPhase((phase) => phase - 1);
  const nextPhase = () => setPhase((phase) => phase + 1);

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
      {phase === 1 ? (
        <FirstPhase nextPhase={nextPhase} setPaymentData={setPaymentData} />
      ) : phase === 2 ? (
        <SecondPhase nextPhase={nextPhase} />
      ) : (
        <LastPhase closeModal={closeModal} />
      )}
    </div>
  );
}
