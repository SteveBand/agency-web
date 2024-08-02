import { BiSolidError, BiSolidTime } from "react-icons/bi";
import { BsAwardFill, BsChatFill, BsFillLightningFill } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi2";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export const DesktopService: React.FC = () => {
  return (
    <article className="services-container-wrapper" data-view="desktop">
      <div className="service-container">
        <div className="icon-container">
          <BsAwardFill />
        </div>
        <h6>Expertise in Figma-to-Webflow</h6>
        <p>
          We have a proven track record and expertise in seamlessly turning
          Figma designs into functional Webflow websites
        </p>
        <Link to="">
          <HiArrowRight />
        </Link>
      </div>
      <div className="service-container">
        <div className="icon-container">
          <IoLocationSharp />
        </div>
        <h6>On-Page SEO Excellence</h6>
        <p>
          We have a proven track record and expertise in seamlessly boosting
          search engine rankings and driving organic traffic to your website.
        </p>
        <Link to="">
          <HiArrowRight />
        </Link>
      </div>
      <div className="service-container">
        <div className="icon-container">
          <BsFillLightningFill />
        </div>
        <h6>Ineractive Magic</h6>
        <p>
          We have a proven track record and expertise in creating engaging,
          user-centric websites and apps that captivate audiences and enhance
          digital experiences.
        </p>
        <Link to="">
          <HiArrowRight />
        </Link>
      </div>
      <div className="service-container">
        <div className="icon-container">
          <BsChatFill />
        </div>
        <h6>Dedicated Project Manager</h6>
        <p>
          Ensuring your projects stay on track with personalized attention and
          expert guidance from start to finish.
        </p>
        <Link to="">
          <HiArrowRight />
        </Link>
      </div>
      <div className="service-container">
        <div className="icon-container">
          <BiSolidError />
        </div>
        <h6>Comperhensive Testing</h6>
        <p>
          Ensuring every aspect of your website or app functions flawlessly
          through rigorous and thorough testing processes.
        </p>
        <Link to="">
          <HiArrowRight />
        </Link>
      </div>
      <div className="service-container">
        <div className="icon-container">
          <BiSolidTime />
        </div>

        <h6>Timley Delivery</h6>
        <p>
          Ensuring your projects are completed on schedule with precision and
          efficiency, meeting all your deadlines seamlessly
        </p>
        <Link to="">
          <HiArrowRight />
        </Link>
      </div>
    </article>
  );
};
