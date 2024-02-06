import React, { useState } from "react";
import "./NestedDropdown.css";

const FirstDropdown = ({ subData }) => {
  console.log(subData);
  const [showFirstDropdown, setShowFirstDropdown] = useState(false);
  const [showSecondDropdown, setShowSecondDropdown] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleFirstDropdownEnter = () => {
    setShowFirstDropdown(true);
  };

  const handleFirstDropdownLeave = () => {
    setShowFirstDropdown(false);
    setShowSecondDropdown(false);
    setSelectedItem(null);
  };

  const handleItemHover = (item) => {
    setSelectedItem(item);
    setShowSecondDropdown(true);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        onMouseEnter={handleFirstDropdownEnter}
        onMouseLeave={handleFirstDropdownLeave}
        style={{ display: "inline-block" }}
      >
        <button>
          <img
            src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
            alt="fdf"
          />
          <p>{subData.category}</p>
        </button>

        {showFirstDropdown && (
          <div
            style={{
              borderRadius: "4px",
              position: "absolute",
              top: "160px",
              left: "0%",
              backgroundColor: "#fff",
              minWidth: "160px",
            }}
          >
            <ul>
              <li onMouseEnter={() => handleItemHover("Produce")}>Produce</li>
              <li onMouseEnter={() => handleItemHover("Dairy")}>Dairy</li>
              <li onMouseEnter={() => handleItemHover("Produce")}>Bakery</li>  
            </ul>
          </div>
        )}
      </div>
      {showSecondDropdown && selectedItem && (
        <div
          style={{
            padding: "8px",
            borderRadius: "4px",
            position: "absolute",
            top: "160px",
            left: "100%",
            backgroundColor: "#fff",
            minWidth: "160px",
          }}
        >
          <li>Apples {selectedItem}</li>
          <li>Tomatoes {selectedItem}</li>
          <li>Spinach {selectedItem}</li>
          <li>Paneer {selectedItem}</li>
        </div>
      )}
    </div>
  );
};

export default FirstDropdown;
