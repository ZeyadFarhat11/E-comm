import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import "./contact.scss";
import img from "../../assets/img/contact.webp";
export default function Contact() {
  return (
    <main id="contact">
      {/* <Breadcrumb currentPage="Contact Us" /> */}
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
          <form>
            <div className="control">
              <label htmlFor="name">Fullname</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="control">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="examble@gmail.com" />
            </div>
            <div className="control">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                id="message"
                placeholder="Type your message"
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
