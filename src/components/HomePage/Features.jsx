import { FaTruckFast } from "react-icons/fa6";
import { RiRefund2Line } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
const features = [
  { icon: <FaTruckFast />, title: "FREE SHIPPING" },
  { icon: <RiRefund2Line />, title: "100% REFUND" },
  { icon: <MdSupportAgent />, title: "SUPPORT 24/7" },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        {features.map(({ icon, title }) => (
          <div className="feature" key={title}>
            {icon}
            <h3 className="title">{title}</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
