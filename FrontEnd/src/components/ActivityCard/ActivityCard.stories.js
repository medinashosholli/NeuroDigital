import { ActivityCard } from ".";

export default {
  title: "Components/ActivityCard",
  component: ActivityCard,
  argTypes: {
    description1: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    link: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    checkbox: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    tag: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    notes: {
      options: ["off", "on"],
      control: { type: "select" },
    },
    team: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    description:
      "Journey mapping visually outlines a user’s steps towards a goal, capturing their experience, emotions, and external interactions. It offers insights into the user’s journey, identifying improvement opportunities.",
    title: "Journey mapping",
    description1: "off",
    link: "off",
    checkbox: "off",
    tag: "off",
    notes: "off",
    team: "off",
    className: {},
    visible: true,
    divClassName: {},
    linkClassName: {},
    hasLink: true,
  },
};
