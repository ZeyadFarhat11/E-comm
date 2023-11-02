import { Link } from "react-router-dom";
import "./breadcrumb.scss";
export default function Breadcrumb({ children, injected }) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      <span className="seperator">/</span>
      {injected ? children : <span className="current">{children}</span>}
    </div>
  );
}
