import React from "react";
import Helmet from "../components/Helmet";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import testimonials_data from "../assets/fake-data/testimonails_data";
function Testimonials() {
  return (
    <Helmet title="Testimonials">
      <div className="container testimonials__con">
        <h2 className="section__heading">Our Feedback</h2>
        <Swiper
          className="testimonials_container"
          modules={[Autoplay, Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
        >
          {testimonials_data.map(({ id, avatar, name, review }) => {
            return (
              <SwiperSlide className="testimonial" key={id}>
                <div className="client_avatar">
                  <img src={avatar} alt="avatar" className="circle-5" />
                </div>
                <h5 className="client_name">{name}</h5>
                <p className="client_review">{review}</p>
                <div className="social__icons">
                  <i className="fa fa-facebook"></i>
                  <i className="fa fa-twitter"></i>
                  <i className="fa fa-instagram"></i>
                  <i className="fa fa-linkedin"></i>
                  <i className="fa fa-github"></i>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Helmet>
  );
}

export default Testimonials;
