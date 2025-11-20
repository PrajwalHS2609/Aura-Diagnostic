import React from "react";
import "../Footer.css";

const Footer1Sub = () => {
  return (
    <div className="footer1Sub">
      <h3>
        {/* <FaEnvelopeOpenText className="footerSubIcon" /> */}
        Get fresh health tips and alerts in your inbox.
      </h3>
      <p>
        great way to stay updated about latest health tips, alerts and
        enhancements.
      </p>
      <div className="footer1SubContent">
        <form action="">
          {" "}
          <input type="email" placeholder="You Email Address...." />
          <button>Contact Us</button>
        </form>
      </div>
    </div>
  );
};

export default Footer1Sub;
