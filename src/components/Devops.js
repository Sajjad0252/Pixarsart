import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import dev from "./img/dev.svg";
import dev2 from "./img/devop2.png";
import dev3 from "./img/devop3.svg";
import dev4 from "./img/devop4.svg";

import snap from "./img/snap.png";
import "./my.css";
import project from "./img/project.gif";
import success from "./img/success.gif";
import engineer from "./img/engineer.gif";
import exp from "./img/exp.gif";
import grow from "./img/grow.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./slider.css";
import icon1 from "./img/dev1.svg";
import icon2 from "./img/dev2.svg";
import icon3 from "./img/dev3.svg";
import icon4 from "./img/dev4.svg";
import icon5 from "./img/dev5.svg";
import icon6 from "./img/dev6.svg";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Devops() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  const [currentSlide, setCurrentSlide] = useState(0);

  const nSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const pSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const totalSlides = 3;

  const images = [
    dev,
    snap, // Add more images if needed
    grow,
  ];

  const buttonStyle = {
    position: "absolute",
    top: "50%",
    fontSize: "20px",
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#333",
  };

  const sliderContainerStyle = {
    position: "relative",
    width: "300px",
    margin: "0 auto",
    overflow: "hidden",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlideInterval, setAutoSlideInterval] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const startAutoSlide = () => {
    setAutoSlideInterval(setInterval(nextSlide, 3000));
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideInterval);
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, [autoSlideInterval]);

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
      <style>
        {`
          .col-hover:hover {
            background-color: #f0f0f0;
          }

          .section-bg {
            background-color: #f0f0f0;
          }

          .col-bg {
            background-color: #fff;

          }
          

        `}
      </style>
      <section className="web mt-5" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="bg-primary fixed-top">
          <Navbar />
        </div>
        <div className="container m-2 rounded mt-5">
          <div className="row content">
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1 className="mt-5">
                DevOps Solutions And Services For All Your IT Needs
              </h1>
              <p>
                DevOps development services drive consistent improvements in
                maintaining software quality, bringing scalability and
                predictability. While reducing the cost of designing, testing,
                coding, and deployment. Helping companies to fulfill customer
                requirements faster. <br />
                <br />
                Get the best DevOps consulting services and solutions that can
                help you streamline your IT operations, workflows & software
                development.
              </p>
              <button
                className="btn btn-info  text-black rounded-pill  "
                type="button"
              >
                Get In Touch
              </button>
            </div>

            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <img
                src={dev}
                style={{ width: "100%" }}
                className="mt-5"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="dynamic">
        <div className="container">
          <h1
            className="text-center
          "
          >
            Choose Us For Dynamic And Expandable Web Apps
          </h1>
          <p className="text-center">
            OutCode services have four key steps i.e. Develop & Build, Test,
            Deploy, Operate & Monitor. As experienced DevOps solutions and
            services providers we have customized DevOps solutions for you!
          </p>
          <div className="row">
            <div className="col rounded col-hover border m-2">
              <img
                className="m-2 mt-3"
                src={icon1}
                style={{ width: "20%", height: "20%" }}
              ></img>

              <h4 className="mt-2">Cloud Team</h4>
              <p>
                Efficiently manage & optimize cloud infrastructure, including
                containerization, storage, databases, networking & more, to
                ensure the distribution of traffic, enabling seamless
                scalability and reliability for deployment.
              </p>
            </div>
            <div className="col col-hover border rounded m-2">
              <img
                className="m-2 mt-3"
                src={icon2}
                style={{ width: "20%", height: "20%" }}
              ></img>
              <h4 className="mt-2">Cloud Services</h4>
              <p>
                Integrate seamless automation and increase scalability for
                software development, testing, and deployment by leveraging the
                cloud services to streamline the DevOps pipeline to increase the
                organization’s efficiency.
              </p>
            </div>
            <div className="col col-hover rounded border m-2">
              <img
                className="m-2 mt-3"
                src={icon3}
                style={{ width: "20%", height: "20%" }}
              ></img>
              <h4 className="mt-2">Microservices</h4>
              <p>
                Simplify your development, testing, and deployment process with
                the microservices architecture tailor-made for DevOps with a
                service-based approach- allowing businesses to break down
                complex apps into small services.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col-hover rounded border m-2">
              <img
                className="m-2 mt-3"
                src={icon4}
                style={{ width: "20%", height: "20%" }}
              ></img>
              <h4 className="mt-2">Serverless</h4>
              <p>
                Serverless services allow your DevOps team to work across a
                variety of locations & environments with minimum impact on
                others, also enabling DevOps to release updates and patches and
                automate infrastructure tasks.
              </p>
            </div>

            <div className="col col-hover rounded border m-2">
              <img
                className="m-2 mt-3"
                src={icon5}
                style={{ width: "20%", height: "20%" }}
              ></img>
              <h4 className="mt-2">Process Automation</h4>
              <p>
                Make your enterprise more efficient by automating your
                deployment processes. Our robust Agile methodology ensures a
                significant time reduction in software production & deployment
                also diminishing associated risks.
              </p>
            </div>
            <div className="col col-hover rounded border m-2">
              <img
                className="m-2 mt-3"
                src={icon6}
                style={{ width: "20%", height: "20%" }}
              ></img>
              <h4 className="mt-2">Application Integration</h4>
              <p>
                Make your enterprise more efficient by automating your
                deployment processes. Our robust Agile methodology ensures a
                significant time reduction in software production & deployment
                also diminishing associated risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="web mt-5">
        <div className="container m-2 rounded">
          <div className="row content">
            <div className="col-md-6 col-sm-12 mt-3 rounded">
              <h1>Why Choose DevOps For Your Next Big Project?</h1>
              <p className="mb-4 mt-4">
                DevOps makes software development and operations efficient and
                supports easier maintenance of existing deployments. There is a
                list of advantages you can get if you choose our DevOps
                development services:
                <br />
                <br />
                Other reasons why you can benefit from choosing OutCode are:
              </p>
              <ul className="list-unstyled">
                <li className="list-item">
                  <h4>&#9733; Tailored Monitoring Solution</h4>
                </li>
                <li className="list-item">
                  <h4>&#9733; Automated Setup Of infrastructure</h4>
                </li>
                <li className="list-item">
                  <h4>&#9733; Resilience & Robustness</h4>
                </li>
                <li className="list-item">
                  <h4>&#9733; Greater Flexibility & Agility</h4>
                </li>
                <li className="list-item">
                  <h4>&#9733; Enhanced Quality & Creativity</h4>
                </li>
                <li className="list-item">
                  <h4>&#9733; Scalability</h4>
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-sm-12">
              <img
                src={dev2}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rounded bg-primary">
        <div className="container text-center text-white">
          <div className="p-5">
            <p>
              500+Developers & Trained Professionals | 99 % Success Rate | 300+
              Projects
            </p>
            <h1>
              Ready To Hire Dedicated <br />
              DevOps Engineers For <br /> Smooth Deployment?
            </h1>
            <button
              className="btn btn-lg bg-warning text-black rounded-pill m-2"
              type="button"
              onClick={handleButtonClick}
            >
              <nav>
                <Link
                  to="/Contact"
                  state={{}}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px" /* Adjust font size as needed */,
                    padding: "10px 20px" /* Adjust padding as needed */,
                  }}
                >
                  Begin your journey now
                </Link>
              </nav>
            </button>
          </div>
        </div>
      </section>
      <section className="web mt-5" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="container m-2 rounded ">
          <div className="row content">
            <div className="col-6 text-center">
              <img
                src={dev3}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
              <h1>Benefits Of DevOps Service Provider</h1>
              <p>
                Embracing DevOps software development fosters friendly working
                environments, transparency, close collaboration & respect. By
                adopting our services you can have the advantages below
              </p>
            </div>

            <div className="col-6   mt-3 rounded bg-light mb-2">
              <div className="col rounded col-hover border m-2">
                <img
                  className="m-2 mt-3"
                  src={icon1}
                  style={{ width: "10%", height: "10%" }}
                ></img>

                <h4 className="mt-2">Streamlined Release Cycles</h4>
                <p>
                  Obtaining DevOps services gives businesses faster time to
                  market their products and services by optimizing and
                  automating their development and delivery process.
                </p>
              </div>
              <div className="col rounded col-hover border m-2">
                <img
                  className="m-2 mt-3"
                  src={icon1}
                  style={{ width: "10%", height: "10%" }}
                ></img>

                <h4 className="mt-2">Improved Organizational Efficiency</h4>
                <p>
                  DevOps services increase overall efficiency, streamline
                  processes, reduce waste, and increase efficiency, especially
                  for organizations with centralized systems.
                </p>
              </div>
              <div className="col rounded col-hover border m-2">
                <img
                  className="m-2 mt-3"
                  src={icon1}
                  style={{ width: "10%", height: "10%" }}
                ></img>

                <h4 className="mt-2">Enhanced Operational Process</h4>
                <p>
                  DevOps as a service encourages communication efficiently with
                  other departments & catching loopholes at an early stage of
                  the process, reducing disputes & mistakes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="web mt-5">
        <div className="container m-2 rounded">
          <div className="row content">
            <div className="col-md-6 col-sm-12 mt-3 rounded">
              <h1>Hire The Best DevOps Engineer</h1>
              <p className="mb-4 mt-4">
                Hire the best DevOps services company to acquire the expertise
                of DevOps developers providing a range of services such as
                automation, development, and plugin integration along with API
                development. Our DevOps experts will work as an extension of
                your team leaving their full control in your hands. They will
                help you manage core server operations and app development.
                Their dynamic capabilities include:
              </p>

              <ul className="list-unstyled">
                <li className="list-item">
                  <span style={tickStyle}>&#10003;</span> Skilled in Automation
                </li>
                <li className="list-item mt-2">
                  <span style={tickStyle}>&#10003;</span> Robust Understanding
                  Of Codes
                </li>
                <li className="list-item mt-2">
                  <span style={tickStyle}>&#10003;</span> Proactive Monitoring
                  Skills
                </li>
                <li className="list-item mt-2">
                  <span style={tickStyle}>&#10003;</span> Knowledge Of The
                  Latest Technologies
                </li>
                <li className="list-item mt-2">
                  <span style={tickStyle}>&#10003;</span> 24/7 Availability
                </li>
                <li className="list-item mt-2">
                  <span style={tickStyle}>&#10003;</span> Experience In Dealing
                  With 300+ Projects
                </li>
              </ul>
            </div>

            <div className="col-md-6 col-sm-12">
              <img
                src={dev4}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="counts rounded mt-5"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <div className="container content-center">
          <div className="row counters">
            <div className="col-md-3 col-sm-6 text-center text-black border-top">
              <img
                src={project}
                className="rounded-circle"
                style={{ width: "50%", height: "auto" }}
                alt="Project Icon"
              />
              <h1 className="mt-2">{count}+</h1>
              <h4>Project Successfully Delivered</h4>
            </div>

            <div className="col-md-3 col-sm-6 text-center border text-black">
              <img
                src={success}
                className="rounded-circle"
                style={{ width: "50%", height: "auto" }}
                alt="Success Icon"
              />
              <h1 className="mt-2">{count1}+</h1>
              <h4>Client Success Rate</h4>
            </div>

            <div className="col-md-3 col-sm-6 text-center border text-black">
              <img
                src={engineer}
                className="rounded-circle"
                style={{ width: "50%", height: "auto" }}
                alt="Engineer Icon"
              />
              <h1 className="mt-2">{count2}+</h1>
              <h4>Team Of Pre-Vetted Engineers</h4>
            </div>

            <div className="col-md-3 col-sm-6 text-center border text-black">
              <img
                src={exp}
                className="rounded-circle"
                style={{ width: "50%", height: "auto" }}
                alt="Experience Icon"
              />
              <h1 className="mt-2">{count3}+</h1>
              <h4 className="mt-2">Years Of Experience In The IT Industry</h4>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
