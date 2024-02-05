import React, { useState } from "react";
import "./NestedDropdown.css"
import FirstDropdown from "./FirstDropdown";

const NestedDropdown = () => {
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
    <div className="nested-dropdown">
      <FirstDropdown />
      <FirstDropdown />
      <FirstDropdown />
      <FirstDropdown />
      <FirstDropdown />
      <FirstDropdown />
      <FirstDropdown />
      <FirstDropdown />
    </div>
  );
};

export default NestedDropdown;
