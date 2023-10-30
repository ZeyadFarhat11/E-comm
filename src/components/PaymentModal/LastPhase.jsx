import successImg from "../../assets/img/Success-Icon.svg";

export default function LastPhase({ closeModal }) {
  return (
    <div className="last-phase">
      <img src={successImg} alt="success" />
      <h3>Success</h3>
      <button type="submit" onClick={closeModal}>
        Complete
      </button>
    </div>
  );
}
