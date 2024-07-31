import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { FiArrowUpRight } from "react-icons/fi";

export const Dashboard: React.FC = () => {
  const textEl = useRef<HTMLSpanElement>(null);

  return (
    <section className="hero-section">
      <article className="hero-title">
        <h1>
          We develop
          <br />
          <span className="colored">amazing </span>
          <TypeAnimation
            sequence={["websites", 4000, "apps", 4000]}
            wrapper="span"
            speed={1}
            repeat={Infinity}
            deletionSpeed={1}
          />{" "}
          <br />
          for your business
        </h1>

        <p className="desc">
          Discover our seamless workflow as we transform Figma designs into
          stunning <br />
          Webflow websites. Explore the synergy between design and development
          for <br />a pixel-perfect online experience.
        </p>

        <div className="hero-bottom">
          <button>
            View work <FiArrowUpRight />
          </button>

          <div></div>
        </div>
      </article>
    </section>
  );
};
