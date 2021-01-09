import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Dropdown.css";

export const DropdownSimple = ({ dropdownName, dropdownOptions }) => {
  const [dropdownSimpleOpen, setDropdownSimpleOpen] = useState(false);
  const [dropdownSimpleSelected, setDropdownSimpleSelected] = useState("");
  const handleClick = (option) => {
    setDropdownSimpleOpen(false);
    setDropdownSimpleSelected(option);
  };
  return (
    <div className="dropdown">
      <div className="dropdownSimple">
        <span
          className="dropdownName"
          onClick={() => setDropdownSimpleOpen(!dropdownSimpleOpen)}
        >
          {dropdownSimpleSelected ? dropdownSimpleSelected : dropdownName}
          <span
            className={dropdownSimpleOpen ? "caretUpIcon" : "caretDownIcon"}
          />
        </span>
        {dropdownSimpleOpen && (
          <span className="dropdownOptions">
            <span className="dropdownOption" onClick={() => handleClick("")}>
              {"None"}
            </span>
            {dropdownOptions.map((option) => (
              <span
                className="dropdownOption"
                onClick={() => handleClick(option)}
              >
                {option}
              </span>
            ))}
          </span>
        )}
      </div>
    </div>
  );
};

DropdownSimple.propTypes = {
  dropdownName: PropTypes.string.isRequired,
  dropdownOptions: PropTypes.array.isRequired,
};
