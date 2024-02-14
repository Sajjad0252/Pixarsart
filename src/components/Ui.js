import web from "./clod/Ui.svg";
import ui2 from "./clod/ui2.svg";
import dev2 from "./dev2.svg";
import dev3 from "./dev3.svg";
import dev4 from "./dev4.svg";
import dev6 from "./dev6.svg";
import icon1 from "./dev1.svg";
import icon2 from "./dev2.svg";
import icon3 from "./dev3.svg";
import icon4 from "./dev4.svg";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Ui() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <section className="web">
        <div className="container m-2 rounded">
          <div className="row content">
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1>Top UI/UX Design Services</h1>
              <p className="" style={{ textDecorationColor: "black" }}>
                <ul className="" style={{ textDecorationColor: "blue" }}>
                  <li>
                    Increase your product adoption by creating a seamless
                    user-friendly design.
                  </li>
                  <li>
                    Invest in user interface design for higher conversion rates
                    and increased revenue.
                  </li>
                  <li>
                    Boost customer retention by developing fit-for-purpose UI/UX
                    design.
                  </li>
                  <li>
                    Utilize the right IoT technology stack to build data-rich
                    software solutions
                  </li>
                </ul>
              </p>
              <button
                className="btn btn-lg bg-primary text-white rounded-pill m-2 "
                type="button"
                onClick={handleButtonClick}
              >
                <nav>
                  <Link
                    to="/Contact"
                    state={{}}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginBottom: "5px",
                    }}
                  >
                    Discuss Your Project
                  </Link>
                </nav>
              </button>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={web}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="dynamic mt-5" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h1 className="text-center">UI/UX Design Services At A Glance</h1>
          <p className="text-center">
            OutCode’s exclusive UI/UX designing services are the ultimate
            boosters that turn concepts into functional products. Just share
            your idea with us and we have got you covered.
          </p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg rounded col-hover m-2">
              <img
                className="m-2 mt-3"
                src={icon1}
                style={{ width: "20%", height: "20%" }}
              />
              <h4 className="mt-2">Mobile App UI/UX Design</h4>
              <p>
                Build a flawless user interface for your mobile users to provide
                a seamless experience on their phone screens. OutCode designs
                mobile apps according to iOS and Android conventions.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg rounded col-hover m-2">
              <img
                className="m-2 mt-3"
                src={icon2}
                style={{ width: "20%", height: "20%" }}
              />
              <h4 className="mt-2">Web UI/UX Design</h4>
              <p>
                Simplify your technically complex products in cahoots with
                OutCode’s UI/UX development services to grow web traffic through
                modern design aesthetics and dynamic features.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg rounded col-hover m-2">
              <img
                className="m-2 mt-3"
                src={icon3}
                style={{ width: "20%", height: "20%" }}
              />
              <h4 className="mt-2">UI/UX Brand Identity</h4>
              <p>
                Drive brand growth with thoroughly researched visual designs for
                your brand. CTA, icons, color scheme, or typography - OutCode is
                an ideal umbrella term for them.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg rounded col-hover m-2">
              <img
                className="m-2 mt-3"
                src={icon4}
                style={{ width: "20%", height: "20%" }}
              />
              <h4 className="mt-2">HCI Design</h4>
              <p>
                Maximize operational efficiency and improve productivity through
                OutCode’s research, interviews and persona development to
                deliver user-friendly HCI designs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="container1 m-2 mt-5 rounded text-center"
        style={{ maxWidth: "100%" }}
      >
        <h1>Hire UI/UX Designers</h1>
        <p>
          Our flexible engagement models fulfill all your design and development
          needs. You can hire as per your need.
        </p>
        <div className="row mt-5">
          <div
            className="col-12 col-md-6 col-lg rounded mb-4"
            style={{
              width: "235px",
              height: "180px",
              backgroundColor: "white",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              className="mt-5"
              src={dev6}
              style={{ width: "80px", height: "60px" }}
              alt="Web App Development"
            />
            <p>Project Based</p>
          </div>
          <div
            className="col-12 col-md-6 col-lg rounded mb-4"
            style={{
              width: "235px",
              height: "180px",
              backgroundColor: "white",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              className="mt-5"
              src={dev2}
              style={{ width: "80px", height: "60px", marginTop: "20%" }}
              alt="Mobile App Development"
            />
            <p>Hire Developers Hourly Rate</p>
          </div>
          <div
            className="col-12 col-md-6 col-lg rounded mb-4"
            style={{
              width: "235px",
              height: "180px",
              backgroundColor: "white",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              className="mt-5"
              src={dev3}
              style={{ width: "80px", height: "60px", marginTop: "20%" }}
              alt="Devops Development"
            />
            <p>Dedicated Team of Developers</p>
          </div>
          <div
            className="col-12 col-md-6 col-lg rounded mb-4"
            style={{
              width: "235px",
              height: "180px",
              backgroundColor: "white",
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <img
              className="mt-5"
              src={dev4}
              style={{ width: "80px", height: "60px", marginTop: "20%" }}
              alt="Cloud Services"
            />
            <p>I am not sure</p>
          </div>
        </div>
      </div>

      <section
        className="dynamic mt-5 text-center"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <div className="container">
          <h1>Kickstart Your Project with OutCode’s Reliable UI/UX Process</h1>
          <p>
            Begin your project journey with InvoZone’s trusted UI/UX process. We
            follow a straightforward procedure to ensure efficient progress.
          </p>
          <img src={ui2} alt="UI/UX Process" />
        </div>
      </section>
    </>
  );
}
