import React from "react";
import Header from "./Header/Header"; 
import Footer from "./Footer/footer"; 
import ".//PrivacyPolicy/PrivacyPolicy.css";
const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="privacy-container">
        <h1 autoFocus className="privacy-title">PRIVACY POLICY</h1>
        <div className="privacy-content">
          <p>

          <b>  1. Introduction</b><br/>
Welcome to Project Black. Your privacy is important to us. This Privacy Policy explains how we
collect, use, and protect your personal information when you interact with our website, services,
and products.<br/> <br />
<b>2. Information We Collect</b> <br/> 
We collect the following types of information:<br/> 
● Personal Information: Name, email address, phone number, business details, and
payment information when you register for services.<br /> 
● Usage Data: IP address, device type, browser type, and interactions with our website. <br />
● Cookies and Tracking Technologies: To enhance your experience and analyze
website traffic.<br /> <br />
<b>3. How We Use Your Information</b>
We use the collected information for:<br /> 
● Processing registrations and payments.<br /> 
● Providing and improving our services.<br />
● Sending important updates and promotional materials (you may opt-out anytime).<br />
● Ensuring website security and fraud prevention.<br /><br />
<b>4. Sharing Your Information</b><br />
We do not sell your personal information. However, we may share it with:<br />
● Service Providers: Payment processors (e.g., Stripe), marketing tools, and analytics
platforms.<br />
● Legal Compliance: If required by law or to protect our legal rights.<br />
● Business Transfers: If we undergo a merger, acquisition, or asset sale.<br /><br />
<b>5. Data Security</b><br />
We implement reasonable security measures to protect your data, including encryption and
secure servers. However, no method of transmission over the internet is 100% secure.<br /><br />
<b>6. Your Rights & Choices</b><br />
● You may request access, correction, or deletion of your personal information.<br />
● You can opt out of marketing communications at any time.<br />
● You may disable cookies in your browser settings.<br /><br />
<b>7. Changes to This Policy</b><br /> 
We may update this Privacy Policy periodically. We will notify you of significant changes by
posting an updated version on our website.<br /><br />
<b>8. Contact Us</b><br /> 
For questions or concerns regarding this policy, contact us at: Email:<br />
billing@goprojectblack.com<br />
By using our website, you consent to the terms of this Privacy Policy<br /><br />
           </p>
                 </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
