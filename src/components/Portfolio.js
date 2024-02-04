import React from "react";
import { Link } from "react-router-dom";
import animated from "./a.jpg";
import animated1 from "./c.jpg";
import animated2 from "./homepie.png";
import animated3 from "./sheild.png";
import animated4 from "./stitch.png";
import client from "./client.jpg";
import dev from "./dev.jpg";
import project from "./project.jpg";
import establish from "./establish.png";
import office from "./office.jpg";
import Navbar from "./Navbar";

export default function Portfolio() {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  return (
    <>
      <Navbar />
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container text-center position-relative"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1>Software Development Solutions</h1>
          <h2>We are team of talented mobile and web developers</h2>
          <button
            className="btn btn-lg border-white text-white rounded-pill m-2 "
            type="button"
            style={{ height: "10%" }}
            onClick={handleButtonClick}
          >
            <nav>
              <Link
                to="/Contact"
                state={{}}
                style={{ textDecoration: "none", color: "white" }}
              >
                Get Started
              </Link>
            </nav>
          </button>
        </div>
      </section>

      <section
        className="d-flex align-items-center"
        style={{ backgroundColor: "#D8D8D8" }}
      >
        <div
          className="container text-center position-relative m-5"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1>What We Have Done Before For Our Clients?</h1>
          <p className="text-center m-2">
            Learn how entrepreneurs, businesses, and technology leaders who are
            after software-driven innovation are collaborating with our
            high-performing teams. Learn how entrepreneurs, businesses, and
            technology leaders who are after software-driven innovation are
          </p>
        </div>
      </section>

      <section className="" style={{ backgroundColor: "#D8D8D8" }}>
        <div className="container">
          <div className="row g-3">
            <div className="col-7 bg-white">
              <img
                src={animated}
                style={{ width: "100%" }}
                alt="Animated1"
              ></img>
              <div className="bg-white m-2">
                <h4> Coloum</h4>

                <button type="button" class="btn btn-info ">
                  Design
                </button>
                <button type="button" class="btn btn-info m-2">
                  Development
                </button>

                <button type="button" class="btn btn-info m-2">
                  Media and Development
                </button>
              </div>
            </div>

            <div className="col-5 bg-white">
              <img
                src={animated1}
                style={{ width: "100%" }}
                alt="Animated1"
              ></img>

              <div className="bg-white m-2">
                <h4> Golbal Reader</h4>
                <button type="button" class="btn btn-info ">
                  Design
                </button>
                <button type="button" class="btn btn-info m-2">
                  Development
                </button>

                <button type="button" class="btn btn-info m-2">
                  AI
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="d-flex align-items-center "
        style={{ backgroundColor: "#D8D8D8" }}
      >
        <div className="container">
          <div className="row mt-5 g-3">
            <div className="col-4 ">
              <img
                src={animated2}
                style={{ width: "100%" }}
                alt="Animated"
              ></img>
              <div className="">
                <h4> Homepie</h4>

                <button type="button" class="btn btn-info ">
                  Design
                </button>
                <button type="button" class="btn btn-info m-2">
                  Development
                </button>

                <button type="button" class="btn btn-info m-2">
                  Real Estate
                </button>
              </div>
            </div>

            <div className="col-4 ">
              <img
                src={animated3}
                style={{ width: "100%" }}
                alt="Animated1"
              ></img>

              <div className=" m-2">
                <h4>Sheild Republic</h4>
                <button type="button" class="btn btn-info ">
                  Design
                </button>
                <button type="button" class="btn btn-info m-2">
                  Development
                </button>

                <button type="button" class="btn btn-info m-2">
                  Ecommerece
                </button>
              </div>
            </div>

            <div className="col-4">
              <img
                src={animated4}
                style={{ width: "100%" }}
                alt="Animated1"
              ></img>

              <div className="m-2">
                <h4>Stitch.Health</h4>
                <button type="button" class="btn btn-info ">
                  Design
                </button>
                <button type="button" class="btn btn-info m-2">
                  Development
                </button>

                <button type="button" class="btn btn-info m-2">
                  Health care
                </button>
              </div>
            </div>
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
            A Hub Of Professional Caliber Paired <br />
            With Innovative Solutions
          </h1>
          <p>
            With a passion for innovation and a commitment to creating
            <br />
            groundbreaking impacts, we are shaping the future of technology and
            <br />
            business as per the global industry standards.
          </p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-2 col-hover">
              <img
                className="rounded border"
                src={client}
                style={{ width: "100%" }}
                alt="Animated1"
              />
              <h4 className="mt-2">Happy Clients</h4>
              <p>50+</p>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <img
                className="rounded border"
                src={dev}
                style={{ width: "100%" }}
                alt="Animated1"
              />
              <h4 className="mt-2">Developers</h4>
              <p>100+</p>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
              <img
                className="rounded border"
                src={project}
                style={{ width: "100%" }}
                alt="Animated1"
              />
              <h4 className="mt-2">Projects</h4>
              <p>150+</p>
            </div>
            <div className="col-12 col-md-6 col-lg-2 col-hover">
              <img
                className="rounded border"
                src={establish}
                style={{ width: "100%" }}
                alt="Animated1"
              />
              <h4 className="mt-2">Established</h4>
              <p>2023</p>
            </div>
            <div className="col-12 col-md-6 col-lg-2 col-hover">
              <img
                className="rounded border"
                src={office}
                style={{ width: "100%" }}
                alt="Animated1"
              />
              <h4 className="mt-2">Global Office</h4>
              <p>2</p>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex align-items-center mt-5 ">
        <div
          className="container text-center position-relative mx-auto bg-warning "
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <h1 className="text-center mt-5">
            Ready To Explore The Possibilities Of Our Full-
            <br />
            Stack Development Services For Your Business?
          </h1>
          <button
            className="btn btn-lg bg-black text-white rounded-pill m-2 "
            type="button"
            style={{ height: "100%" }}
            onClick={handleButtonClick}
          >
            <nav>
              <Link
                to="/Contact"
                state={{}}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Request a free consultation
              </Link>
            </nav>
          </button>
        </div>
      </section>
    </>
  );
}
