import React from "react";
import "./company-dropdown.css";

const CompanyDropDown = ({ companyData }) => {
  return (
    <div class="sec-center">
      <input class="dropdown" type="checkbox" id="dropdown" name="dropdown" />
      <label class="for-dropdown" for="dropdown">
        {companyData[0].name} <i class="uil fa-solid fa-chevron-down"></i>
      </label>

      {/* links */}
      <div class="section-dropdown">
        <div className="section-dropdown-title">Switch Company</div>
        {companyData.map((c) => (
          <a href="#">
            <span className="companyChar">
              <span className="nameFirst">{c.name[0]}</span>
            </span>
            <span className="companyTitle">{c.name}</span>
          </a>
        ))}
        {/* <input
          class="dropdown-sub"
          type="checkbox"
          id="dropdown-sub"
          name="dropdown-sub"
        /> */}
        {/* <label class="for-dropdown-sub" for="dropdown-sub">
          Dropdown Sub <i class="uil uil-plus"></i>
        </label>
        <div class="section-dropdown-sub">
          <a href="#">
            Dropdown Link <i class="uil uil-arrow-right"></i>
          </a>
          <a href="#">
            Dropdown Link <i class="uil uil-arrow-right"></i>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default CompanyDropDown;
