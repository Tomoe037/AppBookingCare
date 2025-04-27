import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import module Navigation để dùng nút bấm trái/phải
import "swiper/css"; // Import CSS cơ bản của Swiper
import "swiper/css/navigation"; // Import CSS cho Navigation (nút bấm)
import ItemBox from "../ItemBox/ItemBox"; // Import component ItemBox
import "./Slider.scss";

// Khai báo component Slider
const Slider = (props) => {
  // Lấy props truyền vào
  const { items } = props;
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const swiperRef = useRef(null);
  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params.navigation &&
      prevButtonRef.current &&
      nextButtonRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="slider">
      <div className="slider-container">
        <Swiper
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // lưu instance vào ref
          navigation={{
            prevEl: null,
            nextEl: null,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 3, // Màn hình nhỏ dưới 640px: chỉ hiện 1 box
            },
            640: {
              slidesPerView: 3, // Từ 640px trở lên: hiện 2 box
            },
            1024: {
              slidesPerView: 4, // Từ 1024px trở lên: hiện 4 box như bình thường
            },
          }}
          loop={true}
        >
          {items.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <ItemBox
                  image={item.image}
                  subtitle={item.subtitle}
                  description={item.description}
                  hasDescription={item.hasDescription}
                  imageShape={item.imageShape}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="slider-custom-navigation">
          <button ref={prevButtonRef} className="custom-prev">
            ←
          </button>
          <button ref={nextButtonRef} className="custom-next">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
