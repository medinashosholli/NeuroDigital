/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CheckedTrue = ({ className }) => {
  return (
    <svg
      className={`checked-true ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="rect"
        fill="#343A40"
        height="18"
        rx="3"
        stroke="#343A40"
        strokeWidth="2"
        width="18"
        x="1"
        y="1"
      />
      <path
        className="path"
        d="M6.42859 10.0003L8.8393 12.1431L12.8572 7.85742"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
};
