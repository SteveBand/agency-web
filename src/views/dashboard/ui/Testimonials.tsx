import { Swiper, SwiperSlide } from "swiper/react";
import { testimonialsArr } from "../../../assets/testimonials";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

export function Testimonials() {
  return (
    <section className="testi-section">
      <h5 className="sub-title">TESTIMONIALS</h5>
      <h3 className="title">Our clients say</h3>
      <p className="desc">
        Don't take our word for it. Hear it from our happy clients
      </p>

      <article className="testi-wrapper">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          pagination={true}
          freeMode={true}
          autoplay={{ delay: 2500 }}
          modules={[Autoplay, FreeMode, Pagination]}
        >
          {testimonialsArr.map((el, index) => {
            return (
              <SwiperSlide>
                <div className="testi-container">
                  <p className="testi">{el.testimonial}</p>
                  <div className="author">
                    <img src={el.img} alt={el.name} />
                    <h6>{el.name}</h6>
                    <p>{el.job}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </article>
    </section>
  );
}
