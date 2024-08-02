import { FiArrowUpRight } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

export const HeroSection: React.FC = () => {
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

          <div className="hero-users-container">
            <div className="avatars">
              <span className="avatar">
                <img
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                  alt="Image 1"
                />
              </span>
              <span className="avatar">
                <img
                  src="https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg"
                  alt="Image 2"
                />
              </span>
              <span className="avatar">
                <img
                  src="https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/7d2a57d4-23ee-4ccf-b34c-bd6ddbb1f4a8/width=450/00000-3694828998-A%20professional%20profile%20photo%20for%20linkedin%20of%20%20man,%20%20business%20clothing,%20at%20office,%20bokeh%20background,%20deep%20of%20field,%20kkw-ph1%20_lora.jpeg"
                  alt="Image 3"
                />
              </span>
            </div>
            <div className="info">
              <p>1000+</p>
              <p>Satisfied clients</p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
