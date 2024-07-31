import React from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <h1>
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
