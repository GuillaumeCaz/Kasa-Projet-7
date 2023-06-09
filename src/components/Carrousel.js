import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import data from '../datas/datas.json';
import arrowLeftImage from '../assets/Arrow/ArrowLeft.png';
import arrowRightImage from '../assets/Arrow/ArrowRight.png';
import '../styles/Carrousel.css';

const Carrousel = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Récupérer les images du logement correspondant à l'ID
    const logement = data.find((log) => log.id === id);
    if (logement) {
      const pictures = logement.pictures.map((picture, index) => ({
        id: index + 1,
        src: picture,
      }));
      setImages(pictures);
    }
  }, [id]);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const previousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel-wrapper">
      {images.length > 1 && (
        <>
          <div className="carousel-arrow left" onClick={previousImage}>
            <img src={arrowLeftImage} alt="Left Arrow" />
          </div>
          <div className="carousel-arrow right" onClick={nextImage}>
            <img src={arrowRightImage} alt="Right Arrow" />
          </div>
        </>
      )}
      <Carousel
        showArrows={false}
        showThumbs={false}
        selectedItem={currentIndex}
        onChange={handleSlideChange}
        renderIndicator={(onClickHandler, isSelected, index, label) => (
          <button
            type="button"
            onClick={onClickHandler}
            key={index}
            className={`${isSelected ? 'carousel-indicator selected' : 'carousel-indicator'}`}
          >
            {index + 1}/{images.length}
          </button>
        )}
      >
        {images.map((image) => (
          <div key={image.id} className="slide">
            <img src={image.src} alt={` ${image.id}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carrousel;
