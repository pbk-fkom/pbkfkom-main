"use client";

import { useEffect, useState, React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const QuoteArea = ({ quotes }) => {
  const API_PHOTO_MEMBER = process.env.NEXT_PUBLIC_PHOTO_MEMBER;
  const [sliderLoop, setSliderLoop] = useState(false);

  useEffect(() => {
    setSliderLoop(true);
  }, []);

  return (
    <>
      <div className="testimonial-area grey-bg pt-125 pb-120 fix p-relative">
        <div className="container">
          <div className="row justify-content-center">
            <div className=" col-xl-8 col-lg-8 col-md-10 col-12 ">
              <div className="tp-testimonial-section-box-two text-center pb-20">
                <h5 className="tp-subtitle">Opening Speech</h5>
                <h2 className="tp-title">Sambutan Ketum</h2>
              </div>
              <div className="tp-testimonial-slider-two mb-50">
                <Swiper
                  loop={sliderLoop}
                  slidesPerView={1}
                  modules={[Pagination]}
                  pagination={{
                    el: ".testimonial-slider-dots",
                    clickable: true,
                  }}
                  className="swiper-container testimonial-slider-two"
                >
                  {quotes.map((item, i) => (
                    <SwiperSlide key={i}>
                      <div className="tp-testimonial-item-two text-center">
                        <div className="tp-testimonial-info">
                          <img
                            src={`${API_PHOTO_MEMBER}/${item.memberId.photo}`}
                            alt=""
                          />
                          <h4>{item.memberId.name}</h4>
                          <span>{`${item.memberPositionId.name} - Periode ${item.periodeId.periode_year} `}</span>
                          <p>{item.content}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="testimonial-slider-dots text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteArea;
