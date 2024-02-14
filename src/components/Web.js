import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import dev from "./webdev.png";
import d from "./fin.gif";
import d1 from "./travel.gif";
import d2 from "./ecom.gif";
import d3 from "./health.gif";
import d4 from "./education.gif";
import back from "./back.gif";
import front from "./front.gif";
import services from "./services.gif";
import manag from "./manag.gif";
import quality from "./quality.gif";
import snap from "./snap.png";
import "./my.css";
import project from "./project.gif";
import success from "./success.gif";
import engineer from "./engineer.gif";
import exp from "./exp.gif";
import grow from "./grow.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slider.css";

export default function Web() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  const buttonStyle = {
    position: "absolute",
    top: "50%",
    fontSize: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#333",
  };

  const tickStyle = {
    color: "white",
    backgroundColor: "#1260CC",
    borderRadius: "50%",
    padding: "5px",
    marginRight: "13px",
    border: "none",
  };
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount < 200 ? prevCount + 1 : prevCount));
    }, 0.5);

    return () => clearInterval(intervalId);
  }, [count1]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount1((prevCount) => (prevCount < 95 ? prevCount + 1 : prevCount));
    }, 0.5);

    return () => clearInterval(intervalId);
  }, [count1]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount2((prevCount) => (prevCount < 300 ? prevCount + 1 : prevCount));
    }, 0.5);

    return () => clearInterval(intervalId);
  }, [count2]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount3((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
    }, 1);

    return () => clearInterval(intervalId);
  }, [count3]);

  const svgRef = useRef(null);
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      if (svgRef.current) {
        const rotation =
          parseInt(
            svgRef.current.style.transform
              .replace("rotate(", "")
              .replace("deg)", ""),
            10
          ) || 0;
        svgRef.current.style.transform = `rotate(${rotation + 1}deg)`;
      }
    }, 30); // Adjust the interval duration as needed

    return () => clearInterval(rotateInterval);
  }, []);

  return (
    <>
      <section className="web" style={{ backgroundColor: "lightwhite" }}>
        <div className="container m-2 rounded">
          <div className="row content">
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1>Web Application Development Services</h1>
              <p>
                To strengthen your customer retention and enhance your brand's
                reputation, we develop versatile, highly scalable, and
                modernistic web applications that maintain high-quality
                standards, meeting all your business-specific needs. <br />
                <br />
                Thoroughly evaluating your preferences, expectations, and hopes,
                our seasoned community of 500+ pre-vetted developers offers
                admirable web app development services, that are just right for
                your brand.
              </p>
              <button
                className="btn btn-info  text-black rounded-pill  "
                type="button"
              >
                Get In Touch
              </button>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={dev}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="dynamic" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="container">
          <h1
            className="text-center
          "
          >
            Choose Us For Dynamic And Expandable Web Apps
          </h1>
          <p className="text-center">
            Invozone helps you go beyond the ordinary by adopting a competent
            and contemporary approach to web application development services,
            other reasons for choosing us are:
          </p>
          <div className="row">
            <div className="col border m-2">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-alexa m-2"
                viewBox="0 0 16 16"
              >
                <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z" />
              </svg>

              <h4 className="mt-2">Peerless IT Experts</h4>
              <p>
                With years of experience and extensive know-how in the IT
                sector, InvoZone is a web app development company that has made
                a mark of excellence.
              </p>
            </div>
            <div className="col border m-2">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-backpack2 m-2"
                viewBox="0 0 16 16"
              >
                <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14" />
                <path
                  fill-rule="evenodd"
                  d="M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z"
                />
                <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v1.191l1.17.585a1.5 1.5 0 0 1 .83 1.342V13.5a1.5 1.5 0 0 1-1.5 1.5h-1c-.456.607-1.182 1-2 1h-7a2.5 2.5 0 0 1-2-1h-1A1.5 1.5 0 0 1 0 13.5v-2.382a1.5 1.5 0 0 1 .83-1.342L2 9.191V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0M3 13.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8A5 5 0 0 0 3 8zm-1-3.19-.724.362a.5.5 0 0 0-.276.447V13.5a.5.5 0 0 0 .5.5H2zm12 0V14h.5a.5.5 0 0 0 .5-.5v-2.382a.5.5 0 0 0-.276-.447L14 10.309Z" />
              </svg>
              <h4 className="mt-2">UI/UX Designers</h4>
              <p>
                Striking the right balance between functionality and appealing
                designs, our UI/UX team improves the norm with their systematic
                approach.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col border m-2">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-alexa m-2"
                viewBox="0 0 16 16"
              >
                <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z" />
              </svg>

              <h4 className="mt-2">Proactive Project Management</h4>
              <p>
                To address any issues that might irritate the web app
                development process, our cautious Project Managers stay in a
                defensive stance.
              </p>
            </div>
            <div className="col border m-2">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-alexa m-2"
                viewBox="0 0 16 16"
              >
                <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z" />
              </svg>

              <h4 className="mt-2">Quality Above All</h4>
              <p>
                While offering website app development services, our team
                genuinely cares about high quality & makes decisions that are in
                the interest of your brand.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col border m-2">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-alexa m-2"
                viewBox="0 0 16 16"
              >
                <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z" />
              </svg>

              <h4 className="mt-2">Mature Security Systems</h4>
              <p>
                Our comprehensive strategy for maintaining data and security
                systems involves regularly improving our security protocols.
              </p>
            </div>
            <div className="col border m-2">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-alexa m-2"
                viewBox="0 0 16 16"
              >
                <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z" />
              </svg>

              <h4 className="mt-2">Mindful collaboration</h4>
              <p>
                The steady support of our collaborative project managers ensures
                that there’s a constant flow of ideas and communication.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col border m-2">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-alexa m-2"
                viewBox="0 0 16 16"
              >
                <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z" />
              </svg>

              <h4 className="mt-2">On-Time and Within Budget</h4>
              <p>
                Save thousands of dollars with our exclusive web application
                development services that also offer the freedom of free trials.
              </p>
            </div>
            <div className="col border m-2">
              <svg
                ref={svgRef}
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-alexa m-2"
                viewBox="0 0 16 16"
              >
                <path d="M7.996 0A8 8 0 0 0 0 8a8 8 0 0 0 6.93 7.93v-1.613a1.06 1.06 0 0 0-.717-1.008A5.6 5.6 0 0 1 2.4 7.865 5.58 5.58 0 0 1 8.054 2.4a5.6 5.6 0 0 1 5.535 5.81l-.002.046-.012.192-.005.061a5 5 0 0 1-.033.284l-.01.068c-.685 4.516-6.564 7.054-6.596 7.068A7.998 7.998 0 0 0 15.992 8 8 8 0 0 0 7.996.001Z" />
              </svg>

              <h4 className="mt-2">100% Confidentiality</h4>
              <p>
                You can be fully confident in the secrecy of your project as our
                web application development company prioritizes the security of
                data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded bg-primary">
        <div
          className="container text-center text-white "
          style={{ width: "100%" }}
        >
          <div className="p-5">
            <h1>
              Get A 7-Day Free Trial To Witness Our
              <br /> Standards
            </h1>
            <p>
              We make sure that every step is taken with utmost
              <br /> care and perfection
            </p>
            <button
              className="btn btn-lg bg-warning text-white rounded-pill m-2 "
              type="button"
              style={{ height: "100%" }}
              onClick={handleButtonClick}
            >
              <nav>
                <Link
                  to="/Contact"
                  state={{}}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Request a free consultation
                </Link>
              </nav>
            </button>
          </div>
        </div>
      </section>

      <section className="d-flex align-items-center mt-5">
        <div
          className="container text-center position-relative "
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1 className="text-center">
            Web Application Development Services <br />
            For Extensive Industries
          </h1>
          <p>
            OutCode has successfully made its mark for delivering premium
            solutions
            <br />
            and first-rate bespoke web apps. The major industries that we serve
            are:
          </p>
          <div className="row justify-content-center">
            <div className="col-2 col-hover ">
              <img
                className="rounded border"
                src={d}
                style={{ width: "100%" }}
                alt="Animated1"
              ></img>
              <h4 className="mt-2">Fintech</h4>
            </div>
            <div className="col-2">
              {" "}
              <img
                className="rounded border"
                src={d1}
                style={{ width: "100%", height: "50%" }}
                alt="Animated1"
              ></img>
              <h4 className="mt-2">Travel & Tourism</h4>
            </div>
            <div className="col-2">
              {" "}
              <img
                className="rounded border"
                src={d2}
                style={{ width: "100%" }}
                alt="Animated1"
              ></img>
              <h4 className="mt-2">e-Commerce</h4>
            </div>
            <div className="col-2 col-hover">
              {" "}
              <img
                className="rounded border"
                src={d3}
                style={{ width: "100%" }}
                alt="Animated1"
              ></img>
              <h4 className="mt-2">Heathcare</h4>
            </div>
            <div className="col-2 col-hover">
              {" "}
              <img
                className="rounded border"
                src={d4}
                style={{ width: "100%" }}
                alt="Animated1"
              ></img>
              <h4 className="mt-2">Education</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex align-items-center mt-5 ">
        <div
          className="container text-center position-relative"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1 className="text-center">
            Protect Your Project’s Scope With Our Dedicated Services
          </h1>
          <p>
            Avoid scope creep, unnecessary delays, and frequent changes by
            opting for a development team that resonates
            <br />
            with perfection in every step of their job. Here are the services
            our web application development team offers:
          </p>
          <div className="row justify-content-center">
            <div className="col col-hover border ">
              <img
                className=""
                src={back}
                alt="Animated1"
                style={{ width: "110px", height: "110px" }}
              ></img>
              <h4 className="mt-2">Backend Development</h4>
              <p>
                Our backend developers offer a transparent view of database
                structure and third-party integrations, sorting and doing
                everything on time.
              </p>
            </div>
            <div className="col border ">
              {" "}
              <img
                className="rounded"
                src={front}
                alt="Animated1"
                style={{ width: "110px", height: "110px" }}
              ></img>
              <h4 className="mt-2">Frontend Development</h4>
              <p>
                Get front-end web development services to create a visual
                identity for your business that ultimately serves as the real
                face of your brand.
              </p>
            </div>

            <div className="col border ">
              {" "}
              <img
                className="rounded "
                src={services}
                alt="Animated1"
                style={{ width: "110px", height: "110px" }}
              ></img>
              <h4 className="mt-2">Designing Services</h4>
              <p>
                Our UI/UX experts will develop an attractive layout for your web
                app and will be responsible for creating the whole appearance of
                your project.
              </p>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-4 col-hover border ">
              <img
                className="rounded "
                src={manag}
                alt="Animated1"
                style={{ width: "110px", height: "110px" }}
              ></img>
              <h4 className="mt-2">Project Managment</h4>
              <p>
                Our skilled project managers keep the team motivated, evaluate
                the whole budget, and see if the tasks are done on time without
                any hurdles.
              </p>
            </div>
            <div className="col-4 border ">
              {" "}
              <img
                className="rounded "
                src={quality}
                style={{ width: "110px", height: "110px" }}
                alt="Animated1"
              ></img>
              <h4 className="mt-2">Quality Assurance</h4>
              <p>
                To guarantee that the design fulfills the standards of your
                project, our Q&A engineer will use automated or manual testing
                methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="web mt-5" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="container m-2 rounded ">
          <div className="row content">
            <h1 className="mt-5">
              A Snapshot Of Our Web Application Development Process
            </h1>
            <br />
            <p className="text-center mt-4 mb-4">
              Following is the process of our web application development
              services that has enabled us to leave our digital footprints
              across the IT sector:
            </p>
            <div
              className="col-lg-6   mt-3 rounded mb-4 "
              style={{ backgroundColor: "white" }}
            >
              <div className="col">
                <h4>
                  Planing
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ marginLeft: "15px" }}
                  >
                    Step 01
                  </button>
                </h4>
                <p>
                  Initially, we start with planning out a strategic idea of how
                  we will be carrying out the entire web application development
                  process.
                </p>
              </div>
              <div className="col">
                <h4>
                  Strategizing The Development
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ marginLeft: "15px" }}
                  >
                    Step 02
                  </button>
                </h4>
                <p>
                  To save ourselves from excessive obstacles, we discuss how the
                  web app will perform and what results we should expect.
                </p>
              </div>
              <div className="col">
                <h4>
                  Prototype
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ marginLeft: "15px" }}
                  >
                    Step 03
                  </button>
                </h4>
                <p>
                  To save ourselves from excessive obstacles, we discuss how the
                  web app will perform and what results we should expect.
                </p>
              </div>
              <div className="col">
                <h4>
                  Development Phase
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ marginLeft: "15px" }}
                  >
                    Step 04
                  </button>
                </h4>
                <p>
                  After the small details have been taken care of, we delve into
                  the real challenge “the development phase”.
                </p>
              </div>
              <div className="col">
                <h4>
                  Auality assurance
                  <button
                    type="button"
                    class="btn btn-primary"
                    style={{ marginLeft: "15px" }}
                  >
                    Step 05
                  </button>
                </h4>
                <p>
                  Initially, we start with planning out a strategic idea of how
                  we will be carrying out the entire web application development
                  process.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <img
                src={snap}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="counts  rounded mt-5"
        style={{ backgroundColor: "#D8D8D8" }}
      >
        <div className="container content-center">
          <div className="row counters">
            <div className="col-3 text-center text-black border-top">
              <img
                src={project}
                className="rounded-circle"
                style={{ width: "50%", height: "50%" }}
              ></img>
              <h1 className="mt-2">{count}+</h1>

              <h4>Project Successfully Delivered</h4>
            </div>

            <div className="col-3 text-center border text-black">
              <img
                src={success}
                className="rounded-circle"
                style={{ width: "50%", height: "50%" }}
              ></img>
              <h1 className="mt-2">{count1}+</h1>
              <h4>Client Success Rate</h4>
            </div>

            <div className="col-3 text-center border text-black">
              <img
                src={engineer}
                className="rounded-circle"
                style={{ width: "50%", height: "50%" }}
              ></img>
              <h1 className="mt-2">{count2}+</h1>
              <h4>Team Of Pre-Vetted Engineers</h4>
            </div>

            <div className="col-3  text-center border text-black">
              <img
                src={exp}
                className="rounded-circle"
                style={{ width: "50%", height: "50%" }}
              ></img>
              <h1 className="mt-2">{count3}+</h1>
              <h4 className="mt-2 ">Years Of Experience In The IT Industry</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="web mt-5">
        <div className="container m-2 rounded ">
          <div className="row content">
            <div className="col-6   mt-3 rounded">
              <h1>Extend The Roots Of Your Business By Choosing Us</h1>
              <p className="mb-4 mt-4">
                We upgrade the quality and extend the functionalities of our web
                application development services by inducing modern technical
                solutions into them.
                <br />
                <br />
                Other reasons why you can benefit from choosing OutCode are:
              </p>

              <ul className="list-group">
                <li className="list-group-item">
                  <span style={tickStyle}>&#10003;</span> We find the best
                  technology stack for you that matches your needs
                </li>
                <li className="list-group-item">
                  <span style={tickStyle}>&#10003;</span> Our non-stop
                  availability makes communication easier
                </li>
                <li className="list-group-item">
                  <span style={tickStyle}>&#10003;</span> We put much focus on
                  agile development processes
                </li>
                <li className="list-group-item">
                  <span style={tickStyle}>&#10003;</span> Freely connect with
                  the project manager in case of any hurdle
                </li>
                <li className="list-group-item">
                  <span style={tickStyle}>&#10003;</span> We strictly adhere to
                  globally accepted data security guidelines
                </li>
                <li className="list-group-item">
                  <span style={tickStyle}>&#10003;</span> Full-fledge
                  documentation at every step of the process
                </li>
                <li className="list-group-item">
                  <span style={tickStyle}>&#10003;</span> Interactive and
                  dependable UI/UX designs
                </li>
                <li className="list-group-item">
                  <span style={tickStyle}>&#10003;</span> Frequent iterative
                  testing
                </li>
              </ul>
            </div>

            <div className="col-6">
              <img
                src={grow}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded bg-primary">
        <div
          className="container text-center text-white  "
          style={{ width: "100%" }}
        >
          <div className="p-5">
            <h1>
              Experience The Smoothest Web App <br />
              Development Process
            </h1>

            <button
              className="btn btn-lg bg-warning text-white rounded-pill m-2 "
              type="button"
              style={{ height: "100%" }}
              onClick={handleButtonClick}
            >
              <nav>
                <Link
                  to="/Contact"
                  state={{}}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Request a free consultation
                </Link>
              </nav>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
