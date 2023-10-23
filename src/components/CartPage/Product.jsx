import {
  AiOutlineCloseCircle,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import Image from "rc-image";
import "rc-image/assets/index.css";
export default function Product({ id, title, quantity, price, img }) {
  const deleteProduct = () => {
    // TODO: DELETE PRODUCT
  };
  return (
    <tr className="product">
      <td className="info">
        <button className="delete" onClick={deleteProduct}>
          <AiOutlineCloseCircle />
        </button>
        <Image src={img} alt={title} preview={{ toolbarRender: () => null }} />
        <h4>{title}</h4>
      </td>
      <td>${(price * quantity).toFixed(2)}</td>
      <td>
        <div className="qty-control">
          <button className="decrease">
            <AiOutlineMinus />
          </button>
          <span className="qty">{quantity}</span>
          <button className="increase">
            <AiOutlinePlus />
          </button>
        </div>
      </td>
      <td>${price.toFixed(2)}</td>
    </tr>
  );
}
