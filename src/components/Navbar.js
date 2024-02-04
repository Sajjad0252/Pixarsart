import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./log.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import "./my.css";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    // Comment out the line below to close the dropdown on mouse leave
    // setShowDropdown(false);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    // Additional logic if needed with the selected value
  };

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div
      className="container-fluid text-center text-black"
      style={{ backgroundColor: "#3498db" }}
    >
      <div className="row p-2" style={{ fontWeight: "bold" }}>
        <div className="col-12 col-sm-6 col-md-2">
          <div className="m-2" style={{ fontWeight: "bold" }}>
            <Link className="navbar-brand text-white" to="/">
              OutCode
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
                      width: "400px", // Set the desired width
                      margin: "15px",
                    }}
                  >
                    <Dropdown.Item href="/Web" style={{ width: "50%" }}>
                      Web Development
                    </Dropdown.Item>
                    <Dropdown.Item href="/Mobile" style={{ width: "50%" }}>
                      Mobile Development
                    </Dropdown.Item>
                    <Dropdown.Item href="/" style={{ width: "50%" }}>
                      UI UX Designer
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-1" style={{ width: "50%" }}>
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
