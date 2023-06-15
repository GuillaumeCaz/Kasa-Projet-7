import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import leftArrowImage from "../assets/Arrow/ArrowLeft.png";
import rightArrowImage from "../assets/Arrow/ArrowRight.png";
import data from "../datas/datas.json";
import "../styles/Carrousel.css";

const Carrousel = () => {
  const { id } = useParams();
  const logement = data.find((log) => log.id === id);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!logement) {
    return null; 
  }

  const pictures = logement.pictures;

  const previousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carrousel-container">
      <Carousel
        showIndicators={false}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        selectedItem={currentIndex}
        onChange={setCurrentIndex}
      >
        {pictures.map((picture, index) => (
          <div className="image-container" key={index}>
            <img
              src={picture}
              alt={`${index + 1}`}
              className="carrousel-image"
            />
          </div>
        ))}
      </Carousel>
      {pictures.length > 1 && (
        <div className="arrows-container">
          <img
            src={leftArrowImage}
            alt="Previous"
            className="arrow left-arrow"
            onClick={previousImage}
          />
          <img
            src={rightArrowImage}
            alt="Next"
            className="arrow right-arrow"
            onClick={nextImage}
          />
        </div>
      )}
      {pictures.length > 1 && (
        <div className="counter">
          {currentIndex + 1}/{pictures.length}
        </div>
      )}
    </div>
  );
};

export default Carrousel;
