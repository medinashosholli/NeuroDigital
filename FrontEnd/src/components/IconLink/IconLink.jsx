/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon } from "../Icon";
import "./style.css";

export const IconLink = ({
  className,
  override = <Icon icon="link" iconLinkClassName="design-component-instance-node" />,
  text = "Link",
}) => {
  return (
    <div className={`icon-link ${className}`}>
      {override}
      <div className="link-wrapper">
        <div className="link-6">{text}</div>
      </div>
    </div>
  );
};

IconLink.propTypes = {
  text: PropTypes.string,
};
