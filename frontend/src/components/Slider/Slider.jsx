import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ItemBox from "../ItemBox/ItemBox";
import "./Slider.scss";

const Slider = ({ items = [] }) => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="slider">
      <div className="slider-container">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          freeMode={true}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
          }}
    
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <ItemBox
                image={item.image}
                subtitle={item.subtitle}
                description={item.description}
                hasDescription={item.hasDescription}
                imageShape={item.imageShape}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="slider-custom-navigation">
          <button onClick={handlePrev} className="custom-prev">
            ←
          </button>
          <button onClick={handleNext} className="custom-next">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
