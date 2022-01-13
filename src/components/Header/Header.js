import React from "react";
import { Link } from "react-router-dom";
import user_icon from "../../images/user_icon.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        {/* <img src={user_icon} alt="user" /> */}
        <i className="fas fa-user-circle"></i>
      </div>
    </div>
  );
};

export default Header;
