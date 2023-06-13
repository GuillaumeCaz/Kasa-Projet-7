import React, { useState } from "react";
import "../styles/DropDown.css";
import arrowOpenImage from "../assets/Arrow/ArrowUp.png";
import arrowClosedImage from "../assets/Arrow/ArrowDown.png";

const DropDown = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <button
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        {title}
        <img
          src={isOpen ? arrowOpenImage : arrowClosedImage}
          alt="Flèche"
          className="dropdown-arrow"
        />
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {Array.isArray(content) ? (
            content.map((item, index) => <p key={index}>{item}</p>)
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
