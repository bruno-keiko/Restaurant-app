import { Meta } from "@storybook/react";
import SecondaryHeaderPages from "./SecondaryHeaderPages";

const secondaryHeaderPages: Meta<typeof SecondaryHeaderPages> = {
  title: "Templates/SecondaryHeaderPages",
  component: SecondaryHeaderPages,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
};

export const Default = {
  args: {
    title: "ITEMS",
    backgroundImg: "/images/itemsheadbg.png",
    textContent:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut labore et dolore magna.",
  },
};

export default secondaryHeaderPages;
