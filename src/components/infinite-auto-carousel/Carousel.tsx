import React, { useState } from "react";
import "./Carousel.scss";
import { IAuthor } from "../testimonials/Testimonials";
import TestimonialCard from "../testimonials/components/testimonial-card/TestimonialCard";
import { useSwipeable } from "react-swipeable";
import { config } from "./constants";

const authors: IAuthor[] = [
  {
    name: "Jack F",
    tag: "Ex Blackrock PM",
    description:
      "Love how Loch integrates portfolio analytics and whale watching into one unified app.",
  },
  {
    name: "Yash P",
    tag: "Research, 3poch Crypto Hedge Fund",
    description:
      "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
  },
  {
    name: "Shiv S",
    tag: "Co-Founder Magik Labs",
    description:
      "Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % authors.length);
  };

  const handlers = useSwipeable({
    onSwiped: () => nextSlide(),
    ...config,
  });

  return (
    <div className="carousel-container" onClick={nextSlide} {...handlers}>
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 60}%)` }}
      >
        {authors.map((item, index) => (
          <div key={index} className="carousel-item">
            <TestimonialCard author={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
