import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import svg from "./img/ai.png";
import svg1 from "./img/web.png";
import svg2 from "./img/mobile.png";
import svg3 from "./img/devop.png";
import svg4 from "./img/game.png";
import svg5 from "./img/blockchain.png";
import ill from "./img/ill.png";
import hire from "./img/hire.jpg";
import Sliderfile from "./Sliderfile";
import snap from "./img/f1.jpg";
import grow from "./img/f2.jpg";
import dev from "./img/f3.jpg";
import re from "./img/react.jpeg";
import py from "./img/python.jpeg";
import no from "./img/node.jpeg";
import mo from "./img/mongo.jpeg";
import ja from "./img/java.jpeg";
import ko from "./img/kotlin.jpeg";
import js from "./img/js.jpeg";
import Navbar from "./Navbar";
import bg from "./img/bg1.mp4";
import Footer from "./Footer";

export default function Home() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  const [selectedColumn, setSelectedColumn] = useState(null);

  function handleClick(index) {
    setSelectedColumn(index);
  }

  function getColStyle(index) {
    return {
      backgroundColor: selectedColumn === index ? "#D8D8D8" : "",
      color: selectedColumn === index ? "white" : "",
      cursor: "pointer",
    };
  }

  function getContent() {
    switch (selectedColumn) {
      case 0:
        return (
          <>
            <div className="container  ">
              <h2 className="">Software Development</h2>
              <p className="">
                Automate business operations with our tailor-made AI/ML/ChatGPT
                solutions to save time, reduce errors and improve efficiency —
                freeing up your resources to focus on profit-making decisions
                while enjoying increased accuracy & productivity.
              </p>
              <div className="row">
                {" "}
                <img src={re} style={{ width: "10%" }}></img>
                <img src={py} style={{ width: "10%" }}></img>
                <img src={mo} style={{ width: "10%" }}></img>
                <img src={no} style={{ width: "10%" }}></img>
                <img src={ja} style={{ width: "10%" }}></img>
                <img src={ko} style={{ width: "10%" }}></img>
                <img src={js} style={{ width: "10%" }}></img>
              </div>
            </div>
          </>
        );
      case 1:
        return (
          <>
            <div className="container  ">
              <h2 className="">Web Application Development</h2>
              <p className="">
                Scalable web product development at any stage and ongoing
                support after launch.
              </p>
              <div className="row">
                {" "}
                <img src={re} style={{ width: "10%" }}></img>
                <img src={py} style={{ width: "10%" }}></img>
                <img src={mo} style={{ width: "10%" }}></img>
                <img src={no} style={{ width: "10%" }}></img>
                <img src={ja} style={{ width: "10%" }}></img>
                <img src={ko} style={{ width: "10%" }}></img>
                <img src={js} style={{ width: "10%" }}></img>
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="container  ">
              <h2 className="">Mobile Application Development</h2>
              <p className="">
                Consultation on updating existing mobile applications and
                development of apps that look and perform great on both iOS and
                Android.
              </p>
              <div className="row">
                {" "}
                <img src={re} style={{ width: "10%" }}></img>
                <img src={py} style={{ width: "10%" }}></img>
                <img src={mo} style={{ width: "10%" }}></img>
                <img src={no} style={{ width: "10%" }}></img>
                <img src={ja} style={{ width: "10%" }}></img>
                <img src={ko} style={{ width: "10%" }}></img>
                <img src={js} style={{ width: "10%" }}></img>
              </div>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="container  ">
              <h2 className="">Cloud Services</h2>
              <p className="">
                Let’s eliminate vulnerabilities and fill loopholes to stop
                unforeseen cyberattacks with InvoZone’s cover-all cybersecurity
                services. It’s an “evil genius vs. ethical genius war” — and we
                have got experience, years of it!
              </p>
              <div className="row">
                {" "}
                <img src={re} style={{ width: "10%" }}></img>
                <img src={py} style={{ width: "10%" }}></img>
                <img src={mo} style={{ width: "10%" }}></img>
                <img src={no} style={{ width: "10%" }}></img>
                <img src={ja} style={{ width: "10%" }}></img>
                <img src={ko} style={{ width: "10%" }}></img>
                <img src={js} style={{ width: "10%" }}></img>
              </div>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="container">
              <h2 className="">DevOps Development</h2>
              <p className="">
                DevOps combines development (Dev) and operations (Ops) to unite
                people, process, and technology in application planning,
                development, delivery, and operations.
              </p>
              <div className="row">
                {" "}
                <img src={re} style={{ width: "10%" }}></img>
                <img src={py} style={{ width: "10%" }}></img>
                <img src={mo} style={{ width: "10%" }}></img>
                <img src={no} style={{ width: "10%" }}></img>
                <img src={ja} style={{ width: "10%" }}></img>
                <img src={ko} style={{ width: "10%" }}></img>
                <img src={js} style={{ width: "10%" }}></img>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <div className="container">
              <h2 className="">UI/UX Development</h2>
              <p className="">
                WebIn this course, we’ll cover the theory and methodologies
                behind UI and UX design. You’ll also design your own wireframes
                and interactive prototypes.
              </p>
              <div className="row">
                {" "}
                <img src={re} style={{ width: "10%" }}></img>
                <img src={py} style={{ width: "10%" }}></img>
                <img src={mo} style={{ width: "10%" }}></img>
                <img src={no} style={{ width: "10%" }}></img>
                <img src={ja} style={{ width: "10%" }}></img>
                <img src={ko} style={{ width: "10%" }}></img>
                <img src={js} style={{ width: "10%" }}></img>
              </div>
            </div>
          </>
        );
      default:
        return (
          <>
            <p>sajjad</p>
          </>
        );
    }
  }

  const [currentSlide, setCurrentSlide] = useState(0);

  const nSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const pSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const totalSlides = 3;

  const images = [dev, snap, grow];

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
    width: "400px",
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

  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setScrolling(false); // Reset scrolling state when location changes
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 0 && shouldApplyScrollEffect(location.pathname)) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const shouldApplyScrollEffect = (pathname) => {
    const effectPaths = ["/", "/Portfolio"];
    return effectPaths.includes(pathname);
  };

  return (
    <>
      <section id="hero" className="">
        <div className="video-container">
          <video autoPlay muted loop className="video-background">
            <source src={bg} type="video/mp4" />
          </video>
          <div
            className={`container-fluid text-center ${
              shouldApplyScrollEffect(location.pathname) && scrolling
                ? "bg-primary"
                : ""
            } text-black`}
          >
            {" "}
            <Navbar />
          </div>
          <div
            className="container text-center position-relative content-overlay mt-5"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <h1 className="mt-5">
              Software Development Consulting
              <br /> For Next-Gen Solutions
            </h1>
            <h2>Enterprises &bull; Innovators &bull; Startups</h2>

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

      <div
        className="container text-center m-5"
        data-aos="fade-in"
        data-aos-delay="200"
      >
        <h1>
          Software Consulting &
          <br />
          Development Services
        </h1>
        <p>with the perfect blend of technology, expertise and innovation.</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 ">
            <div className="row ">
              <div
                className="col rounded m-2 text-black  text-center d-flex flex-column align-items-center justify-content-center "
                style={getColStyle(0)}
                onClick={() => handleClick(0)}
              >
                <img className="m-2" src={svg} style={{ width: "20%" }}></img>
                <p>Software Development</p>
              </div>
              <div
                className="col rounded m-2 text-black text-center  d-flex flex-column align-items-center justify-content-center "
                style={getColStyle(1)}
                onClick={() => handleClick(1)}
              >
                <img className="m-2" src={svg1} style={{ width: "20%" }}></img>
                <p>Web Application Development</p>
              </div>
              <div
                className="col rounded m-2 text-black text-center  d-flex flex-column align-items-center justify-content-center"
                style={getColStyle(2)}
                onClick={() => handleClick(2)}
              >
                <img className="m-2" src={svg2} style={{ width: "20%" }}></img>
                <p>Mobile App Development</p>
              </div>
            </div>

            <div className="row ">
              <div
                className="col rounded m-2 text-black  text-center d-flex flex-column align-items-center justify-content-center "
                style={getColStyle(3)}
                onClick={() => handleClick(3)}
              >
                <img className="m-2" src={svg3} style={{ width: "20%" }}></img>
                <p>Cloud Services Development</p>
              </div>
              <div
                className="col rounded m-2  text-black text-center  d-flex flex-column align-items-center justify-content-center "
                style={getColStyle(4)}
                onClick={() => handleClick(4)}
              >
                <img className="m-2" src={svg4} style={{ width: "20%" }}></img>
                <p>DevOps Development</p>
              </div>
              <div
                className="col rounded m-2  text-black text-center  d-flex flex-column align-items-center justify-content-center"
                style={getColStyle(5)}
                onClick={() => handleClick(5)}
              >
                <img className="m-2" src={svg5} style={{ width: "20%" }}></img>
                <p>
                  UI/UX <br />
                  Development
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 " style={{ backgroundColor: "#D8D8D8" }}>
            <div
              className="col rounded m-2  text-black text-center"
              style={getColStyle(selectedColumn)}
              onClick={() => handleClick(null)}
            >
              {selectedColumn !== null ? (
                getContent()
              ) : (
                <div className="container  ">
                  <h2 className="">
                    OutCode is offering different development technique
                  </h2>
                  <p className="">
                    Automate business operations with our tailor-made
                    AI/ML/ChatGPT solutions to save time, reduce errors and
                    improve efficiency freeing up your resources to focus on
                    profit-making decisions while enjoying increased accuracy &
                    productivity.
                  </p>
                  <div className="row">
                    {" "}
                    <img src={re} style={{ width: "10%" }}></img>
                    <img src={py} style={{ width: "10%" }}></img>
                    <img src={mo} style={{ width: "10%" }}></img>
                    <img src={no} style={{ width: "10%" }}></img>
                    <img src={ja} style={{ width: "10%" }}></img>
                    <img src={ko} style={{ width: "10%" }}></img>
                    <img src={js} style={{ width: "10%" }}></img>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <Sliderfile />
      </div>

      <div className="container text-center m-5">
        <div className="row">
          <div className="col-md-6">
            <h1>Engagement Model</h1>
            <p>
              We solve your biggest business pains and help you succeed.
              <br />
              Here is how we can work together
            </p>
            <img className="img-fluid" src={ill} alt="Engagement Model" />
          </div>
          <div className="col-md-6 mt-5">
            <div className="m-2 ml-2">
              <h4>Staff/Resource Augmentation</h4>
              <p>
                Our staff augmentation model is intended to help companies find
                the right skills for their project.
              </p>
            </div>
            <div className="m-2">
              <h4>Product Development</h4>
              <p>
                The project-based model is designed to help you get your product
                built from ideation to deployment by a team of expert software
                engineering consultants.
              </p>
            </div>
            <div className="m-2">
              <h4>Dedicated Development Team</h4>
              <p>
                Our team of developers is highly qualified and dedicated to
                delivering quality development services to clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col m-5">
            <div className="app-container">
              <div className="slider-container">
                <div
                  className="slides"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  <div className="slide">
                    <div className="row">
                      <div className="col-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="blue"
                          class="bi bi-chat-quote"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                          <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                        </svg>
                      </div>
                    </div>
                    <div className="m-2">
                      <p>
                        Our UI/UX experts will develop an attractive layout for
                        your web app and will be responsible for creating the
                        whole appearance of your project.
                      </p>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="blue"
                          class="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                          />
                        </svg>
                      </div>
                      <div className="col">
                        <span>
                          Our UI/UX experts will develop an attractive
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="row">
                      <div className="col-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="blue"
                          class="bi bi-chat-quote"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                          <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                        </svg>
                      </div>
                    </div>
                    <div className="m-2">
                      <p>
                        Our Web development experts will develop an attractive
                        layout for your web app and will be responsible for
                        creating the whole appearance of your project.
                      </p>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="blue"
                          class="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                          />
                        </svg>
                      </div>
                      <div className="col">
                        <span>
                          Our Mobile development experts will develop an
                          attractive
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="slide">
                    <div className="row">
                      <div className="col-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="blue"
                          class="bi bi-chat-quote"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                          <path d="M7.066 6.76A1.665 1.665 0 0 0 4 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 7.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 0 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z" />
                        </svg>
                      </div>
                    </div>
                    <div className="m-2">
                      <p>
                        Our Mobile Development experts will develop an
                        attractive layout for your web app and will be
                        responsible for creating the whole appearance of your
                        project.
                      </p>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="blue"
                          class="bi bi-person-circle"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path
                            fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                          />
                        </svg>
                      </div>
                      <div className="col">
                        <span>
                          Our DevOps experts will develop an attractive
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div onClick={pSlide} className="m-2 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="blue"
                        class="bi bi-arrow-left-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="col">
                    <div className="m-2 text-center" onClick={nSlide}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        fill="blue"
                        class="bi bi-arrow-right-circle"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                        />
                      </svg>
                      {/* <img src={svg1}></img> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col left-border">
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <div
                style={sliderContainerStyle}
                onMouseEnter={stopAutoSlide}
                onMouseLeave={startAutoSlide}
              >
                <button style={{ ...buttonStyle, left: 0 }} onClick={prevSlide}>
                  &lt;
                </button>
                <img
                  src={images[currentIndex]}
                  alt={`slide-${currentIndex + 1}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
                <button
                  style={{ ...buttonStyle, right: 0 }}
                  onClick={nextSlide}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container m-2" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1 className="mt-5 text-left">
              Hire the Right Software Consultants And Developers
            </h1>
            <p>
              Our development team consists of 500+ expert software consulting
              engineers, project managers, and designers. We build scalable
              products for businesses globally.
            </p>
            <button
              className="btn btn-lg bg-primary text-white rounded-pill m-2"
              type="button"
              onClick={handleButtonClick}
            >
              <Link
                to="/Contact"
                state={{}}
                style={{ textDecoration: "none", color: "white" }}
              >
                Hire a Developer
              </Link>
            </button>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid m-2 rounded"
              src={hire}
              alt="Hire Section"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
