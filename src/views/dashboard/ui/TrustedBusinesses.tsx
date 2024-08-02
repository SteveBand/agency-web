import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
        centeredSlides={true}
        loop={true}
        freeMode={true}
        autoplay={{ delay: 2500 }}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => console.log(swiper)}
      >
        {Logos.map((logo) => {
          return (
            <SwiperSlide>
              <div className="svg-container">{logo}</div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
