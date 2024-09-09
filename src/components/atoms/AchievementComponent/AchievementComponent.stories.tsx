import AchievementComponent from "./AchievementComponent";

export const Default = {
  args: {
    title: "Success Story",
    image: "/images/growth.png",
    description:
      "Certain circumstances and owning to the claims of duty obligation sof business it will frequently.",
  },
};
const achievementComponentConfig = {
  title: "Atoms/AchievementComponent",
  component: AchievementComponent,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};
export default achievementComponentConfig;
