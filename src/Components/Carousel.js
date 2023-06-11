import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % images.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + images.length) % images.length;
    setCurrentSlide(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  return (
    <div className="carousel">
      <button className="carousel-btn prev" onClick={prevSlide}>
        &lt;
      </button>
      <img className="carousel-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      <button className="carousel-btn next" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
