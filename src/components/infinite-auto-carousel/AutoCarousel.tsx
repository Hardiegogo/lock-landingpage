import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import NotificationCard from "../notification/components/NotificationCard.tsx/NotificationCard";
import NotificationVariant from "../notification/components/NotificationCard.tsx/NotificationVariant";
import NotificationVariantTwo from "../notification/components/NotificationCard.tsx/NotificationVariantTwo";

const items = [
  <NotificationCard />,
  <NotificationVariant />,
  <NotificationVariantTwo />,
];

const AutoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="carousel-container auto">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 50}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
