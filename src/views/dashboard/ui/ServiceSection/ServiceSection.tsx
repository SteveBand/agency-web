import { BiSolidError, BiSolidTime } from "react-icons/bi";
import { BsAwardFill, BsChatFill, BsFillLightningFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { MobileService } from "./MobileService";
import { DesktopService } from "./DekstopService";

export const ServiceSection: React.FC = () => {
  return (
    <section className="service-section">
      <h5 className="service-sub-title">SERVICE</h5>
      <h3 className="service-title">Exceeding Expectations</h3>
      <p className="desc">
        We're not just another agency, We're your path to exceptional web
        projects
      </p>

      <DesktopService />
      <MobileService />
    </section>
  );
};
