import LoginComponent from "./LoginSection";

export const Default = {};

const headerConfig = {
  title: "Molecules/Header",
  component: LoginComponent,
  tags: ["autodocs"],
  excludeStories: /.*Data$/,
};

export default headerConfig;
