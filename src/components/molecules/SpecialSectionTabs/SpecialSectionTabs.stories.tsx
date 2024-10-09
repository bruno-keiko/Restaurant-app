import SpecialSectionTabs from "./SpecialSectionTabs";

export const Default = {
  args: {
    activeIndex: 0,
    handleTabClick: (index: number) => console.log(index),
    tabs: ["Breakfast", "Lunch", "Dinner", "Starters", "Beverages"],
  },
};

const specialSectionTabsConfig = {
  title: "Molecules/SpecialSectionTabs",
  component: SpecialSectionTabs,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default specialSectionTabsConfig;
