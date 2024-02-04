import React, { useEffect, useState } from "react";
import myimage from "./1.jpg";
import vision from "./vision.jpg";
import mision from "./mision.jpg";
import Navbar from "./Navbar";
import { Carousel } from "react-bootstrap";

export default function About() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);
  const [count3, setCount3] = useState(1);
  const [count4, setCount4] = useState(1);
  const [count5, setCount5] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount < 150 ? prevCount + 1 : prevCount));
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
      setCount2((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    }, 0.5);

    return () => clearInterval(intervalId);
  }, [count2]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount3((prevCount) => (prevCount < 10 ? prevCount + 1 : prevCount));
    }, 1);

    return () => clearInterval(intervalId);
  }, [count3]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount4((prevCount) => (prevCount < 2 ? prevCount + 1 : prevCount));
    }, 1);

    return () => clearInterval(intervalId);
  }, [count4]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount5((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    }, 1);

    return () => clearInterval(intervalId);
  }, [count5]);

  const colStyle = {
    border: "5px solid",
    borderBottom: "5px solid lightblue",
    borderRight: "5px solid lightblue",
    borderLeft: "5px solid lightblue",
    padding: "10px",
    margin: "5px",
    position: "relative",
  };

  const gradientStyle = {
    content: '""',
    position: "absolute",
    top: "-5px",
    left: "0",
    right: "0",
    height: "5px",
    background: "linear-gradient(to right, lightblue 50%, white 50%)",
  };

  const bottomGradientStyle = {
    content: '""',
    position: "absolute",
    bottom: "-5px",
    left: "0",
    right: "0",
    height: "5px",
    background: "linear-gradient(to right, lightblue 50%, white 50%)",
  };

  return (
    <>
      <Navbar />
      <section id="about" className="about">
        <div className="container">
          <div className="row content mt-5">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1>Accelerate Your Business Growth With Us</h1>
              <p>
                Your business is only as good as the technology behind it. We
                have the expertise. You have the vision. We make technology
                happen! Our team of world-class engineers and innovators will
                build your next software project, leaving you to focus on
                running your business.
              </p>
            </div>

            <div
              class="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div>
                <img
                  src={myimage}
                  style={{ width: "100%" }}
                  className="m-2"
                  alt="Description"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="row content mt-5">
            <div
              class="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div>
                <img
                  src={vision}
                  style={{ width: "100%", height: "300px" }}
                  className="m-2"
                  alt="Description"
                />
              </div>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1>Our vision</h1>
              <p>
                We envision a future where innovation knows no bounds, where
                groundbreaking ideas transform industries, and where
                technological advancements create positive change. We strive to
                create disruptive AI-driven solutions that redefine the
                landscape of the digital world.
                <br />
                With unwavering determination, we leverage the power of our
                collective imagination to shape a world filled with endless
                possibilities. Together, we dare to dream, innovate fearlessly,
                and pave the way for a brighter tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="row content mt-5">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1>Our Mission</h1>
              <p>
                At the core of our mission lies empowering businesses with
                transformative technology solutions. Through our proficiency in
                custom software development, Cloud Services, AI/ML/AL, DevOps,
                and cybersecurity, we craft personalized solutions that propel
                growth, optimize operations, and spur innovation.
                <br /> By prioritizing our clients' needs, we consistently
                surpass expectations, nurturing enduring partnerships grounded
                in trust and mutual collaboration. Join us in shaping the future
                of business.
              </p>
            </div>

            <div
              class="col-lg-6 pt-4 pt-lg-0"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div>
                <img
                  src={mision}
                  style={{ width: "100%" }}
                  className="m-2"
                  alt="Description"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second set of divs with a different structure */}
      <div className="container mt-5">
        <h1 className="text-center ">
          OutCode: A Hub of Expertise,
          <br /> Engineering Innovative Solutions
        </h1>
        <p className="text-center">
          With a passion for innovation and a commitment to creating lasting
          impact, we actively
          <br /> shape the future of technology as per the industry standards.
        </p>
        <div className="row">
          <div className="col text-center m-3" style={colStyle}>
            <div style={gradientStyle}></div>
            <div className="m-4">
              <h2>{count}+</h2>
              <p>
                Sucessfull <br></br> projects
              </p>
            </div>

            <div style={bottomGradientStyle}></div>
          </div>
          <div className="col text-center m-3" style={colStyle}>
            <div style={gradientStyle}></div>
            <div className="m-4">
              <h2>{count1}%</h2>
              <p>
                Coustmer <br></br> Satisfication rate
              </p>
            </div>
            <div style={bottomGradientStyle}></div>
          </div>
          <div className="col text-center m-3" style={colStyle}>
            <div style={gradientStyle}></div>
            <div className="m-4">
              <h2>{count2}+</h2>
              <p>
                Developers &<br></br> engineers
              </p>
            </div>
            <div style={bottomGradientStyle}></div>
          </div>
        </div>
      </div>

      <div className="container mt-2">
        <div className="row">
          <div className="col text-center m-3" style={colStyle}>
            <div style={gradientStyle}></div>
            <div className="m-4">
              <h2>{count3}+</h2>

              <p>
                Sucessfull <br></br> projects
              </p>
            </div>

            <div style={bottomGradientStyle}></div>
          </div>
          <div className="col text-center m-3" style={colStyle}>
            <div style={gradientStyle}></div>
            <div className="m-4">
              <h2>{count4}+</h2>

              <p>
                Sucessfull <br></br> projects
              </p>
            </div>
            <div style={bottomGradientStyle}></div>
          </div>
          <div className="col text-center m-3" style={colStyle}>
            <div style={gradientStyle}></div>
            <div className="m-4">
              <h2>{count5}+</h2>

              <p>
                Sucessfull <br></br> projects
              </p>
            </div>
            <div style={bottomGradientStyle}></div>
          </div>
        </div>
      </div>

      <div className="container text-center text-white bg-primary rounded ">
        <div className="p-5">
          <h1>
            Fuel Success Through Collaboration <br />
            With Our Engagement Models
          </h1>
          <p>
            Experience a development journey like never before with our dynamic
            <br />
            engagement models, ensuring a stress-free path to growth.
          </p>
        </div>
      </div>
    </>
  );
}
