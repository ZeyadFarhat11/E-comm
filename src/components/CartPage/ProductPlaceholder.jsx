import { Skeleton } from "antd";

export default function ProductPlaceholder() {
  return (
    <tr className="product placeholder">
      <td className="info">
        <Skeleton.Button
          style={{ minWidth: "auto", width: "20px", height: "20px" }}
          active
        />
        <Skeleton.Input
          style={{ width: "120px", height: "75px", minWidth: "auto" }}
          active
        />
        <Skeleton.Input style={{ height: "20px" }} active />
      </td>
      <td>
        <Skeleton.Input
          style={{ height: "20px", width: "60px", minWidth: "auto" }}
          active
        />
      </td>
      <td>
        <Skeleton.Input
          style={{ height: "45px", width: "109px", minWidth: "auto" }}
          active
        />
      </td>
      <td>
        <Skeleton.Input
          style={{ height: "20px", width: "60px", minWidth: "auto" }}
          active
        />
      </td>
    </tr>
  );
}
