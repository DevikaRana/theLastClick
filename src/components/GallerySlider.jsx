// src/components/GallerySlider.js

import React, { useState, useEffect } from 'react';
import { slidesData } from '../data/SlidesData';
import '../styles/Slide.css';
import { Link } from 'react-router-dom';

const GallerySlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  const { image, heading, subheading, description, buttonText,link } = slidesData[current];

  return (
    <div className="slider d-flex flex-column flex-md-row">
      <div className="text-column d-flex flex-column justify-content-center p-5 gap-4">
        <div className='text-column d-flex flex-column justify-content-center'>
        <h1>{heading.split(' ')[0]} <br />{heading.split(' ')[1]}</h1>
        {/* <p className="sub">{subheading}</p> */}
        <p>{description}</p>
        <Link to={link}><button style={{border:'2px red solid', background:'transparent', maxWidth:'140px'}}>{buttonText}</button></Link>   
        </div>
        <div className="social-icons d-flex justify-content-left flex-wrap gap-2 ">
              <a href="#"><i className="fab fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-behance" /></a>
              <a href="#"><i className="fab fa-linkedin-in" /></a>
              <a href="#"><i className="fab fa-pinterest-p" /></a>
              <a href="#" className="yt-icon">W</a> {/* Replace with icon image if needed */}          
            </div>
      </div>

      <div
        className="image-column position-relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="controls">
          <button onClick={prevSlide}>&larr;</button>
          <button onClick={nextSlide}>&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default GallerySlider;
