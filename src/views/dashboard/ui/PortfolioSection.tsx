import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const PortfolioSection: React.FC = () => {
  return (
    <section className="portfolio-section">
      <h5 className="portfolio-sub-title">PORTFOLIO</h5>
      <h3 className="portfolio-title">Our latest Work</h3>
      <p className="desc">
        Discover our freshset creations that showcase the power of design
        innovation and digital excellence. Explore our latest work and witness
        the impact we bring to every project
      </p>

      <article className="portfolios-wrapper">
        <div
          className="portfolio-container"
          style={{
            backgroundImage:
              "url('https://w0.peakpx.com/wallpaper/90/456/HD-wallpaper-buy-snake-pass-snake-game.jpg')",
          }}
        >
          <div className="project-desc"></div>
          <Link to={""}>
            See project <HiArrowRight />{" "}
          </Link>
        </div>
        <div
          className="portfolio-container"
          style={{
            backgroundImage:
              "url('https://muffingroup.com/blog/wp-content/uploads/2023/02/Galileo.png')",
          }}
        >
          <div className="project-desc"></div>
          <Link to={""}>
            See project <HiArrowRight />{" "}
          </Link>
        </div>
        <div
          className="portfolio-container"
          style={{
            backgroundImage:
              "url('https://muffingroup.com/blog/wp-content/uploads/2023/03/Evervault.png')",
          }}
        >
          <div className="project-desc"></div>
          <Link to={""}>
            See project <HiArrowRight />{" "}
          </Link>
        </div>
        <div
          className="portfolio-container"
          style={{
            backgroundImage:
              "url('https://marketing4ecps.com/wp-content/uploads/2021/08/Eyes-on-Main-1024x635.png')",
          }}
        >
          <div className="project-desc"></div>
          <Link to={""}>
            See project <HiArrowRight />{" "}
          </Link>
        </div>
        <div
          className="portfolio-container"
          style={{
            backgroundImage:
              "url('https://alvarotrigo.com/blog/assets/imgs/2021-12-19/soldis-gradient-style-flat-web-design.jpeg')",
          }}
        >
          <div className="project-desc"></div>
          <Link to={""}>
            See project <HiArrowRight />{" "}
          </Link>
        </div>
        <div
          className="portfolio-container"
          style={{
            backgroundImage:
              "url('https://limeup.io/wp-content/uploads/2022/08/CRM-high-fidelity-wireframe.webp')",
          }}
        >
          <div className="project-desc"></div>
          <Link to={""}>
            See project <HiArrowRight />{" "}
          </Link>
        </div>
      </article>
    </section>
  );
};
