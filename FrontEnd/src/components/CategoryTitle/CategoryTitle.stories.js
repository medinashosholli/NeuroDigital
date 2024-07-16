import { CategoryTitle } from ".";

export default {
  title: "Components/CategoryTitle",
  component: CategoryTitle,
  argTypes: {
    size: {
      options: ["large", "medium", "small"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    title: "Category title",
    size: "large",
    className: {},
    divClassName: {},
  },
};
