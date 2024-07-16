/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckedTrue } from "../../icons/CheckedTrue";
import "./style.css";

export const Checkbox = ({ checked }) => {
  return (
    <>
      {!checked && <div className="checkbox" />}

      {checked && <CheckedTrue className="checked-true" />}
    </>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
};
