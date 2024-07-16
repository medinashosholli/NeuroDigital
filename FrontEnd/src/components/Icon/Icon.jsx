/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon73 } from "../../icons/Icon73";
import { Icon95 } from "../../icons/Icon95";
import { IconConfluence } from "../../icons/IconConfluence";
import { IconDropbox } from "../../icons/IconDropbox";
import { IconFigma } from "../../icons/IconFigma";
import { IconGoogleSheets } from "../../icons/IconGoogleSheets";
import { IconGoogleSlides } from "../../icons/IconGoogleSlides";
import { IconJira } from "../../icons/IconJira";
import { IconMiro } from "../../icons/IconMiro";
import { IconMonday } from "../../icons/IconMonday";
import { IconNotion } from "../../icons/IconNotion";
import { IconTrello } from "../../icons/IconTrello";
import "./style.css";

export const Icon = ({ icon, iconLinkClassName }) => {
  return (
    <>
      {icon === "slack" && <Icon73 className="instance-node-2" />}

      {icon === "link" && <div className={`icon ${iconLinkClassName}`} />}

      {icon === "google-doc" && <Icon95 className="instance-node-2" />}

      {icon === "google-sheets" && <IconGoogleSheets className="instance-node-2" />}

      {icon === "google-slides" && <IconGoogleSlides className="instance-node-2" />}

      {icon === "miro" && <IconMiro className="instance-node-2" />}

      {icon === "figma" && <IconFigma className="instance-node-2" />}

      {icon === "notion" && <IconNotion className="instance-node-2" />}

      {icon === "jira" && <IconJira className="instance-node-2" />}

      {icon === "confluence" && <IconConfluence className="instance-node-3" />}

      {icon === "trello" && <IconTrello className="instance-node-2" />}

      {icon === "dropbox" && <IconDropbox className="instance-node-3" />}

      {icon === "monday" && <IconMonday className="instance-node-2" />}
    </>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf([
    "slack",
    "trello",
    "monday",
    "google-slides",
    "miro",
    "jira",
    "figma",
    "confluence",
    "dropbox",
    "notion",
    "link",
    "google-sheets",
    "google-doc",
  ]),
};
