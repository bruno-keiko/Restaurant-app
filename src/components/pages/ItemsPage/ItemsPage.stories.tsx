import { Meta } from "@storybook/react";
import ItemsPage from "./ItemsPage";

const itemsPage: Meta<typeof ItemsPage> = {
  title: "Pages/ItemsPage",
  component: ItemsPage,
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

const Template = () => <ItemsPage />;
export const Default = Template.bind({});

export default itemsPage;
