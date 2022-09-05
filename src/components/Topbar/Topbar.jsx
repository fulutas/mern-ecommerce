import React from "react";
import "./topbar.css";

import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";
import CompanyDropDown from "../CompanyDropdown/CompanyDropDown";

const Topbar = () => {
  const companyData = [
    {
      id: 1,
      name: "Acme Inc.",
      isDisabled: 0,
    },
    {
      id: 2,
      name: "Tenz Corp",
      isDisabled: 0,
    },
  ];

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <div className="logoContainer">
            <div className="logo"></div>
            <Link to="/" className="link">
              <div className="logo-text">BrandName</div>
            </Link>
          </div>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div>
            <CompanyDropDown companyData={companyData} />
          </div>
          <img
            src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&h=191.25&fit=crop&w=213.75&dpr=1"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
