import "./contact.scss";
import img from "../../assets/img/contact.webp";
import { Button, message } from "antd";
import { useState } from "react";
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1000));
    // TODO: Send message request
    setLoading(false);
    message.open({
      type: "success",
      content: "Message has been sent",
    });
  };

  return (
    <main id="contact">
      <div className="contact-container container">
        <div className="wrapper">
          <div className="text-wrapper">
            <div className="image">
              <img src={img} alt="banner" />
            </div>
            <div className="text">
              <h2>Get in touch</h2>
              <p>contact@e-comm.ng</p>
              <p>+234 4556 6665 34</p>
              <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="control">
              <label htmlFor="name">Fullname</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={fullName}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="control">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="examble@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="control">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                placeholder="Type your message"
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
              />
            </div>
            <Button htmlType="submit" type="primary" loading={loading}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
