import "./overlay.scss";

export default function Overlay({ active, onClick = () => null }) {
  return <div id="overlay" data-active={active} onClick={onClick}></div>;
}
