import React from "react";
import "./company-dropdown.css";

const CompanyDropDown = ({ companyData }) => {
  return (
    <div className="sec-center">
      <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
      <label className="for-dropdown" htmlFor="dropdown">
        {companyData[0].name} <i className="uil fa-solid fa-chevron-down"></i>
      </label>

      {/* links */}
      <div className="section-dropdown">
        <div className="section-dropdown-title">Switch Company</div>
        {companyData.map((c) => (
          <a href="#" key={c.id}>
            <span className="companyChar">
              <span className="nameFirst">{c.name[0]}</span>
            </span>
            <span className="companyTitle">{c.name}</span>
          </a>
        ))}
        {/* <input
          className="dropdown-sub"
          type="checkbox"
          id="dropdown-sub"
          name="dropdown-sub"
        /> */}
        {/* <label className="for-dropdown-sub" for="dropdown-sub">
          Dropdown Sub <i className="uil uil-plus"></i>
        </label>
        <div className="section-dropdown-sub">
          <a href="#">
            Dropdown Link <i className="uil uil-arrow-right"></i>
          </a>
          <a href="#">
            Dropdown Link <i className="uil uil-arrow-right"></i>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default CompanyDropDown;
