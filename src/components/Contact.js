import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ui from "./ui.jpg";
import cloud from "./cloud.jpg";
import webc1 from "./con1.jpg";
import mobc1 from "./mobc1.jpg";
import sof from "./con2.jpg";
import devo from "./con3.jpg";
import Navbar from "./Navbar";
import axios from "axios";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    preferredStack: "web-development", // Default value for the dropdown
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("aashir");
    try {
      // Make a POST request to the server endpoint with form data
      const response = await axios.post(
        "http://localhost:3001/api/submitFormData",
        formData
      );
      console.log(response.data.message);
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderItems = [
    <div className="row">
      <div className="m-2 border">1</div>
      <div className="m-2 border">2</div>
    </div>,
    // Add more slides as needed
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide < sliderItems.length - 1 ? prevSlide + 1 : 0
    );
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide > 0 ? prevSlide - 1 : sliderItems.length - 1
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <Navbar />
      <div className="row">
        <div className="col-6 ">
          <div className="m-2 mt-5 ">
            <h1>We Got Your Back</h1>
            <h4 className="mt-2">
              Submit a short brief to build, launch and grow.
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder=" Enter your Email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="preferredStack" className="form-label">
                  Preferred Stack:
                </label>
                <select
                  className="form-select"
                  id="preferredStack"
                  name="preferredStack"
                  value={formData.preferredStack}
                  onChange={handleInputChange}
                  placeholder="Select your preferred stack"
                  required
                >
                  <option value="" disabled>
                    Select your preferred stack
                  </option>
                  <option value="software-solutions">Software Solutions</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-development">Mobile Development</option>
                  <option value="devops">DevOps</option>
                  <option value="cloud">Cloud</option>
                  <option value="services">Services</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="tell us how we can help you"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                //onClick={handleSubmit}
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="col-6 border rounded mt-5">
          <Slider {...sliderSettings} className="slider-container">
            <div>
              <img
                className="mt-5"
                src={ui}
                alt="Slider Image 1"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                className="mt-5"
                src={cloud}
                alt="Slider Image 2"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                className="mt-5"
                src={mobc1}
                alt="Slider Image 2"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                className="mt-5"
                src={webc1}
                alt="Slider Image 2"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                className="mt-5"
                src={devo}
                alt="Slider Image 2"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div>
              <img
                className="mt-5"
                src={sof}
                alt="Slider Image 2"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Slider>
        </div>
      </div>

      <div />
    </>
  );
}
