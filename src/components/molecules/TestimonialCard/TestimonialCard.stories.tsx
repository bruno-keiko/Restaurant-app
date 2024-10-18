import { Meta } from "@storybook/react";
import TestimonialCard from "./TestimonialCard";

export const Default = {
  args: {
    name: "Robert Food",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. ",
    rating: 4,
    image: "/images/man.jpg",
  },
};

const TestimonialCardConfig: Meta<typeof TestimonialCard> = {
  title: "Molecules/TestimonialCard",
  component: TestimonialCard,
  tags: ["autodocs"],
};

export default TestimonialCardConfig;
