import React, { useState } from "react";
import { Link } from "react-router-dom";

import web from "./img/1.svg";
import cl2 from "./img/2.svg";
import dev2 from "./img/dev2.svg";
import dev3 from "./img/dev3.svg";
import dev4 from "./img/dev4.svg";
import dev6 from "./img/dev6.svg";
import icon1 from "./img/dev1.svg";
import icon2 from "./img/dev2.svg";
import icon3 from "./img/dev3.svg";
import icon4 from "./img/dev4.svg";
import icon5 from "./img/dev5.svg";
import icon6 from "./img/dev6.svg";
import "./slider.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
export default function Cloud() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <section className="web mt-5">
        <div className="bg-primary fixed-top">
          <Navbar />
        </div>
        <div className="container m-2 rounded">
          <div className="row content">
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1 className="mt-5">
                Internet of Things (IoT) Development Company
              </h1>

              <p className="" style={{ textDecorationColor: "black" }}>
                <ul className="" style={{ textDecorationColor: "blue" }}>
                  <li>Accelerating innovation for connected enterprises</li>
                  <li>
                    Lead the competition with flexible IoT development services
                  </li>
                  <li>
                    Leverage the Internet of Things to automate and streamline
                    workflows
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
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={web}
                style={{ width: "100%" }}
                className="mt-5"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="dynamic mt-5" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h1 className="text-center">
            Choose Us For Dynamic And Expandable Web Apps
          </h1>
          <p className="text-center">
            OutCode services have four key steps i.e. Develop & Build, Test,
            Deploy, Operate & Monitor. As experienced DevOps solutions and
            services providers we have customized DevOps solutions for you!
          </p>
          <div className="row">
            <div className="col-md rounded col-hover m-2 text-center">
              <img
                src={icon1}
                className="m-2 mt-3"
                style={{ width: "20%", height: "auto" }}
                alt="Icon"
              />
              <h4 className="mt-2">Full Cycle IoT Development</h4>
              <p>
                Streamline your idea from initiation to completion with
                OutCode’s IoT software development services digitizing your
                business. Solving your problems around connected vehicles, smart
                facilities, personal devices, industrial services and much more.
              </p>
            </div>
            <div className="col-md rounded col-hover m-2 text-center">
              <img
                src={icon2}
                className="m-2 mt-3"
                style={{ width: "20%", height: "auto" }}
                alt="Icon"
              />
              <h4 className="mt-2">IoT App Development</h4>
              <p>
                Manage your device data with native IoT mobile and web
                applications powered by a seamless user experience. OutCode has
                extensive experience in providing enterprise-class IoT
                solutions, developing web and mobile apps with secure device
                connectivity.
              </p>
            </div>
            <div className="col-md rounded col-hover m-2 text-center">
              <img
                src={icon3}
                className="m-2 mt-3"
                style={{ width: "20%", height: "auto" }}
                alt="Icon"
              />
              <h4 className="mt-2">IoT Software Enhancement</h4>
              <p>
                Achieve new business objectives, tune your existing platforms or
                build custom connected software with our IoT engineering
                services. Efficiently manage heterogeneous devices by optimized
                custom IoT systems.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md rounded col-hover m-2 text-center">
              <img
                src={icon4}
                className="m-2 mt-3"
                style={{ width: "20%", height: "auto" }}
                alt="Icon"
              />
              <h4 className="mt-2">Industrial Automation</h4>
              <p>
                Maximize the operational efficiency of your current systems by
                integrating industrial Internet of Things (IoT). OutCode’s IoT
                engineers have expertise in implementing IoT for industrial
                automation. Move to AI-powered automation today.
              </p>
            </div>
            <div className="col-md rounded col-hover m-2 text-center">
              <img
                src={icon5}
                className="m-2 mt-3"
                style={{ width: "20%", height: "auto" }}
                alt="Icon"
              />
              <h4 className="mt-2">Smart Home Automation</h4>
              <p>
                Unlock the full potential of IoT and AI technology by leveraging
                data analytics to control your home systems intelligently. We
                build intelligent, reliable and compatible solutions for your
                home and personality using AI, Machine Learning and IoT.
              </p>
            </div>
            <div className="col-md rounded col-hover m-2 text-center">
              <img
                src={icon6}
                className="m-2 mt-3"
                style={{ width: "20%", height: "auto" }}
                alt="Icon"
              />
              <h4 className="mt-2">Industrial IoT Consulting</h4>
              <p>
                Effectively capitalize on IoT solutions by turning data into
                actionable insights and building new revenue streams with
                OutCode’s vetted IoT experts. Seek upright IoT consultation into
                trustworthy market insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container m-2 mt-5 rounded text-center">
        <h1>Hire IoT Application Developers</h1>
        <h4>Choose How YOU WANT to Collaborate</h4>
        <div className="row mt-5">
          <div className="col-md rounded mb-4">
            <div
              className="card"
              style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <img
                src={dev6}
                className="card-img-top mx-auto mt-4"
                style={{ width: "80px", height: "60px" }}
                alt="Web App Development"
              />
              <div className="card-body">
                <p className="card-text">Project Based</p>
              </div>
            </div>
          </div>

          <div className="col-md rounded mb-4">
            <div
              className="card"
              style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <img
                src={dev2}
                className="card-img-top mx-auto mt-4"
                style={{ width: "80px", height: "60px" }}
                alt="Mobile App Development"
              />
              <div className="card-body">
                <p className="card-text">Hire Developers Hourly Rate</p>
              </div>
            </div>
          </div>

          <div className="col-md rounded mb-4">
            <div
              className="card"
              style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <img
                src={dev3}
                className="card-img-top mx-auto mt-4"
                style={{ width: "80px", height: "60px" }}
                alt="Devops Development"
              />
              <div className="card-body">
                <p className="card-text">Dedicated Team of Developers</p>
              </div>
            </div>
          </div>

          <div className="col-md rounded mb-4">
            <div
              className="card"
              style={{ boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)" }}
            >
              <img
                src={dev4}
                className="card-img-top mx-auto mt-4"
                style={{ width: "80px", height: "60px" }}
                alt="Cloud Services"
              />
              <div className="card-body">
                <p className="card-text">I am not sure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="web mt-5 mb-5 "
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <div className="container m-2 rounded">
          <h1 className="mt-5 text-center">Our IoT App Development Strategy</h1>
          <div className="row content">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={cl2}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>

            <div
              className="col-lg-6 mt-5 "
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: "60px 60px 140px 140px",
              }}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <p className="mt-5">
                We help you optimize all the steps of the IoT application
                development process to make sure that your time and investment
                is utilized efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
