import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import { BsList } from "react-icons/bs";
import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    const header = document.getElementsByTagName("header")[0];
    const scroll = window.scrollY;
    function scrollFunc() {
      const scroll = window.scrollY;
      if (scroll > 80) {
        header.classList.add("active-header");
      } else {
        header.classList.remove("active-header");
      }
    }

    window.addEventListener("scroll", scrollFunc);
    return () => window.removeEventListener("scroll", scrollFunc);
  }, []);
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <h1>
            <BsList />
            Re<span>^</span>rtex
          </h1>
        </Link>

        <ul>
          <li>
            <Link to={""}>Why Us</Link>
          </li>
          <li>
            <Link to={""}>Case Studies</Link>
          </li>
          <li>
            <Link to={""}>Testimonials</Link>
          </li>
          <li>
            <Link to={""}>FAQ</Link>
          </li>
        </ul>
        <button>
          Let's Talk <FiArrowUpRight />
        </button>
      </nav>
    </header>
  );
}
