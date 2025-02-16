import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./landing.css";
import photo from "../../assets/images/full-shot-woman-holding-sale-tag.jpg";
import photo2 from "../../assets/images/100_story.webp";
import photo3 from "../../assets/images/vecteezy.jpg";
import photo4 from "../../assets/images/woman-red.jfif";

function LandingCarousel() {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper-landing"
      >
        <SwiperSlide className="landing-slide4">
          <img src={photo4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="landing-slide">
          <img src={photo2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="landing-slide2">
          <img src={photo} alt="" />
        </SwiperSlide>
        <SwiperSlide className="landing-slide3">
          <img src={photo3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default LandingCarousel;
