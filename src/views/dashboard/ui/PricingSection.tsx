import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { checkmark } from "../../../assets/svgs/dashboard";

export const PricingSection = () => {
  return (
    <section className="pricing-section">
      <h5 className="pricing-sub-title">PRICING</h5>
      <h3 className="pricing-title">
        One fixed price to get your project done
      </h3>
      <p className="pricing-desc">
        Your custome on-demand team for only a single payment
      </p>
      <article className="packages-wrapper">
        <article className="package-container">
          <p className="plan">Basic</p>
          <h3>$445</h3>
          <p className="plan-desc">
            Fully responsive 1 page website, developed in Webflow. Unlimited
            sections.
          </p>
          <ul>
            <li>{checkmark} Functional website</li>
            <li>{checkmark} Responsive Design</li>
            <li>{checkmark} Content upload</li>
            <li>{checkmark} Functional website</li>
          </ul>
          <Link to={""}>
            Get Started <FiArrowUpRight />
          </Link>
        </article>
        <article className="package-container">
          <p className="plan">Standard</p>
          <h3>$645</h3>
          <p className="plan-desc">
            Fully responsive 3 pages website, developed in Webflow. unlimited
            Sections
          </p>
          <ul>
            <li>{checkmark} All as previous plan</li>
            <li>{checkmark} 3 pages website</li>
            <li>{checkmark} Content upload</li>
            <li>{checkmark} Functional website</li>
          </ul>
          <Link to={""}>
            Get Started <FiArrowUpRight />
          </Link>
        </article>
        <article className="package-container">
          <p className="plan">Premium</p>
          <h3>$445</h3>
          <p className="plan-desc">
            Fully responsive unlimited pages website, developed in Webflow.
            Connected to Database with a Server supporting the website
          </p>
          <ul>
            <li>{checkmark} All as previous plan</li>
            <li>{checkmark} Unlimited Pages</li>
            <li>{checkmark} DataBase</li>
            <li>{checkmark} Server</li>
            <li>{checkmark} Users interface</li>
            <li>{checkmark} Admin panel</li>
          </ul>
          <Link to={""}>
            Get Started <FiArrowUpRight />
          </Link>
        </article>
      </article>
    </section>
  );
};
