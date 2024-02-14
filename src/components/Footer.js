import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className="bg-primary py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4>Contact Us</h4>
              <p>sajjadpervaiz50@gmail.com</p>
              <p>+923026377650</p>
            </div>
            <div className="col-md-4">
              <h4>Quick Links</h4>
              <ul className="list-unstyled ">
                <li>
                  <Link to="/" className="text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/About" className="text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-black">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/Web" className="text-black">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link to="/Mobile" className="text-black">
                    Mobile Development
                  </Link>
                </li>
                <li>
                  <Link to="/Devops" className="text-black">
                    Devops
                  </Link>
                </li>
                <li>
                  <Link to="/Ui" className="text-black">
                    UI/UX
                  </Link>
                </li>
                <li>
                  <Link to="/Cloud" className="text-black">
                    Cloud Services
                  </Link>
                </li>
                <li>
                  <Link to="/Software" className="text-black">
                    Software Development
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <p className="text-black">
                &copy; 2024 OutCode All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
