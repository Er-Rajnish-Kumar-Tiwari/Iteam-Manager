// 12. Carousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function ImageCarousel({ images }) {
  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop>
      {images.map((img, idx) => (
        <div key={idx}>
          <img src={img} alt={`img-${idx}`} />
        </div>
      ))}
    </Carousel>
  );
}
