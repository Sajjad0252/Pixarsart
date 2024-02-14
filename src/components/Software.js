import React, { useState } from "react";
import { Link } from "react-router-dom";
import ai from "./ai.jpg";
import map from "./map.svg";
import web from "./soft/web.jpeg";
import mobile from "./soft/mobile.jpeg";
import devops from "./soft/devops.jpeg";
import dev1 from "./dev1.svg";
import dev2 from "./dev2.svg";
import dev3 from "./dev3.svg";
import dev4 from "./dev4.svg";
import dev5 from "./dev5.svg";
import dev6 from "./dev6.svg";

import cloud from "./soft/cloud.png";
import soft from "./softpage.svg";
import soft1 from "./softpage1.svg";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Software() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <section
        className="web"
        style={{ backgroundColor: "#f0f0f0", backgroundImage: { ai } }}
      >
        <div className="container m-2 rounded">
          <div className="row content">
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1>Custom Software Development Services</h1>
              <p>
                Designing, building, deploying, and maintaining custom software
                products tailored to the specific needs of your business
                Purpose-built custom software solutions to effortlessly support
                your business processes, without the need to continuously make
                alterations. Highly scalable bespoke software that grows as your
                business grows. Eliminate the need for additional investments
                when a custom software solution can integrate and operate within
                your existing infrastructure.
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
                src={soft}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container1 m-2 mt-5 rounded">
        <div className="row">
          <style>
            {`
.rotating-div {
  width: 200px;
  height: 200px;
  perspective: 1000px;
  position: relative;
}

.rotating-div .front,
.rotating-div .back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #fff;
  transition: transform 0.5s; /* Add transition */
}

.rotating-div .front {
  background-color: #007bff;
}

.rotating-div .back {
  background-color: #28a745;
  transform: rotateY(180deg); /* Initially rotate the back side */
}

.rotating-div.flipped {
  transform: rotateY(180deg);
}
.flip-card {
  background-color: transparent;
  width: 200px;
  height: 200px;
  perspective: 1000px; /* Add some perspective for the 3D effect */
  border-radius: 20px; /* Rounded corners */
}

.flip-card-inner {
  width: 120%;
  height: 120%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 20px; /* Rounded corners */
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
.col {
  margin-bottom: 1px;
}
`}
          </style>
          <div className="col-3 rounded">
            <div
              className="flip-card "
              style={{ width: "235px", height: "180px" }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    className="mt-5"
                    src={web}
                    style={{ width: "80px", height: "60px" }}
                  ></img>
                  <p>Web App Development</p>
                </div>
                <div className="flip-card-back">
                  <p className="mt-5 text-center">
                    Delivering comprehensive and high-quality experiences for
                    B2B and B2C companies with custom development, up-to-date
                    UX/UI practices, robust security, and high scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 rounded">
            <div
              className="flip-card"
              style={{ width: "235px", height: "180px" }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    className="mt-5"
                    src={mobile}
                    style={{ width: "80px", height: "60px", marginTop: "20%" }}
                  ></img>
                  <p>Mobile App Development</p>
                </div>
                <div className="flip-card-back">
                  <p className="mt-5 text-center">
                    Creating highly customizable, intuitive, user-friendly, and
                    impactful mobile solutions to attract and retain users.
                    Technology is in a constant state of evolution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 rounded">
            <div
              className="flip-card"
              style={{ width: "235px", height: "180px" }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    className="mt-5"
                    src={devops}
                    style={{ width: "80px", height: "60px", marginTop: "20%" }}
                  ></img>
                  <p>Devops Development</p>
                </div>
                <div className="flip-card-back">
                  <p className="mt-5 text-center">
                    DevOps development services drive consistent improvements in
                    maintaining software quality, bringing scalability and
                    predictability. While reducing the cost of designing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-3 rounded">
            <div
              className="flip-card"
              style={{ width: "235px", height: "180px" }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <img
                    className="mt-5"
                    src={cloud}
                    style={{ width: "80px", height: "60px", marginTop: "20%" }}
                  ></img>
                  <p>Cloud Services</p>
                </div>
                <div className="flip-card-back">
                  <p className="mt-5 text-center">
                    Build your own cloud-based software catering to the unique
                    needs of your business to streamline your digital operations
                    with greater flexibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="web mt-5 mb-5">
        <div className="container m-2 rounded">
          <div className="row content">
            <div
              className="col-lg-6 mt-5 "
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: "60px 60px 140px 140px",
              }}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1 className="mt-5">
                Simplify Your Operations with Bespoke Software Development
              </h1>
              <p>
                We develop innovative custom business software products for
                enterprises to unlock their true power and potential for digital
                transformation. Leverage our agile approach for design and
                development to conquer the market and outgrow your competition.
                <br />
                Whether you need a powerful web solution or advanced custom
                application development services, we are set to transform your
                experience, one step at a time.
              </p>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={soft1}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 rounded text-center ">
        <div className="row">
          <h1>Offering Custom Software Solutions For Enterprises</h1>
          <p>
            Automate your enterprise business operations, improve performance,
            simplify workload and reduce working capital with custom software
            design. Our expert team of custom software developers design and
            develop enterprise solutions to empower your business to succeed and
            transform with the changing market landscape to stay competitive.
          </p>
          <div className="col-4 ">
            <div
              className="flip-card"
              style={{
                width: "280px",
                height: "150px",
                backgroundColor: "white",
              }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front border"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    className="mt-2"
                    style={{ float: "left", marginLeft: "10px" }}
                    src={dev1}
                  ></img>
                  <h4 className="" style={{ float: "left", marginLeft: "3px" }}>
                    Human Resources Managment System
                  </h4>
                </div>
                <div className="flip-card-back">
                  <p className="mt-4">
                    Get end-to-end bespoke software solutions for staffing,
                    recruiting, and consulting to improve functions for your
                    human resource department. Our expert team knows all the ins
                    and outs of developing enterprise-level HR solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div
              className="flip-card"
              style={{
                width: "280px",
                height: "150px",
                backgroundColor: "white",
              }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front border"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    className="mt-2"
                    style={{ float: "left", marginLeft: "10px" }}
                    src={dev2}
                  ></img>
                  <h4
                    className=""
                    style={{ float: "left", marginLeft: "10px" }}
                  >
                    Content Management System
                  </h4>
                </div>
                <div className="flip-card-back">
                  <p className="mt-4">
                    One size doesn’t fit all. Have the ability to update your
                    own website with new content such as videos, product
                    descriptions, imagery, etc. without relying on anyone for
                    their technical expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div
              className="flip-card"
              style={{
                width: "280px",
                height: "150px",
                backgroundColor: "white",
              }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front border"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    className="mt-2"
                    style={{ float: "left", marginLeft: "10px" }}
                    src={dev3}
                  ></img>
                  <h4
                    className="mt-2"
                    style={{ float: "left", marginLeft: "3px" }}
                  >
                    Electronic Health Records
                  </h4>
                </div>
                <div className="flip-card-back">
                  <p className="mt-4">
                    Have one central place to manage and automate all your
                    patients and clinical data such as demographics, progress
                    reports, medications, past medical history, lab results,
                    radiology reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-4 ">
            <div
              className="flip-card"
              style={{
                width: "280px",
                height: "150px",
                backgroundColor: "white",
              }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front border"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    className="mt-2"
                    style={{ float: "left", marginLeft: "10px" }}
                    src={dev4}
                  ></img>
                  <h4 className="" style={{ float: "left", marginLeft: "3px" }}>
                    Customer Relationship Management Software
                  </h4>
                </div>
                <div className="flip-card-back">
                  <p className="mt-4">
                    Offering custom CRM development to fit your company’s unique
                    needs and requirements. Create your own CRM software to
                    manage your sales team’s interaction with potential and
                    existing customers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4 ">
            <div
              className="flip-card"
              style={{
                width: "280px",
                height: "150px",
                backgroundColor: "white",
              }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front border"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    className="mt-2"
                    style={{ float: "left", marginLeft: "10px" }}
                    src={dev5}
                  ></img>
                  <h4 className="" style={{ float: "left", marginLeft: "3px" }}>
                    Supply Chain Managment Software
                  </h4>
                </div>
                <div className="flip-card-back">
                  <p className="mt-4">
                    {" "}
                    Our dedicated team of custom software developers helps you
                    build well-managed supply chain custom software to reduce
                    your company’s operating expenses, and automate processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div
              className="flip-card"
              style={{
                width: "280px",
                height: "150px",
                backgroundColor: "white",
              }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front border"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    className="mt-2"
                    style={{ float: "left", marginLeft: "10px" }}
                    src={dev6}
                  ></img>
                  <h4 className="" style={{ float: "left", marginLeft: "3px" }}>
                    Enterprise Asset Management
                  </h4>
                </div>
                <div className="flip-card-back">
                  <p className="mt-4">
                    Control and manage operational assets and equipment with
                    enterprise asset management software. Seamlessly maintain
                    and control how assets are being throughout their lifecycle,
                    decreasing operational costs while increasing uptime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-4 ">
            <div
              className="flip-card"
              style={{
                width: "280px",
                height: "150px",
                backgroundColor: "white",
              }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front border"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    className="mt-2"
                    style={{ float: "left", marginLeft: "10px" }}
                    src={dev3}
                  ></img>
                  <h4 className="" style={{ float: "left", marginLeft: "3px" }}>
                    Custome Accounting Software
                  </h4>
                </div>
                <div className="flip-card-back">
                  <p className="mt-4">
                    Maintain proper bookkeeping with highly tailored accounting
                    software. Save time and money with efficient management of
                    your finances. With personalized software - generate reports
                    and get real-time insights to streamline business
                    transactions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 ">
            <div
              className="flip-card"
              style={{
                width: "280px",
                height: "150px",
                backgroundColor: "white",
              }}
            >
              <div className="flip-card-inner">
                <div
                  className="flip-card-front border"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    className="mt-2"
                    style={{ float: "left", marginLeft: "10px" }}
                    src={dev1}
                  ></img>
                  <h4 className="" style={{ float: "left", marginLeft: "3px" }}>
                    Bussiness Process Management
                  </h4>
                </div>
                <div className="flip-card-back">
                  <p className="mt-4">
                    From business operation management to manufacturing
                    automation, our team has you covered with our custom
                    software application development services.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div
              className="card border"
              style={{
                width: "335px",
                height: "180px",
                backgroundColor: "white",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
              }}
            >
              <div>
                <h4 style={{ marginBottom: "10px" }}>Ready to get Started</h4>
                <button className="btn btn-primary">Contact Our Expert</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="container mt-5  rounded ">
          <style>
            {`  .flip-card {
    width: 340px; 
    height: 150px;
    transition: width 0.3s ease-in-out;
  }

  .flip-card:hover {
    transform: scale(1.05); 
  }`}
          </style>
          <div className="row">
            <div className="col-4 mt-5">
              <h1>
                Take Full Control with Your Business <br /> Specific Software
              </h1>
            </div>
            <div class="col-4 mt-5">
              <div class="flip-card">
                <div class="flip-card-front bg-white border">
                  <h4 className="mt-2" style={{ marginLeft: "10px" }}>
                    Cost-Efficiency
                  </h4>
                  <p className="" style={{ marginLeft: "10px" }}>
                    Customized software offers smart investment for the long
                    term. No meaningless features, no recurring costs.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-4 mt-5">
              <div class="flip-card">
                <div class="flip-card-front bg-white border">
                  <h4 className="mt-2" style={{ marginLeft: "10px" }}>
                    High Security
                  </h4>
                  <p className="" style={{ marginLeft: "10px" }}>
                    Identify vulnerable points to decrease chances of malicious
                    outsider intrusion with inbuilt security tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div class="col-4 mt-2">
              <div class="flip-card">
                <div class="flip-card-front bg-white border">
                  <h4 className="mt-2" style={{ marginLeft: "10px" }}>
                    Better Performance
                  </h4>
                  <p className="" style={{ marginLeft: "10px" }}>
                    Boost employee productivity and achieve greater efficiency
                    through effective custom-build management tools and
                    responsive features.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-4 mt-2">
              <div class="flip-card">
                <div class="flip-card-front bg-white border">
                  <h4 className="mt-2" style={{ marginLeft: "10px" }}>
                    Brand Spcification
                  </h4>
                  <p className="" style={{ marginLeft: "10px" }}>
                    Enjoy custom-developed software solutions, built with your
                    particular brand needs and future plans in mind.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-4 mt-2">
              <div class="flip-card">
                <div class="flip-card-front bg-white border">
                  <h4 className="mt-2" style={{ marginLeft: "10px" }}>
                    Full Control
                  </h4>
                  <p className="" style={{ marginLeft: "10px" }}>
                    Have full control over all the features, functionalities,
                    updates, licensing, and more. No surprises.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div class="col-4 mt-2">
              <div class="flip-card">
                <div class="flip-card-front bg-white border">
                  <h4 className="mt-2" style={{ marginLeft: "10px" }}>
                    Smart Process Automation
                  </h4>
                  <p className="" style={{ marginLeft: "10px" }}>
                    Automate administrative and repetitive tasks and let your
                    employees focus on more meaningful assignments.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-4 mt-2">
              <div class="flip-card">
                <div class="flip-card-front bg-white border">
                  <h4 className="mt-2" style={{ marginLeft: "10px" }}>
                    Easily Scalable
                  </h4>
                  <p className="" style={{ marginLeft: "10px" }}>
                    Custom software applications are built with all the
                    requirements in mind which makes them quite capable of
                    handling growth - your product grows with your business.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-4 mt-2">
              <div class="flip-card">
                <div class="flip-card-front bg-white border">
                  <h4 className="mt-2" style={{ marginLeft: "10px" }}>
                    Easier Integration
                  </h4>
                  <p className="" style={{ marginLeft: "10px" }}>
                    Seamlessly integrate your custom software with other
                    programs to update your business processes and gain a
                    competitive edge in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mt-5 text-center ">
        <h1>
          Build Highly Intuitive Products With Customized Software Development
          Process
        </h1>
        <img src={map}></img>
      </div>
    </>
  );
}
