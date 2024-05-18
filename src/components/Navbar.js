import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./img/logo-01.png";
import Dropdown from "react-bootstrap/Dropdown";
import "./my.css";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {};

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  const [showDevelopersDropdown, setShowDevelopersDropdown] = useState(false);

  const handleDevelopersDropdownClick = () => {
    setShowDevelopersDropdown(!showDevelopersDropdown);
  };

  const handleDevelopersMouseEnter = () => {
    setShowDevelopersDropdown(true);
  };

  const handleDevelopersMouseLeave = () => {
    setShowDevelopersDropdown(false);
  };
  return (
    <div className="fluid text-center ">
      <div className="row p-2" style={{ fontWeight: "bold" }}>
        <div className="col-12 col-sm-6 col-md-2">
          <div className="m-2" style={{ fontWeight: "bold" }}>
            <Link className="navbar-brand text-white" to="/">
              <img src={logo} style={{ width: "100px", height: "40px" }} />
            </Link>
          </div>
        </div>

        <div className="col-12 col-md-10">
          <div className="row justify-content-end">
            {/* Use justify-content-end to push items to the right */}

            <div className="col-6 col-sm-4 col-md-auto mt-3">
              <nav>
                <Link className="text-white" to="/">
                  Home
                </Link>
              </nav>
            </div>
            <div className="col-6 col-sm-4 col-md-auto mt-2">
              <Dropdown
                show={showDevelopersDropdown}
                onMouseEnter={handleDevelopersMouseEnter}
                onMouseLeave={handleDevelopersMouseLeave}
                onSelect={handleSelect}
              >
                {/* Toggle button for Developers dropdown */}
                <Dropdown.Toggle
                  variant="success"
                  style={{
                    border: "none",
                    background: "none",
                    fontWeight: "bold",
                    marginTop: "2px",
                  }}
                >
                  Hire Developers
                </Dropdown.Toggle>

                {/* Dropdown menu for Developers */}
                {showDevelopersDropdown && (
                  <Dropdown.Menu
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "400px",
                      margin: "15px",
                    }}
                  >
                    <Dropdown.Item href="/Contact" style={{ width: "50%" }}>
                      Web Developer
                    </Dropdown.Item>
                    <Dropdown.Item href="/Contact" style={{ width: "50%" }}>
                      Mobile Developer
                    </Dropdown.Item>
                    <Dropdown.Item href="/Contact" style={{ width: "50%" }}>
                      UI UX Developer
                    </Dropdown.Item>
                    <Dropdown.Item href="/Contact" style={{ width: "50%" }}>
                      Cloud Developer
                    </Dropdown.Item>
                    <Dropdown.Item href="/Contact" style={{ width: "50%" }}>
                      Devops Developer
                    </Dropdown.Item>
                    <Dropdown.Item href="/Contact" style={{ width: "50%" }}>
                      Software Developer
                    </Dropdown.Item>
                    {/* Add more items as needed */}
                  </Dropdown.Menu>
                )}
              </Dropdown>
            </div>
            <div className="col-6 col-sm-4 col-md-auto mt-3">
              <nav>
                <Link className="text-white" to="/About">
                  About
                </Link>
              </nav>
            </div>
            <div
              className="col-6 col-sm-4 col-md-auto mt-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Dropdown
                show={showDropdown}
                onSelect={handleSelect}
                onToggle={handleDropdownClick}
              >
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{
                    border: "none",
                    background: "none",
                    fontWeight: "bold",
                    marginTop: "2px",
                    width: "100%",
                  }}
                >
                  Services
                </Dropdown.Toggle>

                {showDropdown && (
                  <Dropdown.Menu
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      width: "400px",
                      margin: "15px",
                    }}
                  >
                    <Dropdown.Item href="/Web" style={{ width: "50%" }}>
                      Web Development
                    </Dropdown.Item>
                    <Dropdown.Item href="/Mobile" style={{ width: "50%" }}>
                      Mobile Development
                    </Dropdown.Item>
                    <Dropdown.Item href="Ui" style={{ width: "50%" }}>
                      UI UX Designer
                    </Dropdown.Item>
                    <Dropdown.Item href="/Cloud" style={{ width: "50%" }}>
                      Cloud Services
                    </Dropdown.Item>
                    <Dropdown.Item href="/Devops" style={{ width: "50%" }}>
                      Devops
                    </Dropdown.Item>
                    <Dropdown.Item href="/Software" style={{ width: "50%" }}>
                      Software Development
                    </Dropdown.Item>
                  </Dropdown.Menu>
                )}
              </Dropdown>
            </div>

            <div className="col-6 col-sm-4 col-md-auto mt-3">
              <nav>
                <Link className="text-white" to="/Blog">
                  Blog
                </Link>
              </nav>
            </div>

            <div className="col-6 col-sm-4 col-md-auto mt-3">
              <nav>
                <Link className="text-white" to="/Portfolio">
                  Portfolio
                </Link>
              </nav>
            </div>
            <div className="col-6 col-sm-4 col-md-auto mt-3">
              <nav>
                <Link className="text-white" to="/Contact">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
