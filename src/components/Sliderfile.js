import React, { useState } from "react";
import { Link } from "react-router-dom";
import ui from "./img/ui.jpg";
import cloud from "./img/cloud.jpg";
import webc1 from "./img/em.jpg";
import mobc1 from "./img/mobc1.jpg";
import sof from "./img/sof.jpg";
import devo from "./img/devo.jpg";

export default function Sliderfile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardData = [
    {
      title: "Web Development",
      image: webc1,
      backgroundColor: "none",
      textColor: "white",
      url: "/Web",
      border: "none",
    },
    {
      title: "Mobile Development",
      image: mobc1,
      backgroundColor: "none",
      textColor: "white",
      url: "/Mobile",
    },
    {
      title: "Software Development",
      image: sof,
      backgroundColor: "none",
      textColor: "white",
      url: "/Software",
    },
    {
      title: "DevOps",
      image: devo,
      backgroundColor: "none",
      textColor: "white",
      url: "/DevOps",
    },
    {
      title: "UI/UX",
      image: ui,
      backgroundColor: "none",
      textColor: "white",
      url: "/UIUX",
    },
    {
      title: "Cloud Services",
      image: cloud,
      backgroundColor: "none",
      textColor: "white",
      url: "/CloudServices",
    },
  ];

  const sortedCardData = [...cardData].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const renderVisibleCards = () => {
    const middleIndex = activeIndex % sortedCardData.length;
    const leftIndex =
      (middleIndex - 1 + sortedCardData.length) % sortedCardData.length;
    const rightIndex = (middleIndex + 1) % sortedCardData.length;

    return [leftIndex, middleIndex, rightIndex].map((index) => {
      const card = sortedCardData[index];
      const isMiddle = index === middleIndex;

      return (
        <div
          key={index}
          className={`card ${isMiddle ? "active" : ""}`}
          style={{
            width: "20rem", // Set fixed width for all cards
            height: "20rem", // Set fixed height for all cards
            margin: "20px",
            marginRight: "10px",
            backgroundColor: card.backgroundColor,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            transform: `scale(${isMiddle ? 1.1 : 1})`, // Scale only the middle card
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={card.image}
            alt={`Card ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
          <div
            className="overlay-content"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h5
              className="card-title"
              style={{
                textAlign: "center",
                color: card.textColor,
              }}
            >
              {card.title}
            </h5>

            <Link to={card.url}>
              <button
                className="btn btn-lg bg-warning text-black rounded-pill"
                style={{
                  backgroundColor: "",
                  textColor: "black",
                  color: "black",
                  marginTop: "170px",
                  padding: "6px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <button
        onClick={handlePrev}
        style={{
          border: "none", // Remove border
          background: "none", // Remove background
          cursor: "pointer",
        }}
      >
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
      </button>

      <div
        className="card-container"
        style={{ display: "flex", overflow: "hidden" }}
      >
        {renderVisibleCards()}
      </div>

      <button
        onClick={handleNext}
        style={{
          border: "none", // Remove border
          background: "none", // Remove background
          cursor: "pointer",
        }}
      >
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
      </button>
    </div>
  );
}
