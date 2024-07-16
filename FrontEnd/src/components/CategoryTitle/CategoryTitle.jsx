/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const CategoryTitle = ({ title = "Category title", size, className, divClassName }) => {
  return (
    <div className={`category-title ${size} ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>{title}</div>
    </div>
  );
};

CategoryTitle.propTypes = {
  title: PropTypes.string,
  size: PropTypes.oneOf(["large", "medium", "small"]),
};
