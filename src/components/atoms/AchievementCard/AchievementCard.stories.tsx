import AchievementCard from "./AchievementCard";

export const Default = {
  args: {
    title: "Success Story",
    image: "/images/growth.png",
    description:
      "Certain circumstances and owning to the claims of duty obligation sof business it will frequently.",
  },
};
const achievementCardConfig = {
  title: "Atoms/AchievementCard",
  component: AchievementCard,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};
export default achievementCardConfig;
