import { Icon } from ".";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    icon: {
      options: [
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
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon: "slack",
    iconLinkClassName: {},
  },
};
