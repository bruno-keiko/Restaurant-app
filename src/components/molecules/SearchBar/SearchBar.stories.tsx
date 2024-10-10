import { Meta } from "@storybook/react";
import React from "react";
import SearchBar from "./SearchBar";

const searchBar: Meta<typeof SearchBar> = {
  title: "Molecules/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
};

type SearchBarProps = React.ComponentProps<typeof SearchBar>;

const Template = (args: SearchBarProps) => {
  const handleSearch = (searchTerm: string) => {
    alert(`Searching for: ${searchTerm}`);
  };
  return <SearchBar {...args} onSearch={handleSearch} />;
};

export const Default = Template.bind({});

export default searchBar;
