
'use client';
import React, {useState} from 'react'

const CarouselDefault = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
    prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
    prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }
  
  
  return (
    <div className="h-full w-full">
      <div className="carousel" >
        <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
          &lt;
        </button>
        <img
          src={images[activeIndex]?.image}
          alt={images[activeIndex]?.imageAlt}
          className="carousel__img"
        />
        <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default CarouselDefault;
