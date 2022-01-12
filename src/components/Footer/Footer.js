import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>Movie App</div>
      <div>
        @2022, website created by
        <a
          href="mailto:girishkhemani6977@gmail.com"
          style={{ marginLeft: "5px" }}
        >
          Girish Khemani
        </a>
      </div>
    </div>
  );
};

export default Footer;
