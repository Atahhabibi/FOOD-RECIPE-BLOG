import React from "react";
import "./header.css";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useAppContext } from "../../Context";

export const Header = () => {
  const { setIsSidebarOpen } = useAppContext();

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          <div className="nav-header">
            <Link to="/" className="heading">
              Food <span className="Rec">Recipes</span>
            </Link>
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="toggle-btn"
            >
              <FaBars />
            </button>
          </div>
          <nav>
            <ul className="pages">
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
