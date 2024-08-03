import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import {
  AmazonLogo,
  AppleLogo,
  FacebookLogo,
  GoogleLogo,
  InstagramLogo,
} from "../../../assets/svgs/dashboard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const TrustedBusinesses: React.FC = () => {
  const Logos = [
    AppleLogo,
    AmazonLogo,
    FacebookLogo,
    GoogleLogo,
    InstagramLogo,
    AppleLogo,
    AmazonLogo,
    FacebookLogo,
    GoogleLogo,
    InstagramLogo,
  ];

  return (
    <section className="trusted-businesses">
      <p className="sub-title">Trusted by 30+ businesses</p>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          660: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          786: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          940: {
            slidesPerView: 4,
            spaceBetween: 30,
          },

          1300: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        centeredSlides={true}
        loop={true}
        freeMode={true}
        autoplay={{ delay: 2500 }}
        modules={[Autoplay, FreeMode]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
        className="mySwiper"
      >
        {Logos.map((logo) => {
          return (
            <SwiperSlide className="custom-slider">
              <div className="svg-container">{logo}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
