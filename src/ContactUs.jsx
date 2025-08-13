import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import "./ContactUs/ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <h1 className="contact-title">CONTACT <span>US</span></h1>
          <p className="contact-description">
            We’d love to hear from you. Whether you’re interested in joining
            the movement, becoming a partner, or just want to connect –
            Project Black is here to listen, build, and grow with you.
          </p>

          <h3 className="contact-heading">The Project Black Network</h3>
          <div className="contact-info">
            <p>
              <span className="icon">📍</span> The Project Black Network<br />
              6804 Highway 6 S<br />
              Ste E Unit #521<br />
              Houston, TX 77083
            </p>
            <p>
              <span className="icon">📧</span> Info@Goprojectblack.Com
            </p>
            <p>
              <span className="icon">📞</span> Lorem Ipsum
            </p>
          </div>

          {/* <div className="contact-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div> */}
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <h2>Let’s Talk Here</h2>
          <p>
            Let us know how we can support you. Fill out the form and a member
            of our team will follow up shortly.
          </p>
          <form>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Email address" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Lock It In</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
