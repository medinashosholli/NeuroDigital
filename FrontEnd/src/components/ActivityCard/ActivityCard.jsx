/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon28 } from "../../icons/Icon28";
import { Icon73 } from "../../icons/Icon73";
import { Icon95 } from "../../icons/Icon95";
import { Checkbox } from "../Checkbox";
import { Icon } from "../Icon";
import { IconLink } from "../IconLink";
import "./style.css";

export const ActivityCard = ({
  description = "Journey mapping visually outlines a user’s steps towards a goal, capturing their experience, emotions, and external interactions. It offers insights into the user’s journey, identifying improvement opportunities.",
  title = "Journey mapping",
  description1,
  link,
  checkbox,
  tag,
  notes,
  team,
  className,
  visible = true,
  divClassName,
  linkClassName,
  hasLink = true,
}) => {
  return (
    <div className={`activity-card ${className}`}>
      {((description1 === "off" && link === "off" && notes === "on" && team === "off") ||
        (description1 === "off" && link === "off" && team === "on") ||
        (description1 === "off" && link === "on" && notes === "off" && tag === "off" && team === "off") ||
        (description1 === "off" && link === "on" && notes === "off" && team === "on") ||
        (description1 === "off" && link === "on" && notes === "on") ||
        (description1 === "off" && notes === "off" && tag === "on" && team === "off") ||
        description1 === "on") && (
        <div className={`title ${tag} ${checkbox}`}>
          {((checkbox === "on" &&
            description1 === "off" &&
            link === "off" &&
            notes === "on" &&
            tag === "off" &&
            team === "on") ||
            (checkbox === "on" &&
              description1 === "off" &&
              link === "on" &&
              notes === "off" &&
              tag === "off" &&
              team === "on") ||
            (checkbox === "on" &&
              description1 === "off" &&
              link === "on" &&
              notes === "on" &&
              tag === "off" &&
              team === "off") ||
            (checkbox === "on" &&
              description1 === "on" &&
              link === "off" &&
              notes === "off" &&
              tag === "off" &&
              team === "on") ||
            (checkbox === "on" &&
              description1 === "on" &&
              link === "off" &&
              notes === "on" &&
              tag === "off" &&
              team === "off") ||
            (checkbox === "on" &&
              description1 === "on" &&
              link === "on" &&
              notes === "off" &&
              tag === "off" &&
              team === "off")) && (
            <>
              <>{visible && <Checkbox checked={false} />}</>
              <div className={`journey-mapping ${divClassName}`}>{title}</div>
            </>
          )}

          {((checkbox === "on" && description1 === "off" && link === "off" && notes === "off" && tag === "off") ||
            (checkbox === "on" && description1 === "off" && link === "off" && tag === "off" && team === "off") ||
            (checkbox === "on" &&
              description1 === "off" &&
              link === "on" &&
              notes === "on" &&
              tag === "off" &&
              team === "on") ||
            (checkbox === "on" && description1 === "off" && notes === "off" && tag === "off" && team === "off") ||
            (checkbox === "on" &&
              description1 === "on" &&
              link === "on" &&
              notes === "off" &&
              tag === "off" &&
              team === "on") ||
            (checkbox === "on" &&
              description1 === "on" &&
              link === "on" &&
              notes === "on" &&
              tag === "off" &&
              team === "off") ||
            (checkbox === "on" && description1 === "on" && notes === "on" && tag === "off" && team === "on") ||
            (checkbox === "on" && link === "off" && notes === "off" && tag === "off" && team === "off")) && (
            <Checkbox checked={false} />
          )}

          {((checkbox === "off" && description1 === "off" && link === "off" && notes === "off" && tag === "on") ||
            (checkbox === "off" && description1 === "off" && link === "off" && tag === "off" && team === "on") ||
            (checkbox === "off" && description1 === "off" && link === "on" && team === "on") ||
            (checkbox === "off" && description1 === "off" && notes === "on" && team === "off") ||
            (checkbox === "off" && description1 === "on" && link === "off" && notes === "off") ||
            (checkbox === "off" && description1 === "on" && link === "off" && notes === "on" && team === "off") ||
            (checkbox === "off" &&
              description1 === "on" &&
              link === "on" &&
              notes === "off" &&
              tag === "off" &&
              team === "off") ||
            (checkbox === "off" && description1 === "on" && link === "on" && notes === "off" && tag === "on") ||
            (checkbox === "on" && description1 === "off" && link === "off" && notes === "off" && tag === "off") ||
            (checkbox === "on" && description1 === "off" && link === "off" && notes === "off" && team === "off") ||
            (checkbox === "on" && description1 === "off" && link === "off" && tag === "off" && team === "off") ||
            (checkbox === "on" && description1 === "off" && link === "on" && notes === "on" && team === "on") ||
            (checkbox === "on" && description1 === "off" && notes === "off" && tag === "on" && team === "on") ||
            (checkbox === "on" && description1 === "off" && notes === "on" && tag === "on" && team === "off") ||
            (checkbox === "on" &&
              description1 === "on" &&
              link === "off" &&
              notes === "on" &&
              tag === "on" &&
              team === "off") ||
            (checkbox === "on" && description1 === "on" && notes === "off" && tag === "on") ||
            (checkbox === "on" && link === "off" && notes === "off" && tag === "off" && team === "off") ||
            (description1 === "off" && link === "off" && notes === "on" && tag === "on" && team === "on") ||
            (description1 === "off" && link === "on" && notes === "off" && team === "off") ||
            (description1 === "on" && link === "off" && notes === "on" && team === "on") ||
            (description1 === "on" && link === "on" && notes === "off" && tag === "off" && team === "on") ||
            (description1 === "on" && link === "on" && notes === "on")) && (
            <div className="div">
              {tag === "off" && <>{title}</>}

              {tag === "on" && <>Tag</>}
            </div>
          )}
        </div>
      )}

      {((checkbox === "off" &&
        description1 === "off" &&
        link === "off" &&
        notes === "off" &&
        tag === "off" &&
        team === "on") ||
        (checkbox === "off" && description1 === "on" && link === "off" && tag === "off") ||
        (checkbox === "off" &&
          description1 === "on" &&
          link === "on" &&
          notes === "off" &&
          tag === "off" &&
          team === "off") ||
        (checkbox === "on" &&
          description1 === "on" &&
          link === "off" &&
          notes === "on" &&
          tag === "off" &&
          team === "off") ||
        (checkbox === "on" && description1 === "on" && notes === "off" && tag === "off" && team === "off") ||
        (checkbox === "on" && link === "off" && notes === "off" && tag === "off" && team === "on") ||
        (description1 === "off" && link === "off" && notes === "off" && tag === "on" && team === "on") ||
        (description1 === "off" && link === "off" && notes === "on" && tag === "off" && team === "on") ||
        (description1 === "off" && link === "off" && notes === "on" && tag === "on" && team === "off") ||
        (description1 === "off" && link === "on" && notes === "off" && tag === "off") ||
        (description1 === "off" && link === "on" && notes === "off" && tag === "on" && team === "off") ||
        (description1 === "off" && notes === "on" && tag === "off" && team === "off") ||
        (link === "off" && notes === "off" && tag === "on" && team === "off")) && (
        <div
          className={`description tag-0-${tag} link-${link} description-${description1} notes-${notes} checkbox-${checkbox}`}
        >
          {((checkbox === "off" && tag === "on") ||
            (checkbox === "on" && description1 === "on" && notes === "on") ||
            (notes === "off" && tag === "off")) && (
            <div
              className={`journey-mapping-2 ${
                (description1 === "on" && link === "on") ||
                (description1 === "on" && tag === "on") ||
                (description1 === "on" && team === "on") ||
                (link === "on" && tag === "on") ||
                (link === "on" && team === "on") ||
                notes === "on" ||
                (tag === "on" && team === "on")
                  ? linkClassName
                  : undefined
              }`}
            >
              {tag === "off" && description1 === "on" && <p className="text-wrapper-14">{description}</p>}

              {tag === "on" && <>{title}</>}

              {tag === "off" && link === "on" && description1 === "off" && (
                <>
                  <IconLink
                    className="icon-link-instance"
                    override={<Icon icon="link" iconLinkClassName="icon-instance" />}
                    text="Link"
                  />
                  <IconLink
                    className="icon-link-instance"
                    override={<Icon95 className="instance-node" />}
                    text="Document"
                  />
                  <IconLink
                    className="icon-link-instance"
                    override={<Icon28 className="instance-node" />}
                    text="File"
                  />
                  <IconLink
                    className="icon-link-instance"
                    override={<Icon73 className="instance-node" />}
                    text="Slack"
                  />
                </>
              )}

              {tag === "off" && description1 === "off" && link === "off" && (
                <>
                  <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-30.png" />
                  <div className="text-wrapper-2">Susie Q.</div>
                </>
              )}
            </div>
          )}

          {notes === "on" &&
            (checkbox === "off" || description1 === "off") &&
            (checkbox === "off" || tag === "off") &&
            ["off", "on"].includes(description1) &&
            (description1 === "on" || tag === "off") && (
              <>
                <div className="frame">
                  {description1 === "off" && <div className="text-wrapper-3">Notes</div>}

                  {description1 === "on" && <p className="text-wrapper-14">{description}</p>}
                </div>
                <div className="frame-2">
                  {description1 === "off" && <div className="text-wrapper-4">Type here...</div>}

                  {description1 === "on" && (
                    <>
                      <div className="div-wrapper">
                        <div className="text-wrapper-3">Notes</div>
                      </div>
                      <div className="frame-3">
                        <div className="text-wrapper-4">Type here...</div>
                      </div>
                    </>
                  )}
                </div>
              </>
            )}

          {checkbox === "on" && tag === "on" && (
            <>
              <Checkbox checked={false} />
              <div className="journey-mapping">{title}</div>
            </>
          )}
        </div>
      )}

      {((checkbox === "off" &&
        description1 === "on" &&
        link === "off" &&
        notes === "on" &&
        tag === "off" &&
        team === "on") ||
        (checkbox === "on" &&
          description1 === "on" &&
          link === "off" &&
          notes === "on" &&
          tag === "off" &&
          team === "off") ||
        (description1 === "off" && link === "off" && notes === "off" && tag === "on" && team === "on") ||
        (description1 === "off" && link === "off" && notes === "on" && tag === "off" && team === "on") ||
        (description1 === "off" && link === "off" && notes === "on" && tag === "on" && team === "off") ||
        (description1 === "off" && link === "on" && notes === "off" && tag === "off" && team === "on") ||
        (description1 === "off" && link === "on" && notes === "off" && tag === "on" && team === "off") ||
        (description1 === "off" && link === "on" && notes === "on" && tag === "off" && team === "off") ||
        (description1 === "on" && link === "off" && notes === "off" && tag === "off" && team === "on") ||
        (description1 === "on" && link === "off" && notes === "off" && tag === "on" && team === "off") ||
        (description1 === "on" && link === "on" && notes === "off" && tag === "off" && team === "off")) && (
        <>
          <>
            {hasLink && (
              <div
                className={`link link-1-${link} team-${team} checkbox-1-${checkbox} description-3-${description1} tag-2-${tag} notes-0-${notes}`}
              >
                {checkbox === "on" && description1 === "on" && link === "on" && (
                  <>
                    <IconLink className="icon-link-instance" />
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon95 className="instance-node" />}
                      text="Document"
                    />
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon28 className="instance-node" />}
                      text="File"
                    />
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon73 className="instance-node" />}
                      text="Slack"
                    />
                  </>
                )}

                {((checkbox === "off" && description1 === "off" && link === "off" && notes === "off") ||
                  (checkbox === "off" && description1 === "off" && notes === "on" && team === "on") ||
                  (checkbox === "off" && description1 === "on") ||
                  (checkbox === "on" && link === "off" && notes === "off" && team === "off") ||
                  (checkbox === "on" && link === "off" && team === "on") ||
                  (description1 === "off" && notes === "off" && team === "off") ||
                  (link === "on" && notes === "on") ||
                  (link === "on" && team === "on")) && (
                  <div className="frame-4">
                    {team === "on" && (
                      <>
                        <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-30.png" />
                        <div className="text-wrapper-2">Susie Q.</div>
                      </>
                    )}

                    {team === "off" && link === "on" && (
                      <>
                        <IconLink
                          className="icon-link-instance"
                          override={<Icon icon="link" iconLinkClassName="icon-instance" />}
                          text="Link"
                        />
                        <IconLink
                          className="icon-link-instance"
                          override={<Icon95 className="instance-node" />}
                          text="Document"
                        />
                        <IconLink
                          className="icon-link-instance"
                          override={<Icon28 className="instance-node" />}
                          text="File"
                        />
                        <IconLink
                          className="icon-link-instance"
                          override={<Icon73 className="instance-node" />}
                          text="Slack"
                        />
                      </>
                    )}

                    {description1 === "on" && tag === "on" && <p className="text-wrapper-14">{description}</p>}
                  </div>
                )}

                {team === "off" && notes === "on" && link === "off" && (
                  <>
                    <div className="div-wrapper">
                      <div className="text-wrapper-3">Notes</div>
                    </div>
                    <div className="frame-3">
                      <div className="text-wrapper-4">Type here...</div>
                    </div>
                  </>
                )}
              </div>
            )}
          </>
        </>
      )}

      {((checkbox === "off" &&
        description1 === "off" &&
        link === "on" &&
        notes === "off" &&
        tag === "on" &&
        team === "on") ||
        (checkbox === "off" && description1 === "off" && link === "on" && notes === "on" && tag === "on") ||
        (checkbox === "off" && description1 === "on" && link === "off" && notes === "on" && tag === "on") ||
        (checkbox === "off" && description1 === "on" && link === "on" && notes === "off" && tag === "on") ||
        (checkbox === "off" && description1 === "on" && link === "on" && notes === "on" && team === "off") ||
        (checkbox === "off" && link === "on" && notes === "on" && tag === "off" && team === "on") ||
        (checkbox === "on" && description1 === "off" && link === "on" && notes === "on" && team === "on") ||
        (checkbox === "on" &&
          description1 === "on" &&
          link === "off" &&
          notes === "on" &&
          tag === "on" &&
          team === "off") ||
        (checkbox === "on" && description1 === "on" && link === "off" && notes === "on" && team === "on") ||
        (checkbox === "on" &&
          description1 === "on" &&
          link === "on" &&
          notes === "off" &&
          tag === "on" &&
          team === "off") ||
        (checkbox === "on" && description1 === "on" && link === "on" && notes === "on" && tag === "off") ||
        (checkbox === "on" && link === "on" && notes === "off" && tag === "on" && team === "on") ||
        (checkbox === "on" && link === "on" && notes === "on" && tag === "on" && team === "off") ||
        (description1 === "off" && link === "off" && notes === "on" && tag === "on" && team === "on") ||
        (description1 === "on" && link === "off" && notes === "off" && tag === "on" && team === "on") ||
        (description1 === "on" && link === "on" && notes === "off" && tag === "off" && team === "on")) && (
        <div className={`description-2 tag-4-${tag} checkbox-2-${checkbox} description-5-${description1}`}>
          {(checkbox === "off" || tag === "off") &&
            (checkbox === "off" || description1 === "on") &&
            ["off", "on"].includes(tag) &&
            (tag === "on" || description1 === "on") && (
              <div className={`journey-mapping-3 tag-5-${tag} checkbox-3-${checkbox} link-2-${link}`}>
                {tag === "off" && <p className="text-wrapper-14">{description}</p>}

                {tag === "on" && <>{title}</>}
              </div>
            )}

          {checkbox === "on" && tag === "on" && (
            <>
              <Checkbox checked={false} />
              <div className="journey-mapping">{title}</div>
            </>
          )}

          {tag === "off" && description1 === "off" && (
            <>
              <div className="div-wrapper">
                <div className="text-wrapper-3">Notes</div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-4">Type here...</div>
              </div>
            </>
          )}
        </div>
      )}

      {((description1 === "off" && link === "off" && notes === "off" && tag === "off" && team === "off") ||
        (description1 === "on" && link === "on" && notes === "on" && tag === "on" && team === "on")) && (
        <div className={`title-2 checkbox-4-${checkbox}`}>
          {checkbox === "on" && <Checkbox checked={false} />}

          <div className="journey-mapping">{title}</div>
        </div>
      )}

      {((checkbox === "on" &&
        description1 === "off" &&
        link === "on" &&
        notes === "on" &&
        tag === "on" &&
        team === "on") ||
        (description1 === "on" && link === "off" && notes === "on" && tag === "on" && team === "on") ||
        (description1 === "on" && link === "on" && notes === "off" && tag === "on" && team === "on") ||
        (description1 === "on" && link === "on" && notes === "on" && tag === "on" && team === "off") ||
        (description1 === "on" && link === "on" && notes === "on" && team === "on")) && (
        <div className={`description-3 description-6-${description1} tag-6-${tag}`}>
          {description1 === "on" && tag === "on" && (
            <p className={`p link-3-${link} checkbox-5-${checkbox}`}>{description}</p>
          )}

          {(description1 === "off" || tag === "off") && (
            <>
              <div className="div-wrapper">
                <div className="text-wrapper-3">Notes</div>
              </div>
              <div className="frame-3">
                <div className="text-wrapper-4">Type here...</div>
              </div>
            </>
          )}
        </div>
      )}

      {link === "on" && team === "on" && tag === "on" && description1 === "on" && notes === "on" && (
        <>
          <div className="notes">
            <div className="div-wrapper">
              <div className="text-wrapper-3">Notes</div>
            </div>
            <div className="frame-3">
              <div className="text-wrapper-4">Type here...</div>
            </div>
          </div>
          <div className={`link-2 checkbox-6-${checkbox}`}>
            {checkbox === "on" && (
              <>
                <IconLink
                  className="icon-link-instance"
                  override={<Icon icon="link" iconLinkClassName="icon-instance" />}
                  text="Link"
                />
                <IconLink
                  className="icon-link-instance"
                  override={<Icon95 className="instance-node" />}
                  text="Document"
                />
                <IconLink className="icon-link-instance" override={<Icon28 className="instance-node" />} text="File" />
                <IconLink className="icon-link-instance" override={<Icon73 className="instance-node" />} text="Slack" />
              </>
            )}

            {checkbox === "off" && (
              <div className="link-3">
                <IconLink
                  className="icon-link-instance"
                  override={<Icon icon="link" iconLinkClassName="icon-instance" />}
                  text="Link"
                />
                <IconLink
                  className="icon-link-instance"
                  override={<Icon95 className="instance-node" />}
                  text="Document"
                />
                <IconLink className="icon-link-instance" override={<Icon28 className="instance-node" />} text="File" />
                <IconLink className="icon-link-instance" override={<Icon73 className="instance-node" />} text="Slack" />
              </div>
            )}
          </div>
          <div className="team-member">
            <div className="frame-5">
              <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-30.png" />
              <div className="text-wrapper-2">Susie Q.</div>
            </div>
          </div>
        </>
      )}

      {((checkbox === "off" &&
        description1 === "off" &&
        link === "on" &&
        notes === "off" &&
        tag === "on" &&
        team === "on") ||
        (checkbox === "off" && description1 === "off" && link === "on" && notes === "on" && tag === "on") ||
        (checkbox === "off" && description1 === "on" && link === "on" && notes === "off" && tag === "on") ||
        (checkbox === "off" &&
          description1 === "on" &&
          link === "on" &&
          notes === "on" &&
          tag === "on" &&
          team === "off") ||
        (checkbox === "off" && link === "on" && notes === "on" && tag === "off" && team === "on") ||
        (checkbox === "on" && description1 === "off" && link === "on" && notes === "on" && team === "on") ||
        (checkbox === "on" &&
          description1 === "on" &&
          link === "on" &&
          notes === "off" &&
          tag === "on" &&
          team === "off") ||
        (checkbox === "on" && description1 === "on" && notes === "on" && tag === "off" && team === "on") ||
        (checkbox === "on" && link === "on" && notes === "off" && tag === "on" && team === "on") ||
        (checkbox === "on" && link === "on" && notes === "on" && tag === "on" && team === "off") ||
        (description1 === "off" && link === "off" && notes === "on" && tag === "on" && team === "on") ||
        (description1 === "on" && link === "off" && notes === "off" && tag === "on" && team === "on") ||
        (description1 === "on" && link === "off" && notes === "on" && tag === "on") ||
        (description1 === "on" && link === "on" && notes === "off" && tag === "off" && team === "on") ||
        (description1 === "on" && link === "on" && notes === "on" && tag === "off" && team === "off")) && (
        <>
          <div
            className={`link-4 link-4-${link} checkbox-7-${checkbox} team-1-${team} description-7-${description1} notes-1-${notes} tag-7-${tag}`}
          >
            {checkbox === "on" && description1 === "on" && link === "on" && team === "on" && (
              <>
                <IconLink
                  className="icon-link-instance"
                  override={<Icon icon="link" iconLinkClassName="icon-instance" />}
                  text="Link"
                />
                <IconLink
                  className="icon-link-instance"
                  override={<Icon95 className="instance-node" />}
                  text="Document"
                />
                <IconLink className="icon-link-instance" override={<Icon28 className="instance-node" />} text="File" />
                <IconLink className="icon-link-instance" override={<Icon73 className="instance-node" />} text="Slack" />
              </>
            )}

            {((checkbox === "off" && link === "on" && notes === "on" && tag === "on" && team === "on") ||
              (link === "off" && notes === "on" && team === "on") ||
              (link === "on" && notes === "on" && team === "off")) && (
              <>
                <div className="div-wrapper">
                  <div className="text-wrapper-3">Notes</div>
                </div>
                <div className="frame-3">
                  <div className="text-wrapper-4">Type here...</div>
                </div>
              </>
            )}

            {((checkbox === "off" && description1 === "off" && tag === "off") ||
              (checkbox === "off" && description1 === "on" && link === "on" && notes === "on" && team === "on") ||
              (checkbox === "off" && description1 === "on" && notes === "off") ||
              (checkbox === "on" && description1 === "off" && link === "on" && notes === "on" && team === "on") ||
              (checkbox === "on" && link === "off" && notes === "off") ||
              (checkbox === "on" && notes === "off" && team === "off") ||
              (description1 === "off" && notes === "off") ||
              (link === "off" && team === "off")) && (
              <div className="link-5">
                {link === "on" && team === "on" && (
                  <>
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon icon="link" iconLinkClassName="icon-instance" />}
                      text="Link"
                    />
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon95 className="instance-node" />}
                      text="Document"
                    />
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon28 className="instance-node" />}
                      text="File"
                    />
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon73 className="instance-node" />}
                      text="Slack"
                    />
                  </>
                )}

                {(team === "off" || (link === "off" && team === "on")) && (
                  <p className="text-wrapper-14">{description}</p>
                )}
              </div>
            )}
          </div>
          <div
            className={`team-member-2 team-3-${team} checkbox-9-${checkbox} link-6-${link} tag-8-${tag} notes-2-${notes} description-8-${description1}`}
          >
            {((checkbox === "off" && description1 === "on" && link === "on" && team === "off") ||
              (description1 === "off" && link === "on") ||
              (description1 === "on" && link === "on" && team === "on") ||
              (link === "off" && team === "on")) && (
              <div className="frame-6">
                {((checkbox === "off" && link === "off") ||
                  (checkbox === "off" && link === "on" && notes === "off" && team === "on") ||
                  (checkbox === "off" && notes === "on" && tag === "off" && team === "on") ||
                  (checkbox === "on" && team === "on")) && (
                  <>
                    <img className="ellipse" alt="Ellipse" src="/img/ellipse-1-30.png" />
                    <div className="text-wrapper-2">Susie Q.</div>
                  </>
                )}

                {(team === "off" ||
                  (checkbox === "off" && link === "on" && notes === "on" && tag === "on" && team === "on")) && (
                  <>
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon icon="link" iconLinkClassName="icon-instance" />}
                      text="Link"
                    />
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon95 className="instance-node" />}
                      text="Document"
                    />
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon28 className="instance-node" />}
                      text="File"
                    />
                    <IconLink
                      className="icon-link-instance"
                      override={<Icon73 className="instance-node" />}
                      text="Slack"
                    />
                  </>
                )}
              </div>
            )}

            {team === "off" && checkbox === "on" && description1 === "on" && link === "on" && (
              <>
                <IconLink
                  className="icon-link-instance"
                  override={<Icon icon="link" iconLinkClassName="icon-instance" />}
                  text="Link"
                />
                <IconLink
                  className="icon-link-instance"
                  override={<Icon95 className="instance-node" />}
                  text="Document"
                />
                <IconLink className="icon-link-instance" override={<Icon28 className="instance-node" />} text="File" />
                <IconLink className="icon-link-instance" override={<Icon73 className="instance-node" />} text="Slack" />
              </>
            )}

            {team === "off" && link === "off" && (
              <>
                <div className="div-wrapper">
                  <div className="text-wrapper-3">Notes</div>
                </div>
                <div className="frame-3">
                  <div className="text-wrapper-4">Type here...</div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

ActivityCard.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  description1: PropTypes.oneOf(["off", "on"]),
  link: PropTypes.oneOf(["off", "on"]),
  checkbox: PropTypes.oneOf(["off", "on"]),
  tag: PropTypes.oneOf(["off", "on"]),
  notes: PropTypes.oneOf(["off", "on"]),
  team: PropTypes.oneOf(["off", "on"]),
  visible: PropTypes.bool,
  hasLink: PropTypes.bool,
};
