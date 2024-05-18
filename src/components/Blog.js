import React, { useState } from "react";
import { Link } from "react-router-dom";
import ai from "./img/ai.jpg";
import soft from "./img/sv.svg";
import "./slider.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";
export default function Blog() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleRouteChange = () => {
    // Change the route programmatically
    window.location.href = "/Blognew";
  };

  const handleHover = () => {
    setIsFlipped(!isFlipped);
  };
  let inputFieldsCreated = false;

  const axios = require("axios");

  function handleButtonClick() {
    console.log("fun called");

    if (!inputFieldsCreated) {
      const form = document.createElement("form");
      form.style.border = "1px solid #ccc";
      form.style.borderRadius = "5px";
      form.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      form.style.padding = "20px"; // Add padding

      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.placeholder = "Title";
      titleInput.style.width = "100%"; // Set width to 100%
      titleInput.style.padding = "10px"; // Add padding
      titleInput.style.marginBottom = "10px"; // Add margin bottom
      titleInput.style.fontWeight = "bold"; // Make font bold (title)
      titleInput.name = "title"; // Set the name attribute for form submission

      // Create the blog content input field
      const contentInput = document.createElement("textarea");
      contentInput.placeholder = "Write your blog...";
      contentInput.style.width = "100%"; // Set width to 100%
      contentInput.style.padding = "10px"; // Add padding
      contentInput.name = "blog"; // Set the name attribute for form submission

      // Create the submit button
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Submit";
      submitButton.className = "btn btn-primary"; // Add Bootstrap classes if available

      // Append the input fields and submit button to the form
      form.appendChild(titleInput);
      form.appendChild(contentInput);
      form.appendChild(submitButton);

      // Append the form to the document body
      document.body.appendChild(form);

      // Set inputFieldsCreated to true to indicate that input fields are created
      inputFieldsCreated = true;

      // Scroll to the newly created form
      form.scrollIntoView({ behavior: "smooth", block: "start" });

      // Add submit event listener to the form
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get the form data
        const formData = new FormData(form);

        // Convert form data to JSON object
        const jsonData = {};
        formData.forEach((value, key) => {
          jsonData[key] = value;
        });

        console.log(jsonData);

        // Send the JSON data to the server using fetch API
        fetch("http://localhost:3001/api/blogdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(jsonData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Response from server:", data);

            handleRouteChange();
            // Handle response from server as needed
          })
          .catch((error) => {
            console.error("Error:", error);
            // Handle error
          });
      });
    }
  }

  return (
    <>
      <section
        className="web"
        style={{ backgroundColor: "#f0f0f0", backgroundImage: { ai } }}
      >
        <div className="bg-primary fixed-top">
          <Navbar className="bg-primary" />
        </div>
        <div className="container m-2 rounded mt-5">
          <div className="row content">
            <div
              className="col-lg-6 mt-5"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h1 className="mt-5">We Are Offering Bloging</h1>
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
                    to="/Blog"
                    state={{}}
                    style={{
                      textDecoration: "none",
                      color: "white",
                      marginBottom: "5px",
                    }}
                  >
                    Add a Blog
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
    </>
  );
}
