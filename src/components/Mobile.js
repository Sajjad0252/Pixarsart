import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import dev from "./mobpage.png";
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
import p1 from "./01.jpg";
import p2 from "./02.jpg";
import p3 from "./03.jpg";
import p4 from "./04.jpg";
import p5 from "./05.jpg";
import p6 from "./06.jpg";
import share from "./share.svg";
import hand from "./hand.svg";
import Navbar from "./Navbar";
import icon from "./icon.svg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Mobile() {
  const handleButtonClick = () => {
    // Add your custom logic here before navigating to Contact page

    console.log("Button clicked!");
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
      <Navbar />
      <section className="web" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="container m-2 rounded">
          <div className="row content">
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1>Mobile Application Development Services</h1>
              <p>
                We are a leading mobile app development company in the USA,
                housing domain-savvy developers to design and develop Android,
                iOS and cross-platform applications customized to your business
                needs and identity. So, jump into the InvoZone bandwagon today
                and benefit from our exclusive value-added services! Advanced
                tech stack such as Elixir, Flutter, React Native, Swift and
                more. Wallet-friendly engagement models to hire remote app
                developers Free consultation for mobile app development services
                Staffing within 1-2 weeks Daily collaborative meetings with
                Product Managers.
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

      <section className="dynamic">
        <div className="container">
          <h1
            className="text-center
          "
          >
            A Sneak Peak of Our Custom Mobile App Development Services
          </h1>
          <p className="text-center">
            Delivering convenience-focused mobile application development
            services in any form is what we’re inclined towards.
          </p>
          <div className="row">
            <div className="col col-hover border m-2">
              <img src={exp} style={{ height: "20%", width: "20%" }}></img>
              <h4 className="mt-2">Android App Development</h4>
              <p>
                Hire our remote team of android developers to create
                feature-rich mobile apps that complement your venture and
                generate revenue with each converted user.
              </p>
            </div>
            <div className="col col-hover border m-2">
              <img src={front} style={{ height: "20%", width: "20%" }}></img>
              <h4 className="mt-2">iOS App Development</h4>
              <p>
                Discover a constellation of star iOS developers at InvoZone, a
                top-notch mobile application development company that creates
                user-friendly iPhone & iPad Apps.
              </p>
            </div>
            <div className="col col-hover border m-2">
              <img src={back} style={{ height: "20%", width: "20%" }}></img>
              <h4 className="mt-2">React Native App Development</h4>
              <p>
                Outsource from a booming community of smartphone app developers
                to ensure a high degree of reliability and uncompromised
                performance in your react native applications.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col-hover border m-2">
              <img src={project} style={{ height: "20%", width: "20%" }}></img>

              <h4 className="mt-2">Hybrid App Development</h4>
              <p>
                Witness your business reaching out to a broader customer base
                through hybrid app development services that offer faster time
                to market and cross-channel mobility.
              </p>
            </div>
            <div className="col col-hover border m-2">
              <img src={manag} style={{ height: "20%", width: "20%" }}></img>

              <h4 className="mt-2">Cross App Development</h4>
              <p>
                Avoid limitations by scheduling a 7-day trial for our
                cross-platform mobile app development services that offer
                cost-effectiveness as the code is reusable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>
        {`
          .col-hover:hover {
            background-color: #3B71CA;
          }

          .section-bg {
            background-color: #f0f0f0;
          }

          .col-bg {
            background-color: #fff;
          }
        `}
      </style>
      <section className="d-flex  mt-5 section-bg">
        <div
          className="container position-relative"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1 className="text-center">
            Why Should You Choose OutCode For Mobile App Development Services?
          </h1>
          <p className="text-center">
            We capitalized on 6 key value services and successfully built a
            reputation as the leading and <br />
            trusted mobile app development services provider in the U.S.A., the
            U.K., and Canada.
          </p>

          <div className="row ">
            <div className="col col-hover border mx-3 mb-4 rounded col-bg">
              <img
                className="mt-4"
                src={icon}
                alt="Animated1"
                style={{ width: "50px", height: "50px" }}
              ></img>
              <h4 className="mt-2">Domain Speciliest</h4>
              <p>
                With hands-on experience in mobile app development services,
                InvoZone houses a flourishing community of 500+ developers who
                have delivered 95% customer satisfaction across industries —
                Healthcare, Fintech, and more!
              </p>
            </div>
            <div className="col col-hover border mx-3 mb-4 rounded col-bg">
              {" "}
              <img
                className="rounded mt-4"
                src={p2}
                alt="Animated1"
                style={{ width: "50px", height: "50px" }}
              ></img>
              <h4 className="mt-2">Community’s Most Loved Tech Stack</h4>
              <p>
                Seek the helping hand of our 500+ pre-vetted developers adept in
                the most loved languages and frameworks. Elixir, Python, RoR,
                Flutter, Ionic — you want it, you got it. You name it, here it
                is.
              </p>
            </div>
          </div>

          <div className="row ">
            <div className="col col-hover border mx-3 mb-4 rounded col-bg">
              <img
                className="mt-4"
                src={p3}
                alt="Animated1"
                style={{ width: "50px", height: "50px" }}
              ></img>
              <h4 className="mt-2">Unflinching Quality</h4>
              <p>
                Discard battery-draining apps by placing your trust in
                InvoZone’s quality perimeters. As a leading mobile app
                development company, we deliver bug-free, high-performing,
                stable, and user-friendly mobile apps.
              </p>
            </div>
            <div className="col col-hover border mx-3 mb-4 rounded col-bg">
              {" "}
              <img
                className="rounded mt-4"
                src={p4}
                alt="Animated1"
                style={{ width: "50px", height: "50px" }}
              ></img>
              <h4 className="mt-2">Dollar-wise Services</h4>
              <p>
                Save thousands of dollars with our value-adding bundle of
                bespoke services — A 7-day trial, senior-level product managers,
                and end-to-end software testing and debugging, all at a
                wallet-friendly budget.
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col col-hover border mx-3 mb-4 rounded col-bg"
              style={{ marginRight: "2px" }}
            >
              <img
                className="mt-4"
                src={p5}
                alt="Animated1"
                style={{ width: "50px", height: "50px" }}
              ></img>
              <h4 className="mt-2">100% Transparency</h4>
              <p>
                Track the best mobile application development progress without
                hassle. You will be kept in the loop throughout the project,
                ensuring that your valuable input is prioritized to deliver
                robust and superior applications.
              </p>
            </div>
            <div className="col col-hover border mx-3 mb-4 rounded col-bg">
              {" "}
              <img
                className="rounded mt-4"
                src={p6}
                alt="Animated1"
                style={{ width: "50px", height: "50px" }}
              ></img>
              <h4 className="mt-2">100% Confidentiality</h4>
              <p className="">
                Rest assured about your project confidentiality! Leveraging the
                latest technologies and tools to keep your data and other vital
                information safe is the top practice of our mobile app
                development team.
              </p>
            </div>
          </div>
          <div
            className="row"
            style={{
              borderRadius: "50% 80% 70% 10%",
              backgroundColor: "#3B71CA",
            }}
          >
            <div className="col ">
              <h1 className="mt-5 text-white">
                <br />
                <br />
                Share Your Idea With Us Today And GO PREMIUM with A
                Featured-Packed Mobile App
              </h1>
              <button
                className="btn btn-lg bg-warning text-white rounded-pill m-2 "
                type="button"
                style={{ height: "10%" }}
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
            <div className="col ">
              <img
                src={share}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>
          </div>

          <div className="row mt-5">
            <div className="col ">
              <h1 className="mt-5">
                Start 7-Day Trial To Get First-hand Experience of Our
                Development Process
              </h1>
              <button
                className="btn btn-lg bg-primary text-white rounded-pill m-2 "
                type="button"
                style={{ height: "20%" }}
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
                    Request a free consultation
                  </Link>
                </nav>
              </button>
            </div>
            <div className="col ">
              <img
                src={hand}
                style={{ width: "100%" }}
                className="m-2"
                alt="Description"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=""></section>
    </>
  );
}
