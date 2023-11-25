'use client'
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const slides = [
    {
      text: 'Heritage Tees',
      buttonText: 'Shop Now',
      image: '/images/hero-banner.png',
    },
    {
      text: 'Premium Tees',
      buttonText: 'Shop Now',
      image: '/images/hero-banner-2.png',
    },
    {
        text: 'Premium Zip Hoodies',
        buttonText: 'Shop Now',
        image: '/images/hero-banner-3.png',
    },
    {
        text: 'Heritage Hoodies',
        buttonText: 'Shop Now',
        image: '/images/hero-banner-4.png',
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="relative bg-blue-500 text-white py-20 px-5">
          <div className={`mx-auto relative z-10 md:px-[90px] px-[40px] md:mt-[100px] mt-[20px] text-left`}>
            <h1 className={`break-text w-100 text-4xl font-bold mb-4 text-3xl md:text-5xl xl:text-9xl`}>{slide.text}</h1>
            <button className="bg-white text-black text-2xl py-3 px-5 rounded-full font-semibold hover:bg-blue-100 hover:text-blue-800">
              {slide.buttonText}
            </button>
          </div>
          <div className="absolute top-0 right-0 bottom-0 left-0">
            <Image
              src={slide.image}
              alt={slide.text}
              layout="fill"
              objectFit="cover"
              className="md:min-h-[650px] min-h-[325px]"
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroBanner;
