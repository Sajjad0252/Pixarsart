import React, { useState } from "react";
import { Link } from "react-router-dom";
import ui from "./ui.jpg";
import cloud from "./cloud.jpg";
import webc1 from "./em.jpg";
import mobc1 from "./mobc1.jpg";
import sof from "./sof.jpg";
import devo from "./devo.jpg";

export default function Sliderfile() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cardData = [
    {
      title: "Web Development",
      image: webc1,
      backgroundColor: "black",
      textColor: "white",
      url: "/Web",
    },
    {
      title: "Mobile Development",
      image: mobc1,
      backgroundColor: "#FF6347",
      url: "/Mobile",
    },
    {
      title: "Software Development",
      image: sof,
      backgroundColor: "#008080",
      url: "/Software",
    },
    {
      title: "DevOps",
      image: devo,
      backgroundColor: "#800080",
      url: "/DevOps",
    },
    {
      title: "UI/UX",
      image: ui,
      backgroundColor: "#808000",
      url: "/UIUX",
    },
    {
      title: "Cloud Services",
      image: cloud,
      backgroundColor: "#808000",
      url: "/CloudServices",
    },
  ];

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

  const handleButtonClick = (cardIndex) => {
    console.log(`Button clicked for Card ${cardIndex + 1}`);
    // Add your custom logic here for button click
  };

  const renderVisibleCards = () => {
    const startIndex = activeIndex % cardData.length;
    return [0, 1, 2].map((index) => {
      const cardIndex = (startIndex + index) % cardData.length;
      const card = cardData[cardIndex];

      return (
        <div
          key={cardIndex}
          className={`card ${activeIndex === cardIndex ? "active" : ""} ${
            hoveredIndex === cardIndex ? "hovered" : ""
          }`}
          style={{
            width: "20rem",
            height: "20rem",
            margin: "20px",
            marginRight: "10px",
            textColor: "white",
            color: "white",
            flex: "0 0 auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease-in-out",
            transform: `scale(${hoveredIndex === cardIndex ? 1.2 : 1})`,
            backgroundColor: card.backgroundColor,
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
          onMouseEnter={() => handleMouseEnter(cardIndex)}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={card.image}
            alt={`Card ${cardIndex + 1}`}
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
                onClick={() => handleButtonClick(cardIndex)}
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
      <button onClick={handlePrev}>&#9664;</button>

      <div
        className="card-container"
        style={{ display: "flex", overflow: "hidden" }}
      >
        {renderVisibleCards()}
      </div>

      <button onClick={handleNext}>&#9654;</button>
    </div>
  );
}
