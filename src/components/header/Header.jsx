import React from "react";
import logo from "../../assets/images/logo.svg";
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
            <h2>
              Food <span className="Rec">Recipe</span>
              <span className="N"> Nutrition</span>{" "}
            </h2>
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
