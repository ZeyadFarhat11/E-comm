import { Link } from "react-router-dom";
import "./breadcrumb.scss";
export default function Breadcrumb({ children }) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link>
      <span className="seperator">/</span>
      <span className="current">{children}</span>
    </div>
  );
}
