import { useState, useContext } from "react";
import RefContext from "../context/RefContext";

export default function Navbar() {

  const {
    gallerySection,
    servicesSection,
    contactSection,
    joinUsSection,
    aboutSection,
    scrollDown,
    goToTop
  } = useContext(RefContext);
  

  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a  className="brand-name">
        <img
          src="https://i.imgur.com/2tEjfCo.png"
          alt="Dvine Models"
          onClick={() => {goToTop()}}
          style={{ maxHeight: "2.6em", margin: "0.5em" }}
        />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a  onClick={() => {scrollDown(aboutSection, 20)
          setIsNavExpanded(!isNavExpanded)}}>CONOCENOS</a>
          </li>
          <li>
            <a onClick={() => {scrollDown(gallerySection, 70)
                 setIsNavExpanded(!isNavExpanded)}}>GALERIA</a>
          </li>
          <li>
            <a onClick={() => {scrollDown(servicesSection, 50)
                 setIsNavExpanded(!isNavExpanded)}}>SERVICIOS</a>
          </li>
          <li>
            <a onClick={() => {scrollDown(joinUsSection, -20)
                 setIsNavExpanded(!isNavExpanded)}}>UNETE</a>
          </li>
          <li>
            <a onClick={() => {scrollDown(contactSection, 50)
                 setIsNavExpanded(!isNavExpanded)}}>CONTACTO</a>
          </li>
          <li><a></a></li>
        </ul>
      </div>
    </nav>
  );
}
