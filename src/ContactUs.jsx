import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import "./ContactUs/ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  

  return (
    <>
      <Header />
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <h1 className="contact-title">CONTACT US</h1>
          <p className="contact-description">
            We'd love to hear from you. Whether you're interested in joining
            the movement, becoming a partner, or just want to connect –
            Project Black is here to listen, build, and grow with you.
          </p>

          <h3 className="contact-heading">The Project Black Network</h3>
          <div className="contact-info">
            <p>
              <span className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              The Project Black Network
              6804 Highway 6 S
              Ste E Unit #521
              Houston, TX 77083
            </p>
            <p>
              <span className="icon">
                <i className="fas fa-envelope"></i>
              </span>
              Info@Goprojectblack.Com
            </p>
            <p>
              {/* <span className="icon">
                <i className="fas fa-phone"></i>
              </span> */}
              {/* Lorem Ipsum */}
            </p>
          </div>

          <div className="contact-socials">
            <a href="https://facebook.com/groups/1552740565408393/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/officialprojectblack?igsh=YTNtMjl4NW9hbmcz"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-right">
          <h1>Let's Talk Here</h1>
          <p>
            Let us know how we can support you. Fill out the form and a member
            of our team will follow up shortly.
          </p>
          {submitStatus === "success" && (
            <div className="form-success">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="form-error">
              There was an error submitting your message. Please try again.
            </div>
          )}
         <form 
  action="https://formsubmit.co/info@goprojectblack.com" 
  method="POST"
  onSubmit={(e) => {
    e.preventDefault();
    setIsSubmitting(true);
    e.target.submit(); // Native form submission
  }}
>
  {/* Hidden fields for configuration */}
  <input type="hidden" name="_subject" value="New Contact Submission - Project Black" />
  <input type="hidden" name="_template" value="basic" />
  <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
  
  {/* Your existing fields */}
  <input
    type="text"
    name="name"
    placeholder="Your name"
    value={formData.name}
    onChange={handleChange}
    required
  />
  <input
    type="email"
    name="email"
    placeholder="Email address"
    value={formData.email}
    onChange={handleChange}
    required
  />
  <textarea
    name="message"  // Changed from "msg" to match standard format
    placeholder="Message"
    value={formData.msg}
    onChange={(e) => handleChange({...e, target: {...e.target, name: "message"}})}
    required
  />
  
  <button type="submit" disabled={isSubmitting}>
    {isSubmitting ? "Sending..." : "Lock It In"}
  </button>
</form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;