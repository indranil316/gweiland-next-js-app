'use client'
import React from 'react';
import Image from 'next/image';
import styles from './Slideshow.module.scss'; 

interface Slide {
  image: string;
  alt: string;
  slideName: string;
  buttonText: string;
}

interface Slides {
  slides: Slide[];
}

const Slideshow: React.FC<Slides> = ({ slides }) => {
  return (
    <div className={`mt-[60px] md:mt-[100px] ${styles.sliderContainer}`}>
      <div className={styles.slider}>
        {slides.map((slide: Slide, index: number) => (
          <div key={index} className={styles.slide}>
            <div className={`image-container ${styles.imageContainer}`}>
                <Image
                src={slide.image}
                alt={slide.alt}
                className="object-cover"
                layout="fill"
                />
            </div>
            <div className={styles.content}>
              <h1 className="text-4xl font-bold mb-2">{slide.slideName}</h1>
              <button className="text-lg">{slide.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;